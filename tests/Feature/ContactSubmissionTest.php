<?php

namespace Tests\Feature;

use App\Mail\ContactMessageReceived;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactSubmissionTest extends TestCase
{
    use RefreshDatabase;

    public function test_contact_submission_stores_message_and_sends_mail(): void
    {
        Mail::fake();

        $response = $this
            ->withSession($this->validChallengeSession())
            ->postJson(route('contact.submit'), $this->validPayload());

        $response->assertCreated()
            ->assertJson([
                'message' => 'Thank you for reaching out. Our team will get back to you within 24-48 hours.',
            ]);

        $this->assertDatabaseHas('contact_messages', [
            'first_name' => 'Asha',
            'last_name' => 'Gurung',
            'phone' => '+977 061 523848',
            'subject' => 'Partnership inquiry',
        ]);

        Mail::assertSent(ContactMessageReceived::class, function (ContactMessageReceived $mail) {
            return $mail->hasTo('info@grouphimalaya.com')
                && $mail->contactMessage->subject === 'Partnership inquiry';
        });
    }

    public function test_contact_submission_requires_expected_fields(): void
    {
        Mail::fake();

        $response = $this
            ->withSession($this->validChallengeSession())
            ->postJson(route('contact.submit'), []);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors([
                'firstName',
                'lastName',
                'phone',
                'subject',
                'message',
                'verificationCode',
            ]);

        $this->assertDatabaseCount('contact_messages', 0);
        Mail::assertNothingSent();
    }

    public function test_contact_submission_rejects_wrong_verification_code(): void
    {
        Mail::fake();

        $response = $this
            ->withSession($this->validChallengeSession())
            ->postJson(route('contact.submit'), $this->validPayload([
                'verificationCode' => 'ZZZ999',
            ]));

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['verificationCode']);

        $this->assertDatabaseCount('contact_messages', 0);
        Mail::assertNothingSent();
    }

    public function test_contact_submission_rejects_honeypot_field(): void
    {
        Mail::fake();

        $response = $this
            ->withSession($this->validChallengeSession())
            ->postJson(route('contact.submit'), $this->validPayload([
                'website' => 'https://spam.example',
            ]));

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['website']);

        $this->assertDatabaseCount('contact_messages', 0);
        Mail::assertNothingSent();
    }

    public function test_contact_submission_rejects_too_fast_submission(): void
    {
        Mail::fake();

        $response = $this
            ->withSession([
                'contact_challenge_code' => 'ABC123',
                'contact_challenge_issued_at' => now()->timestamp,
            ])
            ->postJson(route('contact.submit'), $this->validPayload());

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['form']);

        $this->assertDatabaseCount('contact_messages', 0);
        Mail::assertNothingSent();
    }

    public function test_contact_challenge_endpoint_refreshes_session_code(): void
    {
        $response = $this->getJson(route('contact.challenge'));

        $response->assertOk()
            ->assertJsonStructure(['code', 'minimumSeconds']);

        $this->assertMatchesRegularExpression('/^[A-Z0-9]{6}$/', $response->json('code'));
        $this->assertSame($response->json('code'), session('contact_challenge_code'));
        $this->assertSame(3, $response->json('minimumSeconds'));
    }

    private function validPayload(array $overrides = []): array
    {
        return array_merge([
            'firstName' => 'Asha',
            'lastName' => 'Gurung',
            'phone' => '+977 061 523848',
            'subject' => 'Partnership inquiry',
            'message' => 'I would like to discuss a possible partnership with the team.',
            'verificationCode' => 'ABC123',
            'website' => '',
        ], $overrides);
    }

    private function validChallengeSession(): array
    {
        return [
            'contact_challenge_code' => 'ABC123',
            'contact_challenge_issued_at' => now()->subSeconds(5)->timestamp,
        ];
    }
}

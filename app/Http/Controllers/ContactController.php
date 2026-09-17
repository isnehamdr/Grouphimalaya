<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessageReceived;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    private const CHALLENGE_CODE_KEY = 'contact_challenge_code';
    private const CHALLENGE_ISSUED_AT_KEY = 'contact_challenge_issued_at';
    private const CHALLENGE_TTL_SECONDS = 900;
    private const MIN_FORM_SECONDS = 3;

    public function challenge(Request $request): JsonResponse
    {
        $code = $this->generateChallengeCode();

        $request->session()->put(self::CHALLENGE_CODE_KEY, $code);
        $request->session()->put(self::CHALLENGE_ISSUED_AT_KEY, now()->timestamp);

        return response()->json([
            'code' => $code,
            'minimumSeconds' => self::MIN_FORM_SECONDS,
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'firstName' => ['required', 'string', 'max:100'],
            'lastName' => ['required', 'string', 'max:100'],
            'phone' => ['required', 'string', 'max:30', 'regex:/^[0-9+\-\s()]{7,30}$/'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
            'verificationCode' => ['required', 'string', 'size:6'],
            'website' => ['nullable', 'max:0'],
        ], [
            'phone.regex' => 'Enter a valid phone number.',
            'website.max' => 'Unable to submit this message.',
        ]);

        $validator->after(function ($validator) use ($request) {
            $expectedCode = $request->session()->get(self::CHALLENGE_CODE_KEY);
            $issuedAt = (int) $request->session()->get(self::CHALLENGE_ISSUED_AT_KEY, 0);
            $submittedCode = strtoupper(trim((string) $request->input('verificationCode')));

            if (!$expectedCode || !$issuedAt || now()->timestamp - $issuedAt > self::CHALLENGE_TTL_SECONDS) {
                $validator->errors()->add('verificationCode', 'The verification code expired. Please refresh it and try again.');

                return;
            }

            if (!hash_equals($expectedCode, $submittedCode)) {
                $validator->errors()->add('verificationCode', 'Enter the verification code exactly as shown.');
            }

            if (now()->timestamp - $issuedAt < self::MIN_FORM_SECONDS) {
                $validator->errors()->add('form', 'Please take a moment to review your message before submitting.');
            }
        });

        $validated = $validator->validate();

        $contactMessage = ContactMessage::create([
            'first_name' => $validated['firstName'],
            'last_name' => $validated['lastName'],
            'phone' => $validated['phone'],
            'subject' => $validated['subject'],
            'message' => $validated['message'],
            'ip_address' => $request->ip(),
            'user_agent' => (string) $request->userAgent(),
        ]);

        Mail::to('info@grouphimalaya.com')->send(new ContactMessageReceived($contactMessage));

        $request->session()->forget([
            self::CHALLENGE_CODE_KEY,
            self::CHALLENGE_ISSUED_AT_KEY,
        ]);

        return response()->json([
            'message' => 'Thank you for reaching out. Our team will get back to you within 24-48 hours.',
        ], 201);
    }

    private function generateChallengeCode(): string
    {
        $alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        $code = '';

        for ($i = 0; $i < 6; $i++) {
            $code .= $alphabet[random_int(0, strlen($alphabet) - 1)];
        }

        return $code;
    }
}

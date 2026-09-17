<h1>New contact inquiry</h1>

<p><strong>Name:</strong> {{ $contactMessage->first_name }} {{ $contactMessage->last_name }}</p>
<p><strong>Phone:</strong> {{ $contactMessage->phone }}</p>
<p><strong>Subject:</strong> {{ $contactMessage->subject }}</p>
<p><strong>IP address:</strong> {{ $contactMessage->ip_address ?? 'N/A' }}</p>

<h2>Message</h2>
<p>{{ $contactMessage->message }}</p>

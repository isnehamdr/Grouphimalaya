<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'subject',
        'message',
        'ip_address',
        'user_agent',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    /** @use HasFactory<\Database\Factories\AgencyFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'phone',
        'email',
        'password',
        'is_verified',
    ];

    public function biens()
    {
        return $this->hasMany(Bien::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    


 
}
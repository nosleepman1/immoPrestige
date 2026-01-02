<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TransactionType extends Model
{
    protected $fillable = [
        'name',
    ];

    public function biens()
    {
        return $this->hasMany(Bien::class);
    }
}
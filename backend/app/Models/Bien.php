<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
    

class Bien extends Model
{
    /** @use HasFactory<\Database\Factories\BienFactory> */
    use HasFactory;

    protected $fillable = [
        'agency_id',
        'type_id',
        'title',
        'description',
        'surface',
        'rooms',
        'bedrooms',
        'floor',
        'furnished',
        'price',
        'devise_id',
        'transaction_type_id',
        'address',
        'country',
        'region',
        'city',
        'postal_code',
        'latitude',
        'longitude',
        'is_available',
        'archived_at',
    ];

    public function agency() 
    {
        return $this->belongsTo(Agency::class);
    }

    public function type()
    {
        return $this->belongsTo(TypeBien::class);
    }


    public function devise()
    {
        return $this->belongsTo(Devise::class);
    }

    public function transactionType()
    {
        return $this->belongsTo(TransactionType::class);
    }

    public function posts()
    {
        return $this->hasOne(Post::class);
    }

    
}
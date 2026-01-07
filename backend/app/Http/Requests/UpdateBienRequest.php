<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBienRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'price' => 'required|decimal',
            'surface' => 'required|decimal',
            'rooms' => 'required|integer',
            'bedrooms' => 'required|integer',
            'bathrooms' => 'required|integer',
            'type_id' => 'required|integer|exists:types,id',
            'devises_id' => 'required|integer|exists:devises,id',
            'transaction_types_id' => 'required|integer|exists:transaction_types,id',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'postal_code' => 'required|string|max:20',
            'country' => 'required|string|max:100',
            'agency_id' => 'required|integer|exists:agencies,id',
            'is_available' => 'required|boolean',
            'latitude' => 'required|string|max:255',
            'longitude' => 'required|string|max:255',
            
        ];
    }
}
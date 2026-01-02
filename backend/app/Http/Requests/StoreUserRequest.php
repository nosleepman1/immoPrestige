<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ];
    }

    public function messages(): array
    {
        return [
            'firstname.required' => 'Prenom requis',
            'lastname.required' => 'Nom de famille requis',
            'email.required' => 'Email requis',
            'email.email' => 'Email doit être une adresse email valide',
            'email.unique' => 'Email est déjà utilisé',
            'password.required' => 'Mot de passe requis',
            'password.min' => 'Mot de passe doit contenir au moins 8 caractères',
            'password.confirmed' => 'Confirmation du mot de passe ne correspond pas',
        ];
    }
}
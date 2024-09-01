<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class MemberRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'base_cost' => ['required', 'integer', 'min:0'],
            'rank' => ['required', 'integer', 'min:1', 'max:7'],
            'base_cost_start_date' => ['required', 'date'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '名前は必須項目です。',
            'name.max' => '名前は100文字以内で入力してください。',
            'base_cost.required' => 'ベースコストは必須項目です。',
            'base_cost.integer' => 'ベースコストは整数でなければなりません。',
            'base_cost.min' => 'ベースコストは0以上でなければなりません。',
            'rank.required' => 'ランクは必須項目です。',
            'rank.integer' => 'ランクは整数でなければなりません。',
            'rank.min' => 'ランクは1以上でなければなりません。',
            'rank.max' => 'ランクは7以下でなければなりません。',
            'base_cost_start_date.required' => '開始日は必須項目です。',
            'base_cost_start_date.date' => '開始日は有効な日付でなければなりません。',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();

        throw new HttpResponseException(
            response()->json(['errors' => $errors], 422)
        );
    }
}

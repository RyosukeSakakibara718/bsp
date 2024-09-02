<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProjectRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'freee_project_code' => ['nullable', 'string', 'max:50'],
            'contract' => ['required', 'integer', 'min:1'],
            'phase' => ['required', 'integer', 'min:1'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after_or_equal:start_date'],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'プロジェクト名は必須項目です。',
            'name.max' => 'プロジェクト名は255文字以内で入力してください。',
            'freee_project_code.max' => 'プロジェクトコードは50文字以内で入力してください。',
            'contract.required' => '契約は必須項目です。',
            'contract.integer' => '契約は整数でなければなりません。',
            'phase.required' => '工程は必須項目です。',
            'phase.integer' => '工程は整数でなければなりません。',
            'start_date.required' => '開始日は必須項目です。',
            'start_date.date' => '開始日は有効な日付でなければなりません。',
            'end_date.required' => '終了日は必須項目です。',
            'end_date.date' => '終了日は有効な日付でなければなりません。',
            'end_date.after_or_equal' => '終了日は開始日以降の日付でなければなりません。',
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

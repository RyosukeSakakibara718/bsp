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
            // 案件情報
            'projects.projects_data.name' => ['required', 'string', 'max:255'],
            'projects.projects_data.contract' => ['required', 'integer', 'min:1'],
            'projects.projects_data.phase' => ['required', 'integer', 'min:1'],
            'projects.projects_data.start_date' => ['required', 'date', 'date_format:Y-m-d'],
            'projects.projects_data.end_date' => ['required', 'date', 'after_or_equal:projects.projects_data.start_date', 'date_format:Y-m-d'],
            'projects.projects_data.freee_project_code' => ['nullable', 'string', 'max:50'],

            // 見積情報
            'projects.estimations.order_price' => ['required', 'integer', 'min:0'], // 例: XXX,XXX,XXXのような形式を整数として扱う
            'projects.estimations.estimate_cost' => ['required', 'integer', 'min:0'],
            'projects.estimations.estimate_person_month' => ['required', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'], // 例: xxx.xx

            // メンバー情報
            'projects.assignment_members.*.member_id' => ['required', 'integer', 'exists:members,id'], // メンバーIDは存在する必要あり
            'projects.assignment_members.*.position' => ['required', 'integer'],
            'projects.assignment_members.*.estimate_total_person_month' => ['required', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'], // 人月の小数点2桁まで

            // 月次見積情報
            'projects.assignment_members.*.assignment_member_monthly_estimations.*.target_month' => ['required', 'string', 'regex:/^\d{4}-\d{2}$/'], // YYYY-MM形式
            'projects.assignment_members.*.assignment_member_monthly_estimations.*.estimate_cost' => ['required', 'integer', 'min:0'],
            'projects.assignment_members.*.assignment_member_monthly_estimations.*.estimate_person_month' => ['required', 'numeric', 'min:0', 'regex:/^\d+(\.\d{1,2})?$/'],

            // 外注情報
            'projects.outsources.*.name' => ['required', 'string', 'max:100'], // 100文字以内
            'projects.outsources.*.estimate_cost' => ['required', 'integer', 'min:0'],
            'projects.outsources.*.cost' => ['nullable', 'integer', 'min:0'],
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

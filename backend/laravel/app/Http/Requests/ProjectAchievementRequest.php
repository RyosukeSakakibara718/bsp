<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectAchievementRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true; // Authorization logic goes here.
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'project_id' => 'required|integer|exists:projects,id',
            'period_type' => 'required|in:daily,weekly,monthly',
            'start_date' => 'required|date_format:Y-m-d',
            'end_date' => 'required|date_format:Y-m-d|after_or_equal:start_date',
            'work_entries.*.date' => 'required|date_format:Y-m-d',
            'work_entries.*.hours' => 'required|numeric|min:0',
            'work_entries.*.cost' => 'required|numeric|min:0'
        ];
    }

    public function messages()
    {
        return [
            'project_id.required' => 'プロジェクトIDは必須です。',
            'project_id.integer' => 'プロジェクトIDは整数である必要があります。',
            'project_id.exists' => '指定されたプロジェクトが存在しません。',
            'period_type.required' => '期間タイプは必須です。',
            'period_type.in' => '無効な期間タイプが指定されています。',
            'start_date.required' => '開始日は必須です。',
            'start_date.date_format' => '開始日の形式は「YYYY-MM-DD」である必要があります。',
            'end_date.required' => '終了日は必須です。',
            'end_date.date_format' => '終了日の形式は「YYYY-MM-DD」である必要があります。',
            'end_date.after_or_equal' => '終了日は開始日と同じかそれ以降である必要があります。',
            'work_entries.*.date.required' => '作業日は必須です。',
            'work_entries.*.date.date_format' => '作業日の形式は「YYYY-MM-DD」である必要があります。',
            'work_entries.*.hours.required' => '作業時間は必須です。',
            'work_entries.*.hours.numeric' => '作業時間は数値である必要があります。',
            'work_entries.*.hours.min' => '作業時間は0以上である必要があります。',
            'work_entries.*.cost.required' => 'コストは必須です。',
            'work_entries.*.cost.numeric' => 'コストは数値である必要があります。',
            'work_entries.*.cost.min' => 'コストは0以上である必要があります。'
        ];
    }
}

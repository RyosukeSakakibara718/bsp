<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectAchievementResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'project_id' => $this->project_id,
            'project_name' => $this->project->name,  // プロジェクト名
            'assignment_member_id' => $this->assignment_member_id,
            'member_name' => $this->assignmentMember->member->name, // メンバー名
            'position' => $this->assignmentMember->position, // 役職
            'daily_cost' => $this->daily_cost,
            'work_time' => $this->work_time,
            'work_date' => $this->work_date ? $this->work_date->format('Y-m-d') : null, // 日付フォーマット調整
        ];
    }

}

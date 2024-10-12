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
            'project' =>[
                'id' => $this->id,
                'assignment_members' => AchievementAssignmentMemberResource::collection($this->assignmentMembers)
            ]
        ];
    }

}

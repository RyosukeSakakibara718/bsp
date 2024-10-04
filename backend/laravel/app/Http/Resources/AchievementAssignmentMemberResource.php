<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AchievementAssignmentMemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'member_id' => $this->member_id,
            'position' => $this->position,
            'work_costs' => [
                WorkCostResource::collection($this->workCosts)
            ]
        ];
    }
}

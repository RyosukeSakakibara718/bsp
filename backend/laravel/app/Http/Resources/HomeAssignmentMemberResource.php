<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HomeAssignmentMemberResource extends JsonResource
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
            'name' => $this->getMemberName(),
            'position' => $this->position,
            'base_cost' => $this->getMemberBaseCost(),
            'estimate_total_person_month' => $this->estimateTotalPersonMonth(),
            'achievement_total_person_month' => $this->achievementTotalPersonMonth(),
            'achievement_total_cost' => $this->achievementTotalCost(),
        ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\HomeAssignmentMemberResource;

class HomeResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'freee_project_code' => $this->freee_project_code,
            'name' => $this->name,
            'start_date' => $this->start_date->format('Y-m-d'),
            'end_date' => $this->end_date->format('Y-m-d'),
            'estimation' => EstimationResource::make($this->estimation),
            'forecast' => [
                'forecast_profit' => $this->forecastProfit(),
                'forecast_cost' => $this->forecastCost(),
                'achievement_person_month' => $this->achievementPersonMonth(),
            ],
            'summary' => [
                'total_estimate_cost' => $this->estimation->estimate_cost,
                'total_achievement_cost' => $this->achievementCost(),
                'achievement_person_month' => $this->achievementPersonMonth(),
                'Remaining_person_month' => $this->remainingPersonMonth(),
                'graph' => $this->graph()
            ],
            'assignment_members' => HomeAssignmentMemberResource::collection($this->assignmentMembers),
            'outsources' => $this->outsources,
        ];
    }
}

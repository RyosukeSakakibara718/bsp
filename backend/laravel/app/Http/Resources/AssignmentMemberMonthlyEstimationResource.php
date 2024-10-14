<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AssignmentMemberMonthlyEstimationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'target_month' => $this->target_month,
            'estimate_cost' => $this->estimate_cost,
            'estimate_person_month' => $this->estimate_person_month !== null ? floatval($this->estimate_person_month) : 0,
        ];
    }
}

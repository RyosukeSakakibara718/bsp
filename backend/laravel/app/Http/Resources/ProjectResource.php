<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $assignmentMember = $this->assignmentMembers->firstWhere('position', 1);
        $projectManager = $assignmentMember ? $assignmentMember->member->name : null;

        return [
            'id' => $this->id,
            'freee_project_code' => $this->freee_project_code,
            'name' => $this->name,
            'company_name' => $this->company_name,
            'start_date' => $this->start_date->format('Y-m-d'),
            'end_date' => $this->end_date->format('Y-m-d'),
            'project_manager' => $projectManager ?: 'Not Assigned',
        ];
    }
}

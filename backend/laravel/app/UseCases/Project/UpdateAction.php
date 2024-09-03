<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Http\Requests\ProjectRequest;
use App\Models\Project;

class UpdateAction
{
    public function __invoke(ProjectRequest $request, string $id): void
    {
        Project::upsert(
            [
                [
                    'id' => $id,
                    'freee_project_code' => $request->input('freee_project_code'),
                    'name' => $request->input('name'),
                    'contract' => $request->input('contract'),
                    'phase' => $request->input('phase'),
                    'start_date' => $request->input('start_date'),
                    'end_date' => $request->input('end_date'),
                ],
            ],
            ['id'],
            ['freee_project_code', 'name', 'contract', 'phase', 'start_date', 'end_date']
        );
    }
}

<?php

declare(strict_types=1);

namespace App\UseCases\ProjectAchievement;

use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ShowAction
{
    public function __invoke(string $id)
    {
        $project = Project::find($id);

        if (! $project) {
            throw new ModelNotFoundException('Project not found');
        }

        return $project;
    }
}

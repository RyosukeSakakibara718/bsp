<?php

declare(strict_types=1);

namespace App\UseCases;

use App\Http\Resources\HomeResource;
use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class HomeAction
{
    public function __invoke(string $id)
    {
        $project = Project::find($id);

        if (! $project) {
            throw new ModelNotFoundException('Project not found');
        }

        return new HomeResource($project);
    }
}

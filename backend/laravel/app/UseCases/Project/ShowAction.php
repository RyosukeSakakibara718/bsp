<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ShowAction
{
    public function __invoke(string $id)
    {
        // プロジェクトをIDで検索
        $project = Project::find($id);

        if (!$project) {
            throw new ModelNotFoundException('Project not found');
        }

        // プロジェクトをProjectResourceを使って返す
        return new ProjectResource($project);
    }
}

<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class DestroyAction
{
    public function __invoke(string $id): void
    {
        // プロジェクトをIDで検索
        $project = Project::find($id);

        if (! $project) {
            throw new ModelNotFoundException('Project not found');
        }

        // プロジェクトを削除
        $project->delete();
    }
}

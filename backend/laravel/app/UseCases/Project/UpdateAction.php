<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Http\Requests\ProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UpdateAction
{
    public function __invoke(ProjectRequest $request, string $id)
    {
        // プロジェクトをIDで検索
        $project = Project::find($id);

        if (!$project) {
            throw new ModelNotFoundException('Project not found');
        }

        // リクエストデータでプロジェクトを更新
        $project->update($request->validated());

        // 更新後のプロジェクトをProjectResourceを使って返す
        return new ProjectResource($project);
    }
}

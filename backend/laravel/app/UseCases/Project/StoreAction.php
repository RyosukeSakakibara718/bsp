<?php

declare(strict_types=1);

namespace App\UseCases\Project;

use App\Http\Requests\ProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;

class StoreAction
{
    public function __invoke(ProjectRequest $request)
    {
        // リクエストデータで新しいプロジェクトを作成
        $project = Project::create($request->validated());

        // 作成後のプロジェクトをProjectResourceを使って返す
        return new ProjectResource($project);
    }
}

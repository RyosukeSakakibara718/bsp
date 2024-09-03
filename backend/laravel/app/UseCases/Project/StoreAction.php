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
        Project::create($request->validated());

        // このアクションでは、作成後のリソースを返す必要はないため、voidを返すようにします。
    }
}

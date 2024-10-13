<?php

declare(strict_types=1);

namespace App\UseCases\Member;

use App\Http\Requests\MemberRequest;
use App\Models\Member;

class StoreAction
{
    public function __invoke(MemberRequest $request): void
    {
        Member::create([
            'name' => $request->input('name'),
            'base_cost' => $request->input('base_cost'),
            'rank' => $request->input('rank'),
            'base_cost_start_date' => $request->input('base_cost_start_date'),
        ]);
    }
}

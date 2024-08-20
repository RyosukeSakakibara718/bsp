<?php

declare(strict_types=1);

namespace App\UseCases\Member;

use App\Http\Requests\MemberRequest;
use App\Models\Member;

class UpdateAction
{
    public function __invoke(MemberRequest $request, string $id)
    {
    $member = Member::find($id);
    $validated = $request->validated();

    $member->name = $validated['name'];
    $member->base_cost = $validated['base_cost'];
    $member->rank = $validated['rank'];
    $member->base_cost_start_date = $validated['base_cost_start_date'];

    $member->save();

    return $member;
    }

}

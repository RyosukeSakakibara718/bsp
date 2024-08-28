<?php

declare(strict_types=1);

namespace App\UseCases\Member;

use App\Http\Requests\MemberRequest;
use App\Models\Member;

class UpdateAction
{
	public function __invoke(MemberRequest $request, string $id)
	{

		logger("到達");
		
		Member::upsert(
			[
				[
					'id' => $id, 
					'name' => $request->input('name'), 
					'base_cost' => $request->input('base_cost'), 
					'rank' => $request->input('rank'), 
					'base_cost_start_date' => $request->input('base_cost_start_date')
				],
			],
			['id'],
			['name', 'base_cost', 'rank', 'base_cost_start_date']
		);

		$member = Member::find($id);

		return $member;
	}
}

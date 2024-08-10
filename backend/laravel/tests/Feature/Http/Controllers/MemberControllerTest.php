<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Member;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MemberControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * 目的：/membersにgetリクエストを送ると、membersテーブル全てのレコードがMemberResourceを踏襲したJsonがレスポンスとして返ってくる
     */
    public function testIndexMembers(): void
    {
        // 生成するメンバー数
        $count = 10;

        Member::factory()->count($count)->create();

        $response = $this->get('api/members');

        // 上記のパスでapiからレスポンスが返ってくることを確認
        $response->assertStatus(200)
            // 上記のパスでapiから特定のJson構造の形式のレスポンスが返ってくることを確認
            ->assertJsonStructure([
                'members' => [
                    [
                        'id',
                        'name',
                        'base_cost',
                        'rank',
                        'base_cost_start_date',
                    ],
                ],
            ]);
        // 上記のパスでapiからmembersテーブル全てのレコードが特定のJson構造の形式のレスポンスで返ってくることを確認
        $responseData = $response->json();
        $this->assertCount($count, $responseData['members']);
    }

    /**
     * 目的：/members/{id}にgetリクエストを送ると、membersテーブルのidに対応するレコードがMemberResourceを踏襲したJsonがレスポンスとして返ってくる
     */
    public function testShowMember(): void
    {
        $members = Member::factory()->count(10)->create();

        $member = $members[0];

        $id = $member->id;

        $response = $this->get("api/members/$id");

        // 上記のパスでapiからレスポンスが返ってくることを確認
        $response->assertStatus(200)
            // 上記のパスでapiから特定のJson構造の形式のレスポンスが返ってくることを確認
            ->assertJsonStructure(
                [
                    'id',
                    'name',
                    'base_cost',
                    'rank',
                    'base_cost_start_date',
                ]
            )
            // 上記のパスでapiからmembersテーブル指定したidのレコードが特定のJson構造の形式のレスポンスで返ってくることを確認
            ->assertJson([
                'id' => $member->id,
                'name' => $member->name,
                'base_cost' => $member->base_cost,
                'rank' => $member->rank,
                'base_cost_start_date' => $member->base_cost_start_date->toISOString(),
            ]
            );
    }
}

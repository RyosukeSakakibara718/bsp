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
    public function test_メンバー一覧取得(): void
    {
        // 生成するメンバー数
        $count = 10;

        Member::factory()->count($count)->create();

        $response = $this->get('v1/members');

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
    public function test_メンバー詳細取得(): void
    {
        $members = Member::factory()->count(10)->create();

        $member = $members[0];

        $id = $member->id;

        $response = $this->get("v1/members/$id");

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
            ->assertJson(
                [
                    'id' => $member->id,
                    'name' => $member->name,
                    'base_cost' => $member->base_cost,
                    'rank' => $member->rank,
                    'base_cost_start_date' => $member->base_cost_start_date->format('Y-m-d'),
                ]
            );
    }

    /**
     * 目的：/membersにPOSTリクエストを送ると、membersテーブルにレコードが登録される。
     */
    public function test_メンバー登録(): void
    {
        $data = [
            'name' => '田中太郎',
            'base_cost' => 420000,
            'rank' => 2,
            'base_cost_start_date' => '2005-11-01',
        ];

        $response = $this->postJson('v1/members', $data);

        // 上記のパスでapiからレスポンスが返ってくることを確認
        $response->assertStatus(201);
        // 上記のパスで登録したレコードがデータベースに存在することを確認
        $this->assertDatabaseHas(
            'members',
            [
                'name' => '田中太郎',
                'base_cost' => 420000,
                'rank' => 2,
                'base_cost_start_date' => '2005-11-01',
            ]
        );

    }

    /**
     * 目的：/membersに不正なPOSTリクエストを送ると、バリデーションにかかる。
     */
    public function test_メンバー登録時のバリデーション(): void
    {
        $invalidData = [
            'name' => '',
            'base_cost' => '10000',
            'rank' => 8,
            'base_cost_start_date' => '2024-08-11 00:20:13.000',
        ];

        $response = $this->postJson('v1/members', $invalidData);

        // 上記のパスでapiからレスポンスが返ってくることを確認
        $response->assertStatus(422);

    }

    /**
     * 目的：/members{$id}にPUTリクエストを送って正常に編集ができると、ステータスコード204が返ってくることを確認
     */
    public function test_メンバー編集が成功(): void
    {
        $members = Member::factory()->count(10)->create();

        $member = $members[0];

        $data = [
            'name' => '田中太郎',
            'base_cost' => 420000,
            'rank' => 2,
            'base_cost_start_date' => '2005-11-01',
        ];

        $response = $this->putJson("v1/members/{$member->id}", $data);
        $response->assertStatus(204);

        // データベースから更新後のメンバー情報を取得
        $updatedMember = Member::find($member->id);

        // データがリクエスト内容と一致しているかを確認
        $this->assertEquals($data['name'], $updatedMember->name);
        $this->assertEquals($data['base_cost'], $updatedMember->base_cost);
        $this->assertEquals($data['rank'], $updatedMember->rank);
        $this->assertEquals($data['base_cost_start_date'], $updatedMember->base_cost_start_date->toDateString());
    }

    /**
     * 目的：/members{$id}に不正なPUTリクエストを送ると、バリデーションにかかる。
     */
    public function test_メンバー編集時のバリデーション(): void
    {
        $members = Member::factory()->count(10)->create();

        $member = $members[0];

        // リクエスト前のデータを取得
        $originalData = $member->toArray();

        $data = [
            'name' => '',
            'base_cost' => 420000,
            'rank' => 2,
            'base_cost_start_date' => '2005-11-01',
        ];

        $response = $this->putJson("v1/members/{$member->id}", $data);
        $response->assertStatus(422);

        $unchangedMember = Member::find($member->id);

        $this->assertEquals($originalData['name'], $unchangedMember->name);
        $this->assertEquals($originalData['base_cost'], $unchangedMember->base_cost);
        $this->assertEquals($originalData['rank'], $unchangedMember->rank);
        $this->assertEquals($originalData['base_cost_start_date'], $unchangedMember->base_cost_start_date->toDateString());
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AssignmentMember;
use App\Models\Member;
use App\Models\Project;

class AssignmentMemberTableSeeder extends Seeder
{
    public function run()
    {
        // 例として、MemberとProjectが既に存在する前提でシードデータを作成
        AssignmentMember::create([
            'project_id' => Project::first()->id, // 既存のプロジェクトID
            'member_id' => Member::first()->id, // 既存のメンバーID
            'position' => AssignmentMember::POSITION_PM, // 定数を使用
            'estimate_total_person_month' => 5.0,
        ]);
    }
}

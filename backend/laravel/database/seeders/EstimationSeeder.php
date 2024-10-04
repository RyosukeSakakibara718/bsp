<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Project;
use App\Models\Estimation;
use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;

class EstimationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 既存のプロジェクトを取得
        $projects = Project::all();

        foreach ($projects as $project) {
            // Estimation レコードを作成
            Estimation::create([
                'project_id' => $project->id,
                'order_price' => rand(100000, 1000000), // 受注額をランダムに設定（例：10万〜100万円）
                'estimate_cost' => rand(50000, 800000), // 見積原価をランダムに設定（例：5万〜80万円）
                'estimate_person_month' => round(rand(10, 120) / 10, 2), // 見積工数をランダムに設定（例：1.0〜12.0人月）
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}

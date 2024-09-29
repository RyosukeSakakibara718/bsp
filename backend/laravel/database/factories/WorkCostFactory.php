<?php

namespace Database\Factories;

use App\Models\WorkCost;
use Illuminate\Database\Eloquent\Factories\Factory;

class WorkCostFactory extends Factory
{
    protected $model = WorkCost::class;

    public function definition()
    {

        return [
            'project_id' => \App\Models\Project::factory(),
            'assignment_member_id' => \App\Models\AssignmentMember::factory(),
            'daily_cost' => $this->faker->numberBetween(20000,20000),
            'work_time' => $this->faker->numberBetween(8, 8) . ' hours',
            'work_date' => $this->faker->date(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}

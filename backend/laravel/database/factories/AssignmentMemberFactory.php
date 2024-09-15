<?php

namespace Database\Factories;

use App\Models\AssignmentMember;
use Illuminate\Database\Eloquent\Factories\Factory;

class AssignmentMemberFactory extends Factory
{
    protected $model = AssignmentMember::class;

    public function definition()
    {
        return [
            'project_id' => \App\Models\Project::factory(),
            'member_id' => \App\Models\Member::factory(),
            'position' => $this->faker->numberBetween(1, 5),
            'estimate_total_person_month' => $this->faker->randomFloat(2, 1, 12),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}

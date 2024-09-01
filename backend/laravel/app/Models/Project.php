<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'freee_project_code',
        'name',
        'contract',
        'phase',
        'start_date',
        'end_date',
    ];

    // リレーション: Project は複数の AssignmentMember を持つ
    public function assignmentMembers()
    {
        return $this->hasMany(AssignmentMember::class);
    }

    // リレーション: Project は複数の WorkCost を持つ
    public function workCosts()
    {
        return $this->hasMany(WorkCost::class);
    }
}

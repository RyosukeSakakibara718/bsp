<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WorkCost extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'project_id',
        'assignment_member_id',
        'daily_cost',
        'work_time',
        'work_date',
    ];

    // リレーション: WorkCost は Project に属する
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // リレーション: WorkCost は AssignmentMember に属する
    public function assignmentMember()
    {
        return $this->belongsTo(AssignmentMember::class);
    }
}

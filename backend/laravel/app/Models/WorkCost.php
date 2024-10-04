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

    protected $casts = [
        // データベース保存時は Y-m-d 形式
        'work_date' => 'date:Y-m-d',
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

    // アクセサ: work_date を Y/m/d 形式で表示
    public function getWorkDateAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->format('Y/m/d');
    }
}

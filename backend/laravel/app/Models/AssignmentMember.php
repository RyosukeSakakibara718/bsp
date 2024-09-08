<?php

namespace App\Models;

use App\Constants\PositionConstants;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssignmentMember extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'project_id',
        'member_id',
        'position',
        'estimate_total_person_month',
    ];

    // リレーション: AssignmentMember は Project に属する
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // リレーション: AssignmentMember は Member に属する
    public function member()
    {
        return $this->belongsTo(Member::class);
    }

    // リレーション: AssignmentMember は複数の WorkCost を持つ
    public function workCosts()
    {
        return $this->hasMany(WorkCost::class);
    }

    // 役職名を取得するメソッド
    public function getPositionNameAttribute()
    {
        return PositionConstants::getPositionName($this->position);
    }

    // 月次見積もりとのリレーションを追加
    public function monthlyEstimations()
    {
        return $this->hasMany(AssignmentMemberMonthlyEstimation::class, 'assignment_member_id');
    }
}


<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssignmentMember extends Model
{
    use HasFactory, SoftDeletes;

    // 定数定義
    const POSITION_PM = 1;
    const POSITION_MEMBER = 2;
    const POSITION_MGR = 3;

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
        $positions = [
            self::POSITION_PM => 'PM',
            self::POSITION_MEMBER => 'メンバー',
            self::POSITION_MGR => 'MGR',
        ];

        return $positions[$this->position] ?? '不明';
    }
}


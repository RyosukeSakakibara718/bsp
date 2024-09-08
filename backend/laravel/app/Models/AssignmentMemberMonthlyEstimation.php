<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AssignmentMemberMonthlyEstimation extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'assignment_member_id',
        'target_month',
        'estimated_person_month',
    ];

    // AssignmentMember とのリレーション
    public function assignmentMember()
    {
        return $this->belongsTo(AssignmentMember::class, 'assignment_member_id');
    }
}

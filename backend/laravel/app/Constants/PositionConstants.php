<?php

namespace App\Constants;

class PositionConstants
{
    const POSITION_PM = 1;
    const POSITION_MEMBER = 2;
    const POSITION_MGR = 3;
    const POSITION_QA = 4;

    /**
     * Undocumented function
     *
     * @param [type] $position  PM = 1, メンバー = 2, MGR = 3, QA = 4

     * @return void
     */
    public static function getPositionName($position)
    {
        $positions = [
            self::POSITION_PM => 'PM',
            self::POSITION_MEMBER => 'メンバー',
            self::POSITION_MGR => 'MGR',
            self::POSITION_QA => 'QA',
        ];

        return $positions[$position] ?? '不明';
    }
}

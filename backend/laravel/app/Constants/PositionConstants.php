<?php

namespace App\Constants;

class PositionConstants
{
    const POSITION_PM = 1;
    const POSITION_MEMBER = 2;
    const POSITION_MGR = 3;

    /**
     * Undocumented function
     *
     * @param [type] $position  PM = 1, メンバー = 2, MGR = 3

     * @return void
     */
    public static function getPositionName($position)
    {
        $positions = [
            self::POSITION_PM => 'PM',
            self::POSITION_MEMBER => 'メンバー',
            self::POSITION_MGR => 'MGR',
        ];

        return $positions[$position] ?? '不明';
    }
}

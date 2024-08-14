<?php

declare(strict_types=1);

use App\Http\Controllers\MemberController;
use Illuminate\Support\Facades\Route;

Route::controller(MemberController::class)->group(function () {
    Route::get('/members', 'index')->name('メンバー一覧取得');
    Route::get('/members/{id}', 'show')->name('メンバー詳細取得');
    Route::post('/members', 'store')->name('メンバー登録');
});

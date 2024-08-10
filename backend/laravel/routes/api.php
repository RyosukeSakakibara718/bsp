<?php

declare(strict_types=1);

use App\Http\Controllers\MemberController;
use Illuminate\Support\Facades\Route;

Route::get('greeting', function () {
    return 'Hello, World';
})->name('greeting');

Route::controller(MemberController::class)->group(function(){
    Route::get('/members', [MemberController::class, 'index'])->name('メンバー一覧取得');
    Route::get('/members/{id}', [MemberController::class, 'show'])->name('メンバー詳細取得');
});

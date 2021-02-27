<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LettercController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VillageController;
use App\Http\Controllers\PhotoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:api']], function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('details', [AuthController::class, 'details']);
    Route::apiResource('villages', VillageController::class);
    Route::apiResource('lettercs', LettercController::class);
    Route::apiResource('permissions', PermissionController::class);
    Route::get('letter-detail/{id}', [LettercController::class, 'detailLetter']);
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/detail/{id}', [UserController::class, 'show']);
    Route::put('users', [UserController::class, 'update']);
    Route::post('photos/{id}', [PhotoController::class, 'store']);
});




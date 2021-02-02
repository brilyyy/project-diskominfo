<?php

use App\Http\Controllers\LettercController;
use App\Http\Controllers\VillageController;
use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// LETTERC ROUTE

Route::get('lettercs', [LettercController::class, 'index']);
Route::post('lettercs', [LettercController::class, 'store']);
Route::get('lettercs/{id}', [LettercController::class, 'show']);
Route::put('lettercs/{id}', [LettercController::class, 'update']);
Route::delete('letterc/{id}', [LettercController::class, 'destroy']);

// VILLAGE ROUTE

Route::get('villages', [VillageController::class, 'index']);
Route::put('village/{id}', [VillageController::class, 'update']);
Route::get('village/{id}', [VillageController::class, 'show']);

<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\LettercController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VillageController;
use App\Http\Controllers\KrawanganController;
use App\Http\Controllers\KrawanganDetailController;
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
    Route::get('villages', [VillageController::class, 'index']);
    Route::put('villages/{id}', [VillageController::class, 'update']);
    Route::get('user-detail', [UserController::class, 'userDetail']);
});


Route::group(['middleware' => ['auth:api', 'role:super-admin']], function () {
    Route::get('villages/{id}', [VillageController::class, 'show']);
    Route::post('villages', [VillageController::class, 'store']);
});


Route::group(['middleware' => ['auth:api', 'role:super-admin|admin-desa', 'permission:letterc']], function () {
    Route::get('lettercs', [LettercController::class, 'index']);
    Route::post('lettercs', [LettercController::class, 'store']);
    Route::get('lettercs/{id}', [LettercController::class, 'show']);
    Route::put('lettercs/{id}', [LettercController::class, 'update']);
    Route::delete('lettercs/{id}', [LettercController::class, 'destroy']);
    Route::get('letter-detail/{id}', [LettercController::class, 'detailLetter']);
});

Route::group(['middleware' => ['auth:api', 'role:super-admin|admin-desa', 'permission:krawangan']], function () {
    Route::get('krawangans', [KrawanganController::class, 'index']);
    Route::post('krawangans', [KrawanganController::class, 'store']);
    Route::get('krawangans/{id}', [KrawanganController::class, 'show']);
    Route::put('krawangans/{id}', [KrawanganController::class, 'update']);
    Route::put('krawangans/{id}', [KrawanganController::class, 'update']);
    Route::get('krawangan/details/{id}', [KrawanganDetailController::class, 'show']);
    Route::post('krawangan/details/', [KrawanganDetailController::class, 'store']);
});

Route::group(['middleware' => ['auth:api', 'role:super-admin', 'permission:permission']], function () {
    Route::get('roles', [PermissionController::class, 'index']);
    Route::put('roles/{id}', [PermissionController::class, 'update']);
    Route::delete('roles/{id}', [PermissionController::class, 'destroy']);
});

Route::group(['middleware' => ['auth:api', 'role:super-admin', 'permission:user']], function () {
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::put('users/{id}', [AuthController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);
});

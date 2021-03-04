<?php

namespace App\Services;

use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserServices
{
    use ApiResponser;

    public function index()
    {
        $user = DB::table('users')
        ->join('villages', 'users.village_id', '=', 'villages.id')
        ->get();
        return $this->successResponse($user, 'User data retrieved successfully');
    }

    public function show($id)
    {
        $user = User::find($id);
        $user->getAllPermissions();
        return $this->successResponse($user, 'User details retrieved successfully');
    }
}

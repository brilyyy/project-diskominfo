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
        // $user = User::all();
        $user = User::with('village')->get();
        return $this->successResponse($user, 'User data retrieved successfully');
    }

    public function show($id)
    {
        $permissionList = [];
        $user = User::find($id);
        $user->getAllPermissions();
        foreach ($user->permissions as $permission) {
            array_push($permissionList, $permission->name);
        }
        $data = [
            'id' => $user->id,
            'village_id' => $user->village_id,
            'name' => $user->name,
            'email' => $user->email,
            'permissions' => $permissionList,
            'username' => $user->username,
        ];
        return $this->successResponse($data, 'User details retrieved successfully');
    }
}

<?php

namespace App\Services;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;

class UserServices
{
    use ApiResponser;

    public function index()
    {
        $user = User::all();
        return $this->successResponse(new UserResource($user), 'User data retrieved successfully');
    }

    public function show($id)
    {
        $user = User::find($id);
        $user->getAllPermissions();
        return $this->successResponse(new UserResource($user), 'User details retrieved successfully');
    }

    public function update(Request $request, $id)
    {

    }
}

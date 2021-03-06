<?php

namespace App\Services;

use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserServices
{
    use ApiResponser;

    public function index()
    {
        $user = User::with('village')->get();
        return $this->successResponse($user, 'User data retrieved successfully');
    }

    public function show($id)
    {
        $ps = [];
        $user = User::find($id);
        $permissions = $user->getAllPermissions();
        foreach ($user->permissions as $value) {
            array_push($ps, $value->name);
        }
        $data = [
            'id' => $user->id,
            'village_id' => $user->village_id,
            'name' => $user->name,
            'email' => $user->email,
            'permissions' => $ps,
            'username' => $user->username,
        ];
        return $this->successResponse($data, 'User details retrieved successfully');
    }

    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return $this->successResponse($user, 'User Deleted Successfully', 200);
    }

    public function userDetail()
    {
        $user = User::with('village')->where('id', Auth::id())->get();
        return $this->successResponse($user, 'User data retreived successfully');
    }
}

<?php

namespace App\Services;

use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AuthServices
{

    use ApiResponser;

    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:55',
            'username' => 'required',
            'password' => 'required|confirmed',
            'email' => 'required',
            'village_id' => 'required',
        ]);

        $validatedData['password'] = Hash::make($request->password);
        $validatedData['village_id'] = $request->get('village_id');
        $user = User::create($validatedData);
        $user->syncRoles($request->all()['roles']);

        return $this->successResponse($user, 'Registered Successfully', 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->username = $request->get('username');
        $user->village_id = $request->get('village_id');
        $user->save();

        $user->syncRoles($request->all()['roles']);
        return $this->successResponse($user, 'Registered Successfully', 201);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($loginData)) {
            return $this->errorResponse('User does not exist', 400);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $data = ['user' => auth()->user(), 'access_token' => $accessToken];

        return $this->successResponse($data, 'User Logged In Successfully');
    }

    public function logout(Request $request)
    {
        $logout = $request->user()->token()->revoke();
        if ($logout) {
            return $this->successResponse('', 'User Logged Out Successfully', 200);
        }
    }

    public function details()
    {

        $user = User::find(Auth::id());
        $user->getAllPermissions();
        return $this->successResponse($user, 'User Details Retreived Successfully', 200);
    }
}

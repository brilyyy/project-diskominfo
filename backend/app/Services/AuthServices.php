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
            'username' => 'required|unique:users',
            'password' => 'required|confirmed'
        ]);

        $validatedData['password'] = Hash::make($request->password);
        $user = User::create($validatedData);

        return $this->successResponse($user, 'Registered Successfully', 201);
    }

    public function login(Request $request)
    {
        $loginData = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if(!auth()->attempt($loginData)){
            return $this->errorResponse('User does not exist', 400);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $data = ['user' => auth()->user(), 'access_token' => $accessToken];

        return $this->successResponse($data, 'User Logged In Successfully');
    }

    public function logout(Request $request)
    {
        $logout = $request->user()->token()->revoke();
        if($logout){
            return $this->successResponse('','User Logged Out Successfully', 200);
        }
    }

    public function details()
    {

        $user = User::find(Auth::id());
        $user->getAllPermissions();
        return $this->successResponse($user, 'User Details Retreived Successfully', 200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Services\AuthServices;

class AuthController extends Controller
{
    protected $auth;

    public function __construct(AuthServices $auth)
    {
        $this->auth = $auth;
    }

    public function register(Request $request)
    {
        return $this->auth->register($request);
    }

    public function login(Request $request)
    {
        return $this->auth->login($request);
    }

    public function logout(Request $request)
    {
        return $this->auth->logout($request);
    }

    public function details()
    {
        return $this->auth->details();
    }
}

<?php

namespace App\Http\Controllers;

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

    public function update(Request $request, $id)
    {
        return $this->auth->update($request, $id);
    }
}

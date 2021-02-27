<?php

namespace App\Http\Controllers;

use App\Services\UserServices;

class UserController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->middleware(['permission:access users']);
        $this->user = new UserServices();
    }

    public function index()
    {
        return $this->user->index();
    }

    public function show($id)
    {
        return $this->user->show($id);
    }
}

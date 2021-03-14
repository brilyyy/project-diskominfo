<?php

namespace App\Http\Controllers;

use App\Services\UserServices;

class UserController extends Controller
{
    protected $user;

    public function __construct()
    {
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

    public function destroy($id)
    {
        return $this->user->destroy($id);
    }

    public function userDetail()
    {
        return $this->user->userDetail();
    }
}

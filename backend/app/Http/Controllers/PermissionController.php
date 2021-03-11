<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PermissionServices;

class PermissionController extends Controller
{

    protected $permission;

    function __construct()
    {
        $this->middleware(['permission:permission']);
        $this->permission = new PermissionServices();
    }

    public function index()
    {
        return $this->permission->index();
    }

    public function update(Request $request, $id)
    {
        return $this->permission->update($request, $id);
    }

    public function destroy(Request $request, $id)
    {
        return $this->permission->destroy($request, $id);
    }
}

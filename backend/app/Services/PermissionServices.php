<?php

namespace App\Services;

use App\Http\Resources\LettercResource;
use App\Models\User;
use Spatie\Permission\Models\Role;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

class PermissionServices
{
    use ApiResponser;

    public function index()
    {
        $permission = Permission::all();
        return $this->successResponse($permission, 'Permission data retreived successfully');
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->givePermissionTo([$request->permission]);
        return $this->successResponse($user, 'Permission given successfully');
    }

    public function destroy(Request $request, $id)
    {
        $user = User::find($id);
        $user->revokePermissionTo([$request->permission]);
        return $this->successResponse($user, 'Permission revoked successfully');
    }
}

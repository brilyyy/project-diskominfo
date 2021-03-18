<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $superAdmin = Role::create(['name' => 'super-admin', 'guard_name' => 'api']);
        $adminDesa = Role::create(['name' => 'admin-desa', 'guard_name' => 'api']);

        $superAdmin->syncPermissions(['letterc', 'desa', 'user', 'krawangan', 'permission']);
        $adminDesa->syncPermissions(['letterc', 'desa', 'krawangan']);
    }
}

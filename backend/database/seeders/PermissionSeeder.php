<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;


class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        Permission::create(['name' => 'letterc', 'guard_name' => 'api']);
        Permission::create(['name' => 'desa', 'guard_name' => 'api']);
        Permission::create(['name' => 'krawangan', 'guard_name' => 'api']);
        Permission::create(['name' => 'konfigurasi', 'guard_name' => 'api']);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::create(['name' => 'access lettercs','guard_name'=>'api']);
        Permission::create(['name' => 'access villages','guard_name'=>'api']);
        Permission::create(['name' => 'access krawangans','guard_name'=>'api']);
        Permission::create(['name' => 'access users','guard_name'=>'api']);
        Permission::create(['name' => 'access permissions','guard_name'=>'api']);
    }
}

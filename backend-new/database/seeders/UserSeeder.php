<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = \App\Models\User::factory()->create([
            'name' => 'Super Admin',
            'username' => 'admin',
            'email' => 'admin@superadmin.com',
            'password' => Hash::make('admin')
        ]);

        $admin->givePermissionTo('access lettercs');
        $admin->givePermissionTo('access prints');
        $admin->givePermissionTo('access villages');
        $admin->givePermissionTo('access photos');
        $admin->givePermissionTo('access users');
        $admin->givePermissionTo('access permissions');
    }
}

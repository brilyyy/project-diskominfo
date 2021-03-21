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
            'password' => Hash::make('admin'),
            'village_id' => 1
        ]);
        $user = \App\Models\User::factory()->create([
            'name' => 'Admin Desa',
            'username' => 'user',
            'email' => 'user@userise.com',
            'password' => Hash::make('user'),
            'village_id' => 2
        ]);

        $admin->syncPermissions(['letterc', 'desa', 'krawangan', 'user', 'permission']);
        $user->syncPermissions(['letterc', 'krawangan']);
    }
}

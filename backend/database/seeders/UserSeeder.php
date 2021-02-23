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

        $dataUser = [
            ['Oro Oro Ombo', 'orooroombo', '12345678'],
            ['Pesanggrahan', 'pesanggrahan', '12345678'],
            ['Sidomulyo', 'sidomulyo', '12345678'],
            ['Sumberejo', 'sumberejo', '12345678'],
            ['Ngaglik', 'ngaglik', '12345678'],
            ['Sisir', 'sisir', '12345678'],
            ['Songgokerto', 'songgokerto', '12345678'],
            ['Temas', 'temas', '12345678'],
            ['Bulukerto', 'bulukerto', '12345678'],
            ['Bumiaji', 'bumiaji', '12345678'],
            ['Giripurno', 'giripurno', '12345678'],
            ['Gunungsari', 'gunungsari', '12345678'],
            ['Pandanrejo', 'pandanrejo', '12345678'],
            ['Punten', 'punten', '12345678'],
            ['Sumber Brantas', 'sumberbrantas', '12345678'],
            ['Sumbergondo', 'sumbergondo', '12345678'],
            ['Tulungrejo', 'tulungrejo', '12345678'],
            ['Beji', 'beji', '12345678'],
            ['Junrejo', 'junrejo', '12345678'],
            ['Mojorejo', 'mojorejo', '12345678'],
            ['Pendem', 'pendem', '12345678'],
            ['Tlekung', 'tlekung', '12345678'],
            ['Torongrejo', 'torongrejo', '12345678'],
            ['Dadaprejo', 'dadaprejo', '12345678'],
        ];
        foreach($dataUser as $data){
            $user = \App\Models\User::factory()->create([
                'name' => $data[0],
                'username' => $data[1],
                'password' => Hash::make($data[2])
            ]);

            $user->givePermissionTo('access lettercs');
        }
    }
}

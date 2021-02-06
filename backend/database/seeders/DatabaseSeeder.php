<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $dataDesa = [
            ['Oro Oro Ombo', 'Desa', 'Jl. Raya Oro-Oro No.298, Oro-Oro Ombo', 'Batu'],
            ['Pesanggrahan', 'Desa', 'Balai Mayangsari, Jalan Suropati No. 123, Pesanggrahan', 'Batu'],
            ['Sidomulyo', 'Desa', 'Jl. Raya Sidomulyo, Sidomulyo', 'Batu'],
            ['Sumberejo', 'Desa', 'Jl. Indragiri No. 30, Sumberejo', 'Batu'],
            ['Ngaglik', 'Kelurahan', 'Jl. Ikhwan hadi, Ngaglik', 'Batu'],
            ['Sisir', 'Kelurahan', 'Jl. Semeru No. 1', 'Batu'],
            ['Songgokerto', 'Kelurahan', 'Jl. Trunojoyo, Songgokerto', 'Batu'],
            ['Temas', 'Kelurahan', 'Jl. Wukir, Temas', 'Batu'],
            ['Bulukerto', 'Desa', 'Jl. Kenangan No. 15, Bulukerto', 'Bumiaji'],
            ['Bumiaji', 'Desa', 'Jl. Kastubi No. 39, Bumiaji', 'Bumiaji'],
            ['Giripurno', 'Desa', 'Jl. Arjuno No. 05, Giripurno', 'Bumiaji'],
            ['Gunungsari', 'Desa', 'Jl. Mbah Singo, Gunungsari', 'Bumiaji'],
            ['Pandanrejo', 'Desa', 'Jl. Raya Pandanrejo No. 37, Pandanrejo', 'Bumiaji'],
            ['Punten', 'Desa', 'Jl. Raya Punten No. 19 A, Punten', 'Bumiaji'],
            ['Sumber Brantas', 'Desa', 'Jl. Raya Sumber Brantas No.120-124, Sumber Brantas', 'Bumiaji'],
            ['Sumbergondo', 'Desa', 'Jl. Raya Sumbergondo, Sumbergondo', 'Bumiaji'],
            ['Tulungrejo', 'Desa', 'Jl. Pangeran Diponegoro No. 04, Tulungrejo', 'Bumiaji'],
            ['Beji', 'Desa', 'Jl. Raya Beji No. 85, Beji', 'Bumiaji'],
            ['Junrejo', 'Desa', 'Jl. Diponegoro No. 45, Junrejo', 'Bumiaji'],
            ['Mojorejo', 'Desa', 'Jl. Ir Sukarno No.308, Mojorejo', 'Bumiaji'],
            ['Pendem', 'Desa', 'Jl. Raya Caru No. 07, Pendem', 'Bumiaji'],
            ['Tlekung', 'Desa', 'Jl. Raya Tlekung No.197, Tlekung', 'Bumiaji'],
            ['Torongrejo', 'Desa', 'Jl. Junrejo, Torongrejo', 'Bumiaji'],
            ['Dadaprejo', 'Kelurahan', 'Jl. Pronoyudo, Dadaprejo', 'Bumiaji'],
        ];

        foreach($dataDesa as $data){
            DB::table('villages')->insert([
                'nama' => $data[0],
                'status' => $data[1],
                'alamat' => $data[2],
                'kecamatan' => $data[3],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}

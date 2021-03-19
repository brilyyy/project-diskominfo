<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class VillageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataDesa = [
            ['Admin', 'Admin', 'Admin', 'Admin', 'Admin', 1],
            ['Oro-oro Ombo', 'Desa', 'Jl. Raya Oro-Oro No.298, Oro-Oro Ombo', 'Batu', '422.310.8', 2],
            ['Pesanggrahan', 'Desa', 'Balai Mayangsari, Jalan Suropati No. 123, Pesanggrahan', 'Batu', '422.310.7', 3],
            ['Sidomulyo', 'Desa', 'Jl. Raya Sidomulyo, Sidomulyo', 'Batu', '422.310.6', 4],
            ['Sumberejo', 'Desa', 'Jl. Indragiri No. 30, Sumberejo', 'Batu', '422.310.5', 5],
            ['Ngaglik', 'Kelurahan', 'Jl. Ikhwan hadi, Ngaglik', 'Batu', '422.310.2', 6],
            ['Sisir', 'Kelurahan', 'Jl. Semeru No. 1', 'Batu', '422.310.3', 7],
            ['Songgokerto', 'Kelurahan', 'Jl. Trunojoyo, Songgokerto', 'Batu', '422.310.1', 8],
            ['Temas', 'Kelurahan', 'Jl. Wukir, Temas', 'Batu', '422.310.4', 9],
            ['Bulukerto', 'Desa', 'Jl. Kenangan No. 15, Bulukerto', 'Bumiaji', '422.330.4', 10],
            ['Bumiaji', 'Desa', 'Jl. Kastubi No. 39, Bumiaji', 'Bumiaji', '422.330.5', 11],
            ['Giripurno', 'Desa', 'Jl. Arjuno No. 05, Giripurno', 'Bumiaji', '422.330.8', 12],
            ['Gunungsari', 'Desa', 'Jl. Mbah Singo, Gunungsari', 'Bumiaji', '422.330.3', 13],
            ['Pandanrejo', 'Desa', 'Jl. Raya Pandanrejo No. 37, Pandanrejo', 'Bumiaji', '422.330.7', 14],
            ['Punten', 'Desa', 'Jl. Raya Punten No. 19 A, Punten', 'Bumiaji', '422.330.1', 15],
            ['Sumber Brantas', 'Desa', 'Jl. Raya Sumber Brantas No.120-124, Sumber Brantas', 'Bumiaji', '422.330.9', 16],
            ['Sumbergondo', 'Desa', 'Jl. Raya Sumbergondo, Sumbergondo', 'Bumiaji', '422.330.2', 17],
            ['Tulungrejo', 'Desa', 'Jl. Pangeran Diponegoro No. 04, Tulungrejo', 'Bumiaji', '422.330.6', 18],
            ['Beji', 'Desa', 'Jl. Raya Beji No. 85, Beji', 'Bumiaji', '422.320.3', 19],
            ['Junrejo', 'Desa', 'Jl. Diponegoro No. 45, Junrejo', 'Bumiaji', '422.320.5', 20],
            ['Mojorejo', 'Desa', 'Jl. Ir Sukarno No.308, Mojorejo', 'Bumiaji', '422.320.6', 21],
            ['Pendem', 'Desa', 'Jl. Raya Caru No. 07, Pendem', 'Bumiaji', '422.320.7', 22],
            ['Tlekung', 'Desa', 'Jl. Raya Tlekung No.197, Tlekung', 'Bumiaji', '422.320.4', 23],
            ['Torongrejo', 'Desa', 'Jl. Junrejo, Torongrejo', 'Bumiaji', '422.320.2', 24],
            ['Dadaprejo', 'Kelurahan', 'Jl. Pronoyudo, Dadaprejo', 'Bumiaji', '422.320.1', 25],
        ];

        foreach ($dataDesa as $data) {
            DB::table('villages')->insert([
                'nama_desa' => $data[0],
                'status' => $data[1],
                'alamat' => $data[2],
                'kecamatan' => $data[3],
                'no_surat' => $data[4],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}

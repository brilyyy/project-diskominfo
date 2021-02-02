<?php

namespace Database\Factories;

use App\Models\Village;
use Illuminate\Database\Eloquent\Factories\Factory;

class VillageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Village::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nama'=> $this->faker->country,
            'alamat_kantor' => $this->faker->address,
            'nama_kades' => $this->faker->firstName(),
            'kode' => $this->faker->randomDigitNotNull,
            'kode_desa' => $this->faker->randomDigitNotNull
        ];
    }
}

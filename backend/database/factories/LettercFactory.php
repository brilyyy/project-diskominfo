<?php

namespace Database\Factories;

use App\Models\Letterc;
use Illuminate\Database\Eloquent\Factories\Factory;

class LettercFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Letterc::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(10),
            'body' => $this->faker->text(20)
        ];
    }
}

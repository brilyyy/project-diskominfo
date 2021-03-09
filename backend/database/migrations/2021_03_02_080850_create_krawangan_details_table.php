<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKrawanganDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('krawangan_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('krawangan_id');
            $table->integer('blok_persil');
            $table->integer('nomor_letterc');
            $table->string('nama');
            $table->integer('luas');
            $table->string('mutasi');
            $table->timestamps();
            $table->foreign('krawangan_id')->references('id')->on('krawangans');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('krawangan_details');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArsitekturTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('arsitektur', function (Blueprint $table) {
            $table->id();
            $table->string('operating_system');
            $table->string('userid')->unique();
            $table->string('versi_terakhir');
            $table->string('web_based');
            $table->string('mobile_ready');
            $table->string('bahasa');
            $table->string('jenis_database');
            $table->string('nama_database');
            $table->string('os_database');
            $table->string('catatan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('arsitektur');
    }
}

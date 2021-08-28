<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMasterKuesionerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('master_kuesioner', function (Blueprint $table) {
            $table->id();
            $table->string('domainId');
            $table->string('domain_name');
            $table->string('kriteriaId');
            $table->string('kriteria_name');
            $table->string('penjelasan');
            $table->string('rendah');
            $table->string('sedang');
            $table->string('tinggi');
            $table->string('sumber_evidence');
            $table->string('asesee');
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
        Schema::dropIfExists('master_kuesioner');
    }
}

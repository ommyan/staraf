<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAcquirementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acquirement', function (Blueprint $table) {
            $table->id();
            $table->string('perolehan');
            $table->string('userid')->unique();
            $table->string('kepemilikan');
            $table->string('versi_terakhir');
            $table->string('kepemilikan_source_code');
            $table->string('lisensi');
            $table->string('biaya_perolehan');
            $table->string('biaya_pemeliharaan');
            $table->string('tahun_golive');
            $table->string('versi_terinstall');
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
        Schema::dropIfExists('acquirement');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Arsitektur extends Model
{
    use HasFactory;
    protected $table = 'arsitekturs';
    public $timestamps = true;

    protected $fillable = [
        operating_system,
        userid,
        versi_terakhir,
        web_based,
        mobile_ready,
        bahasa,
        jenis_database,
        nama_database,
        os_database,
        catatan
    ];
}

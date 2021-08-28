<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acquirement extends Model
{
    use HasFactory;
    protected $table = 'acquirements';
    public $timestamps = true;

    protected $fillable = [
        perolehan,
        userid,
        kepemilikan,
        versi_terakhir,
        kepemilikan_source_code,
        lisensi,
        biaya_perolehan,
        biaya_pemeliharaan,
        tahun_golive,
        versi_terinstall,
        catatan
    ];
};


function forIn() {
    var mahasiswa = {
        nama: 'Kianti Athavania',
        umur: 22,
        jurusan: 'Sistem Informasi',
        semester: 8,
    }
    for (var x in mahasiswa) {
        console.log(mahasiswa[x])
    }
}

forIn()

// for in merupakan salah satu cara memanggil suatu object menggunakan varisi perulangan
// seperti kondisi di atas dimana object mahasiswa dipanggil menggunakan perulangan 
// melalui variabel x yang telah dimasukan nilai object mahasiswa
function panggilMobil() {
    var mobil = {
        brand: 'rolls royce',
        warna: 'hitam doff',
        harga: 20000,
        tahun: [2001, 1998, 2005, 2007],
    }
    // cara merubah nilai property
    mobil.harga = 10000;
    console.log(mobil.harga);
}

panggilMobil()

// Property adalah bagian dari object,
// property berada di dalam object, contoh pada kondisi di atas.
// brand merupakan sebuah property, begitupun warna, harga, dan tahun
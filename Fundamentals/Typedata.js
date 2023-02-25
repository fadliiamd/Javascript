function typedata() {
    var data = 2;

    console.log(typeof(data)) //Cara menampilkan jenis type data sebuah value/nilai.
    
    if (data === 2) {
        return('Sukses')
    } else {
        return('Gagal')
    }
}

console.log(typedata())

// == artinya jenis value yg sama tanpa memperhatikan jenis status dari typedata,
// === artinya harus benar-benar sama antara jenis value dan status dari typedata value tersebut.
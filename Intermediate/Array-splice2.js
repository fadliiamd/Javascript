function panggilSplice() {
    var kota = ["Tokyo", "Bandung", "Maghribi", "Roma", "Madrid"]
    console.log(kota)

    // kota.splice(2, 0, "Seoul")
    kota.splice(2,1)
    return kota
}

console.log(panggilSplice())

// Selain digunakan untuk menyisipkan data pada array,
// splice juga dapat digunakan untuk menghapus sebuah data pada array\
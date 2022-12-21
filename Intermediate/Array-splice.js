function panggilSplice() {
    var kota = ["Tokyo", "Bandung", "Maghribi", "Roma", "Madrid"]
    console.log(kota)

    kota.splice(2, 0, "Seoul")
    return kota
}

console.log(panggilSplice())

// Fungsi splice dapat untuk menyisipkan atau memasukkan sebuah data ke dalam sebuah array sesuai dengan keinginan atau kebutuhan
// kota.splice(2,0, "") 2 berarti untuk menempatkan data di index ke 2 ["Maghribi"], dan 0 berarti menyisipkan data tanpa menghapus data pada index tersebut
// apabila 0 nya di ganti menjadi 1, maka artinya menghapus data index pada array hendak yang disisipkan
// apabila 0 nya diganti menjadi 2, maka artinya menghapus data index pada array dan 1 index setelahnya, danseterusnya.
for (var i = 0; i < 2; i++) {
    console.log("I ke ", i);
    for (var j = 0; j < 2; j++) {
        console.log("J ke ", j);
    }
    console.log("")
}

// Nested loop merupakan jenis perulangan yang di dalamnya terdapat perulangan.
// Nested loop ini bekerja dengan cara var i akan mengeksekusi kondisi (i=0) lalu dilanjutkan dengan mengeksekusi perulangan j sampai kondisi j selesai (j<2).
// Lalu akan kembali melakukan perulangan i dengan melanjutkan kondisi (i=1) lalu dilanjutkan lagi dengan mengeksekusi perulangan j sampai selesai (j<2).
// dan begitu terus sampai i memenuhi kondisi yang di definisikan (i<2).
//cara menggunakan if else ada dua

//1
//terdapat fungsi streetOne yang memiliki variabel nilai
// dengan kondisi if else yang mengatakan apabila nilai-nya = 3 maka akan menampilkan "benar"
// apabila nilai-nya = 2 maka akan menampilkan "Dua"
// dan apabila selain keduanya maka akan menampilkan "Salah"
function streetOne() {
    var nilai = 3;
    if (nilai === 3) {
        console.log("Benar")
    } else if (nilai === 2) {
        console.log("Dua")
    } else {
        console.log("Salah")
    }
}

//2
// masih dengan cara membaca yang sama seperti cara no 1, hanya penulisannya saja yang berbeda.
function streetTwo() {
    var tinggi = 3;

    if (tinggi === 3) console.log("OK")
    else console.log("Bukan")
}
streetOne()
streetTwo()

//namun, penggunaan if else pada umumnya menggunakan cara yang pertama.
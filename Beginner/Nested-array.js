function panggilnama() {
    var datanama = [
        ["Indonesia","Jerman","Senegal"],
        ["Brazil","Itali","Jepang"],
        ["Maroko","Spanyol","Argentina"]
    ]
    
    console.log(datanama.length)
    console.log(datanama[2][0])
    console.log(datanama[0][0])
}

panggilnama()

// Nested array atau array bercabang adalah suatu kondisi dimana terdapat array di dalam array itu sendiri
// mekanisme pemanggilannya tetap sama, dimulai dengan index [0]
// apabila ingin memanggil data spesifik maka [0][0] alias double index.
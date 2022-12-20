function nestedObject() {
    var mahasiswa = {
        nama: 'Kianti Athavania',
        ipk: {
            semester1: 3.23,
            semester2: 3.90,
            semester3: 3.80
        }
    }
    console.log(mahasiswa.ipk.semester2);
}
nestedObject()

// Nested object merupakan object bercabang dimana terdapat object di dalam object
// Di atas merupakan terdapat object mahasiswa yang memiliki property nama, dan terdapat object lagi bernama ipk
// Pada object ipk ini terdapat property lagi seperti semester1, semester2, dan semester3.
// Teknis pemanggilannya tetap sama, dengan cara memanggil object diikuti tanda "." lalu dilanjutkan menyebutkan property
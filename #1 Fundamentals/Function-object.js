function panggil() {
    var x = {
        pesan: halo(),
    }

    console.log(x.pesan);
}

function halo() {
    return"Halo teman";
}

panggil()

// kondisi di atas merupakan kondisi di mana function dapat dipanggil melalui function yg lain,
// seperti di atas di mana function halo dijadikan value dari object x dan dijadikan value property pesan.
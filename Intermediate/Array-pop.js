function panggilPop() {
    var country = ["Croatia", "Argentina", "French", "Marocco"]

    console.log(country);

    country.pop()
    return country
}

console.log(panggilPop())

// Fungsi pop ini berguna untuk menghapus data array yang terakhir
// Dapat dilihat pada data array di atas, di mana ketika ditambahkan fungsi pop pada variabel country
// Maka data array yang terakhir pada variabel tersebut ["Marocco"] akan menghilang atau terhapus
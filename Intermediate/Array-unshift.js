function panggilUnshift() {
    var country = ["Bali", "Bandung", "Surabaya", "Aceh"]
    
    console.log(country)

    country.unshift("Makassar", "Sorong")
    
    return country
}

console.log(panggilUnshift());

// unshift berfungsi untuk menyisipkan array, namun menyisipkan lewat depan
// alias dari index [0]
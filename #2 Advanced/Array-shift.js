function panggilShift() {
    var country = ["Croatia", "Argentina", "French", "Marocco"]
    console.log(country);
    console.log("----------------------");

    var country2 = country.shift();
    console.log(country2);

    return country;
}

console.log(panggilShift());

// Shift merupakan cara untuk mengambil/menghilangkan data pertama pada suatu array
// contoh di atas terdapat array country dengan data pertama "Croatia"
// lalu digunakan fungsi shift pada variabel country2 = country.shift(), sehingga country2 ini mengambil data array pertama "Croatia" pada variabel country
// Maka ketika kita return country, maka hanya akan menampilkan data array ["Argentina", "French", "Marocco"]
// Karena "Croatia" telah diambil oleh country2 melalui fungsi shift.
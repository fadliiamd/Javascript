function panggilPush() {
    var data = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(data)

    data.push(false)
    
    return data
}

console.log(panggilPush())

// push merupakan fungsi untuk menambahkan data ke variabel
// contoh terdapat variabel array 1-8
// saya coba menambahkan 9 dengan mengetikkan data.push(9)
// lalu return dan console lagi, maka value 9 akan ditambahkan
// tidak hanya number, semua type data pun dapat ditambahkan
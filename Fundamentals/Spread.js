var angka1 = [1, 2, 3, 4];

var angka2 = [5, 6, 7, 8];

var angkaGabungan = [...angka1, ...angka2, 9, 10, 11, 12]

console.log(angka1);
console.log(angka2);
console.log(angkaGabungan);

// Spread dilakukan ketika akan menggabungkan lebih dari satu variabel lalu sambil menambahkan nilai tambahan
// contoh di atas variabel angka1 digabung dengan angka2 menggunakan "..." dan ditambahkan dengan value tambahan (9, 10, 11, 12)
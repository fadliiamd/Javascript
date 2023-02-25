var x = 35;
var y = 30;
var z = 40;

if (x > y) {
    if (x > z) {
        console.log("X adalah yang paling besar")
    } else {
        console.log("X adalah paling besar kedua")
    }
}
else {
    if (x < z) {
        console.log("X adalah yang paling kecil")
    } else {
        console.log("X adalah paling kecil kedua")
    }
}

// Nested if adalah kondisi dimana terdapat if else di dalam if else,
// cara kerjanya masih sama, namun kondisi ini akan memerika lagi kondisi di dalam kondisi tersebut, jadi apabila kondisinya sesuai dengan kondisi pertama
// maka akan memeriksa lagi kondisi di dalam kondisi pertama tersebut.
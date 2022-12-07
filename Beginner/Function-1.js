//The way for make/call the function

//1
function streetOne() {
    console.log("Street One")
}

//2
const streetTwo = function () {
    console.log("Street Two")
}

//3
//thid is usually called the new way to make function 
const streetThree = () => {
    console.log("Street Three")
}

streetOne()
streetTwo()
streetThree()
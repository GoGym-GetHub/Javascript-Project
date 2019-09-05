//challenge 1***********************
password = "12398456"

if (password.length <8) {
    console.log("You're password is to short")
}
else {
    console.log(`${password}`)
}
// so i have asked it toi say that the password is less than 8 tio give an error ststement (too short) or if it is 8 characters then copy to the log.

// Challenge 2*********************
let num = 30;

if (num % 3 == 0|| num % 5 == 0){
    console.log("yes this is devisibale")
}
else {
    console.log("check yo numbers gurl")
}

// Challenge 3*********************

let numb = 30;

if (numb % 3 == 0 && numb % 5 == 0){
    console.log("Fizz Buzzz")
}
else if (numb % 5 == 0){
    console.log("Buzz")
}
else if (numb % 3 == 0){
    console.log("Fizz")
}

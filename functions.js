/*const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans ();

// when you "call the function" with () it runs what you typed above.

let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeeIsGrinding == true){
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true
    } 
}
pressGrindBeans()
pressGrindBeans()
pressGrindBeans()

let cashWithdrawal = (amount, acctnumb) => {
    console.log(`You have withdrew £${amount} from the account ${acctnumb}`)
    }
cashWithdrawal(10, 601515)

const takeOrder = (size, drinkType) => {
    console.log(` Order received for: ${size} ${drinkType}`);
}
takeOrder("Medium, Mocha")

let Mikes = 98765432;
let secondary = 12345
let third = 6789
const cashWithdrawal = (amount, acctnum) => {
    console.log(`You have withdrawn £${amount} from the account number ${acctnum}`);
}
cashWithdrawal (300, Mikes)
cashWithdrawal (100, secondary)
cashWithdrawal (100, third)

//returning the function.
const addUp = (num1, Num2) => {
    return num1 + Num2;
}
console.log(addUp(7,3));
console.log(addUp(2,5));

const multiplyByNineFifths = (celcius) => {
    return celcius * (9/5);
};
const getFahrenheit = (celcius) => {
    return multiplyByNineFifths(celcius) + 32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");

const divideByNineFifths = (fahrenheit) => {
    return fahrenheit / (9*5);
};
const getcelcius = (fahrenheit) => {
    return divideByNineFifths(fahrenheit) - 32;
};
console.log("The temperature is " + getcelcius(86) + "°C");

let orderCount = 0;
const takeOrder = (size, topping) => {
    console.log(`you have ordered a ${size} pizza with a ${topping} topping}`);
    orderCount++
}
takeOrder("large", "pepperoni" )
//ask for them to check.
// it is because i did not close the string with "" and then seperate them with ,...........

let balance = 100
let cashWithdrawal = 50
let pin = 1234
if (cashWithdrawal < balance && pin == 1234){
    console.log(" Please take your funds, Thank you.")
}
else if (balance < cashWithdrawal){
    console.log("Sorry, you have insufficient funds")
}*/

const takeOrder = (filling1, filling2, filling3, filling4, filling5) => {
    console.log(`Here is your sandwich with the following fillings, ${filling1} ${filling2} ${filling3} ${filling4} ${filling5}`)
}
takeOrder("cheese", "Ham", "lettuce", "dog food", "plastic")



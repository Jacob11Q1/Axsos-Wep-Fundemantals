// 1) Basic Function
console.log("********** Basic Function **********");
function welcome(){
    console.log("Welcome To Cooding!...");
}
welcome();

// 2) With Arguments
console.log("********** With Arguments **********");
function square(number){
    let sum = number * number;
    console.log("The Square Of Number: " + sum);
}
square(8);

// 3) With Return Value
console.log("********** With Return Value **********");
function convertToCelcius(F){
    let convertToC = (F - 32) * 5 / 9;
    console.log("The Convertion From F To C Is: " + convertToC);
}
convertToCelcius(85);

// 4) Reusable Function
console.log("********** Reusable Function **********");
function isEven(number){
    let result = number % 2 === 0;
    console.log(result);
    return(result);
}
isEven(89);
// Loop Challenges Assignment:

// 1) Display Odd Numbers From 1 to 20
console.log("********** Challenge 1 **********");
for(var o = 1; o <= 20; o++){
    if(o % 2 == 1){
        console.log("Odd Numbers: " + o);
    }
}


// 2) Multiples of 3 
console.log("********** Challenge 2 **********");
for(var r = 100; r >= 1; r--){
    if(r % 3 == 0){
        console.log("The Deacreasing Numbers: " + r);
    }
}

// 3) Printing The Sequence from 4 to -3.5
console.log("********** Challenge 3 **********");
for(var s = 4; s >= -3.5; s -= 1.5){
    console.log("The Sequence: " + s);
}

// 4) Sigma
console.log("********** Challenge 4 **********");
let sum = 0;
for (var j = 1; j <= 100; j++){
    sum += j;
}
console.log("The Sigma Is: " + sum);

// 5) Factorial
console.log("********** Challenge 5 **********");
let number = 12;
let factorial = 1;
if(number < 0){
    console.log("Cant Find The Factorial For Negative Numbers");
}else {
    for (let f = 1; f <= number; f++){
    factorial *= f;
}
    console.log("The Factorial Is: " + factorial);
}

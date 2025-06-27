 //Numbers from 1 to 10
for(var n = 1; n <= 10; n++){
    console.log("Numbers: " + n);
}


//Numbers from 10 to 1
for(var r = 10; r >= 1; r--){
    console.log("Numbers: " + r);
}


//Printing Even Numbers from 1 to 20
for(var e = 1; e <= 20; e++){
    if(e % 2 == 0){
        console.log("Even Numbers: " + e);
    }
}


/* Printing Odd Numbers from 1 to 20
for(o = 1; o <= 20; o++){
    if(o % 2 == 1){
        console.log("Odd Numbers: " + o);
    }
}
    */

//The Sum of Numbers
let sum = 0;
for(let s = 1; s <= 10; s++){
    sum += s;
}
console.log("The Sum Is: " + sum);


for(var f = 1; f <= 30; f++){
    if(f % 3 == 0 && f % 5 == 0){
        console.log(f + " FizzBuzz");
    }else if(f % 5 == 0){
        console.log(f + " Buzz");
    }else if (f % 3 == 0){
        console.log(f + " Fizz");
    }else{
        console.log(f);
    }
}
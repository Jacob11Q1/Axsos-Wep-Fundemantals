/*
var i = 1;
while(i <= 100 ){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log(i + " Fizz");
    }
    else if(i % 5 == 0){
        console.log(i + " Buzz");
    }
    else{
        console.log(i);  
    }
    i++;
}
    */

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


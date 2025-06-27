// 1) Check Numbers if Negative or Positive
console.log("****** Checking Negative or Positive ******");
function checkingNumbers(num){
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}
checkingNumbers(45);
checkingNumbers(-58);
checkingNumbers(0);

// 2) Assigning Grades Pased On Scores
console.log("****** Assigning Grades Pased On Scores ******");
let scores = 95;
if(scores >= 90){
    console.log("A");
} else if(scores >= 80 && scores <= 89){
    console.log("B");
} else if(scores >= 70 && scores <= 79){
    console.log("C");
} else (scores < 70);{
    console.log("F");
}

// 3) Printing Weekend Days
console.log("****** Printing Weekend Days ******");
let day = "Thursday";
switch(day){
    case "Monday":
        console.log("Start Of The Week");
        break;
    case "Tuesday":
        console.log("Second Day Of The Week");
        break;
    case "Wednesday":
        console.log("Mid Of The Week");
        break;
    case "Thursday":
        console.log("Relax It Is Almost The Weekend");
        break;
    case "Friday":
        console.log("Hang In Thier Tomorrow Is The Weekend");
        break;
    case "Saturday":
        console.log("Horayyyy.. It Is The Weekend");
        break;
    case "Sunday":
        console.log("Horayyyy.. It Is The Weekend");
        break;
}
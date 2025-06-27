// Assignment 1) Accessing Elements
let color = ["Red" , "Blue" , "Green" , "Yellow" , "Purple"];
// A) Last and first element:
console.log("First Element: " + color[0]);
console.log("Last Element: " + color[4]);
// B) Print The Element At The Second Position:
console.log("Second Position Element: " + color[1]);
// C) Updating The Element To Orange
color[1] = "orange";
console.log("The Updated Array Of (Color): " + color);


// Assignment 2) Traversing An Array
console.log("********** Traversing An Array **********");
let numbers = [10,20,30,40,50];
for(let n = 0; n<numbers.length; n++){
    console.log("The Numbers In The Array: " + numbers[n]);
}
// B) In Reverse
console.log("********** Traversing An Array In Reverse **********");
for(r = numbers.length-1; r >=0; r--){
    console.log("The Numbers In Reverse: " + numbers[r]);
}

// Assignment 3) Searching In An Array
console.log("********** Searching In An Array **********");
let searching = [5,10,15,20,25];
for(let s = 0; s<searching.length; s++){
    if(searching[s] === 25){
        console.log("Found At The Position: " + s);
        break;
    }else{
        console.log("Not Found");
    }
}

// Assignment 4) Sorting An Array
console.log("********** Sorting An Array **********");
// A) Ascending Order And Descending Order
let scores = [50,20,70,10,40];
// 1) Ascending Order:
scores.sort((a,b)=> a-b);
console.log(scores);
// 2) Descending Order:
scores.sort((a,b) => b-a);
console.log(scores);
// B) Sorting The Name Arrays By Alphabetical Orders:
let Alphabetical = ["Shatha" , "Sara" , "Lina" , "Sami" , "Dalia"];
Alphabetical.sort();
console.log(Alphabetical);

// Assignment 5) Inserting Elements
console.log("********** Inserting Elements **********");
let animals = ["Dog" , "Cat" , "Rabbit"];
// A) Adding Elephant To The End Of The Array
animals.push("Elephant");
console.log(animals);
// B) Adding Lion To The Beggining I The Array
animals.unshift("Lion");
console.log(animals);
// C) Inserting Tiger Between (Dog And Cat)
animals.splice(2,0,"Tiger");
console.log(animals);

// Assignment 6) Deleting Elements
console.log("********** Deleting Elements **********");
let fruits = ["Apple" , "Banana" , "Cherry" , "Date"];
// A) Remove The First Element
fruits.shift();
console.log(fruits);
// B) Removing The Last Element
fruits.pop();
console.log(fruits);
// C) Removing Banana
fruits.splice(0,1);
console.log(fruits);

// Assignment 7) Compining Arrays
console.log("********** Compining Arrays **********");
let array1 = [1,2,3];
let array2 = [4,5,6];
array1.push(...array2);
console.log(array1);

// Assignment 8) Splitting An Array
console.log("********** Splitting An Array **********");
let items = ["a" , "b" , "c" , "d" , "e"];
const mid = Math.floor(items.length / 2);
let firstArray = items.slice(0, mid);
let secondArray = items.slice(mid);
console.log(firstArray);
console.log(secondArray);

// Assignment 9) Filtering Elements
console.log("********** Filtering Elements **********");
let filtering = [1,5,10,15,20,25,30];
let filterednumbers = filtering.filter(x => x > 15);
console.log("The Filtered Array Is: " + filterednumbers);

// Assignment 10) Advanced Challenge
console.log("********** Advanced Challenge **********");
let advanced = [1,2,2,3,4,4,5];
// A) Remove Duplicates
let newAdvanced = [];
for(let r = 0; r < advanced.length; r++){
    if(newAdvanced.includes(advanced[r]) == true){
        continue;
    }else {
        newAdvanced.push(advanced[r]);
    }
    console.log(newAdvanced);
}

// B) Rotate Array
arrayRotation(2);
function arrayRotation(n){
    let advancedArray = [1,2,3,4,5];
    let rotation = [];
    for(var f = advancedArray.length-n; f < advancedArray.length; f++){
        rotation.push(advancedArray[f]);
    }
    for(var j = 0; j < advancedArray.length - n; j++){
        rotation.push(advancedArray[j]);
    }
    console.log(rotation);
}
// refacture better
// 1) Remove Blanks
console.log("********** Remove Blanks **********");
function removeBlanks(str){
    return str.split(" ").join("");
}
// A) Word One
let play = "pl ayTha tF u nkyM usi c";
let word1 = removeBlanks(play);
console.log("The Joined Word Is: " + word1);
// B) Word 2
let believe = "I can not BELIEVE It's not BUTTER";
let word2 = removeBlanks(believe);
console.log("The Joined Word Is: " + word2);


// 2) Get Digits
console.log("********** Get Digits **********");
let mixed1 = "abc8c0d1ngd0j0!8";
let mixed2 = "0s1a3y5w7h9a2t4?6!8?0";
function getDigits(str){
    let result = " ";
    for(let i = 0; i < str.length; i++){
        let charcter = str[i];
        if(!isNaN(Number(charcter)) && charcter !== " "){
            result += charcter;
        }
    }
    return result;
}
let numbersOnly = getDigits(mixed1);
let numbersOnly2 = getDigits(mixed2);
console.log("Only The Numbers: " + numbersOnly);
console.log("Only The Numbers: " + numbersOnly2);

// 3) Acronums
console.log("********** Acronums **********");
function acronym(str){
    const x= str.split(' ');
    let acronym = '';
    for(let i = 0; i < x.length; i++){
        if(x[i].length > 0){
            acronym += x[i].charAt(0).toUpperCase();
        }
    }
    return acronym
}
console.log(acronym("there's no free lunch - gotta pay your way."));
console.log(acronym("Live from New York, it's Saturday night"));

// 4) Count Non-Spaces
console.log("********** Count Non-Spaces **********");
function countNonSpaces(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== " "){
            count++;
        }
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello World!"));

// 5) Remove Shorter Strings
console.log("********** Remove Shorter Strings **********");
function removeShorterStrings(arr , minLength){
    const filteredStrings = arr.filter(str => str.length >= minLength.length);
    return filteredStrings;
}

const Array1 = (["Good Morning", "Sunshine", "The", "Earth", "Says" , "Hello"] , 4);
const minLength1 = 4;
const newArray1 = removeShorterStrings(Array1, minLength1);
console.log(newArray1);

const Array2 = ["There", "Is", "a", "bug", "in" , "the" , "system"];
const minLength2 = 3;
const newArray2 = removeShorterStrings(Array2, minLength2);
console.log(newArray2);
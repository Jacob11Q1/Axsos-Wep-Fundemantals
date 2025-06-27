console.log("page loaded...");


// Name change when clicking the edit profile
var nameChange = document.querySelector("#change-name");
function setName(element){
    console.log(element.value);
    nameChange.innerText = "Jacob Qumsiyeh";
}

let count = 418;
function accept(acc){
    count++;
    document.querySelector("#counts").innerText = count;
    acc.remove();
}

let counts = 418;
function decline(acce){
    counts++;
    document.querySelector("#counts").innerText = counts;
    acce.remove();
}

let countdecline = 418;
function declinethis(accep){
    countdecline++;
    document.querySelector("#counts").innerText = countdecline;
    accep.remove();
}

let countplus = 418;
function acceptthis(accepp){
    countplus++;
    document.querySelector("#counts").innerText = countplus;
    accepp.remove();
}
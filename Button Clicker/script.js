function alertMessage(){
    alert('Ninja Was Liked');
}

function switchlogin(element){
    if(element.innerText == "LogOut"){
        element.innerText = "LogIn"
    }else{
        element.innerText = "LogOut"
    }
}

function hide(element){
    element.remove();
}

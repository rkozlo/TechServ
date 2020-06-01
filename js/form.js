function isNotEmpty(field){
    if(field.value == ""){
        style(field, false);
        return false;
    }else{
        style(field, true);
        return true;
    }
}

function isNumber(field){
    if(isNotEmpty(field)){
        if(isNaN(field)){
            style(field, false);
            return false;
        }else {
            style(field, true);
            return true;
    }
    }else{
        return false;
    }
}

function style(field, state) {
    var info = document.getElementById("i"+field.id)
    if(state == true) {
        info.innerHTML = "";
        field.className = "ok";
    } else {
        info.innerHTML = "Uzupełnij to pole"
        field.className = "Błąd"
    }
}

function onSubmit(form) {
    if(
        isNotEmpty(form.name) && isNotEmpty(form.surname) &&
        isNumber(form.phone) && isNotEmpty(form.email) &&
        isNotEmpty(form.description) && isNotEmpty(form.street) &&
        isNumber(form.house) && isNotEmpty(form.flat) &&
        isNotEmpty(form.postcode) && isNotEmpty(form.city)
    ){
        return true;
    } else {
        return false;
    }
}
function Init(){
    var name = document.getElementById("name");
    name.onblur = function(){
        isNotEmpty(this);
    }
    
    var street = document.getElementById("street");
    street.onblur = function(){
        isNotEmpty(this);
    }
    
    var city= document.getElementById("city");
    city.onblur = function(){
        isNotEmpty(this);
    }
    var house = document.getElementById("house");
    house.onblur = function(){
        isNumber(this);
    }
    
    var postcode = document.getElementById("postcode");
    postcode.onblur = function(){
        isNotEmpty(this);
    }
    
    var surname = document.getElementById("surname");
    surname.onblur = function(){
        isNotEmpty(this);
    }
    
    var phone = document.getElementById("phone");
    phone.onblur = function(){
        isNumber(this);
    }
    
    var email = document.getElementById("email");
    email.onblur = function(){
        isNotEmpty(this);
    }
    
    var description  = document.getElementById("description");
    description.onblur = function(){
        isNotEmpty(this);
    }
    
    document.forms["zglos"].onsubmit = function(){
        onSubmit(this);
    }
    
}
window.onload = Init;

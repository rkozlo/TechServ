function isNotEmpty(field){
    var info = document.getElementById("i"+field.id);
    if(field.value == ""){
        field.className = "blad";
        info.innerHTML= "To pole musi być uzupełnione";
        return false;
    }else{
        field.className = "ok";
        info.innerHTML = "";
        return true;
    }
}

function isPhoneNumber(field){
    var patt = /^(\+[0-9]{2}\ ?)?[0-9]{3}\-?[0-9]{3}\-?[0-9]+$/  //wyrażenie regularne do sprawdzenia numeru telefonu
    var info = document.getElementById("i"+field.id);
    //sprawdzenie czy wartosć w polu zgadza sie z wyrażeniem regularnym
    if (isNotEmpty(field)){
        if (patt.test(field.value)){
            field.className = "ok";
            info.innerHTML = "";
            return true;
        } else {
            field.className = "blad";
            info.innerHTML = "Zły format!";
            return false;
        }
        return false;
    }
}

function onSubmit(form) {
    if(
        isNotEmpty(form.name) && isNotEmpty(form.surname) &&
        isPhoneNumber(form.phone) && isNotEmpty(form.email) &&
        isNotEmpty(form.description) && isNotEmpty(form.street) &&
        isPostcode(form.postcode) && isNotEmpty(form.city)
    ){
        return true;
    } else {
        return false;
    }
}

function isPostcode(field) {
    if (isNotEmpty(field)){
        // podobnie jak wyżejh wykorzystanie regexp do sprawdzenia poprawności danych
        var patt = /^[0-9]{2}\-[0-9]{3}/;
        var info = document.getElementById("ipostcode");
        if(patt.test(field.value)){
            field.className = "ok";
            info.innerHTML = "";
            return true;
        } else {
            field.className = "blad";
            info.innerHTML = "Zły format! Ma być 00-000";
            return false;
        }
    }
    return false;
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
        isNotEmpty(this);
    }
    
    var postcode = document.getElementById("postcode");
    postcode.onblur = function(){
        isPostcode(this);
    }
    
    var surname = document.getElementById("surname");
    surname.onblur = function(){
        isNotEmpty(this);
    }
    
    var phone = document.getElementById("phone");
    phone.onblur = function(){
        isPhoneNumber(this);
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

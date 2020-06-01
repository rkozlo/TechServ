//funkcja wywołuje się po wciśnięciu obrazku w galerii
function enlarge(obj){
    var elem = document.getElementById("enl");          // pobranie elementu ukrytego do którego będzie przypisany
                                                        // kliknięty obrazek
    var image_g = obj;                                  // ustawienie zmiennej na obiekt this
    var elem_img = document.getElementById("img00");    // obrazek który domyślnie jest pusty 

    elem_img.src = image_g.src;
    elem.style.display = "block";
        

    var span_c = document.getElementsByClassName("close")[0];
    
    span_c.onclick = function() {
        elem.style.display = "none";
    }
}

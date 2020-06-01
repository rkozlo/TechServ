function resizeNavBar() {
    var nav = document.getElementById("navBar");
    if (nav.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

function enlarge() {
    var elem = document.getElementById("enl");
    
    
    var image = document.getElementById("gal-img");
    var elem_img = document.getElementById("img00");
    var caption = document.getElementById("caption");
    image.onclick = function() {
        elem.style.display = block;
        elem_img.src = this.src;
        caption.innerHTML = this.alt;
    }
    var span = document.getElementById("close")[0];
    
    span.onClick = function() {
        elem.style.display = "none";
    }
}


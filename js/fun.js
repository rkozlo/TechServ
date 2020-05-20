function resizeNavBar() {
    var nav = document.getElementByID("navBar");
    if (nav.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

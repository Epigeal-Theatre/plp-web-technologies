// loadNavbar.js
document.addEventListener("DOMContentLoaded", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("navbar").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "navbar.html", true);
    xhttp.send();
});
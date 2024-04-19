let widthPantalla = window.addEventListener("resize", cambioWidth);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navigation-bar") {
        x.className += " responsive";
    } else {
        x.className = "navigation-bar";
    }
}

// Funcion para que en caso de cambiar el tamaño de pantalla a más de 768, eliminar clase 'responsive' si es que aún está activa
function cambioWidth(){
    let size = window.innerWidth;
    var x = document.getElementById("myTopnav");
    if(size >= 768){
        x.className = "navigation-bar";
    }    
}
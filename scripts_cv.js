//--------------FUNCION DESPLEGAR NAV-------------------------
document.getElementById("cambio_boton").addEventListener("click", deslizamiento_menu);
document.getElementById("animado").addEventListener("click", modo_oscuro);


//--------------VARIABLES A UTILIZAR----------------------
var archivo = document.getElementById("body");
var menu = document.getElementById("menu");
var boton= document.getElementById("cambio_boton");
var modo = document.getElementById("animado");

//--------------FUNCIONES AUXILIARES---------------------
 function deslizamiento_menu(){
    // archivo.classList.toggle("ajuste_body");
    menu.classList.toggle("ajuste_menu");
 }

function modo_oscuro(){
    modo.classList.toggle("switch");
    modo.classList.toggle("activado");
    archivo.classList.toggle("dark");
}

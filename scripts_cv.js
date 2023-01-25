//--------------FUNCION DESPLEGAR NAV-------------------------
escritura_de_datos();
escritura_datos_extra();
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

function escritura_de_datos(){

    fetch("https://randomuser.me/api")
    .then(function (resultado){

        return resultado.text()
    }
    )
    .then(function (datos){
            
        const intermedio = datos

        let info=JSON.parse(datos)

        document.getElementById("genero").innerHTML="Genero: "+info.results[0].gender
        document.getElementById("nombre").innerHTML="Nombre: "+info.results[0].name.first
        document.getElementById("origen").innerHTML="Ciudad: "+info.results[0].location.city+" Estado: "+info.results[0].location.state + " Pais: "+ info.results[0].location.country
        document.getElementById("edad").innerHTML="Edad: "+info.results[0].dob.age
        document.getElementById("email").innerHTML="Mail: "+info.results[0].email
        document.getElementById("telefono").innerHTML="Telefono "+info.results[0].phone
        document.getElementById("celular").innerHTML="Celular: "+info.results[0].cell
        document.getElementById("foto_perfil").src = info.results[0].picture.large
    })

}

function escritura_datos_extra(){
    fetch('Datos.json')
    .then(function (resultado){

        return resultado.text()
    }
    )
    .then(function (datos){
            
        const intermedio = datos

        let info=JSON.parse(datos)

        document.getElementById("carrera").innerHTML="Carrera: "+info.results[0].Estudios.Carrera
        document.getElementById("facultad").innerHTML="Facultad: "+info.results[0].Estudios.Facultad
        document.getElementById("titulo").innerHTML="Titulo: "+info.results[0].Estudios.Titulo
        document.getElementById("universidad").innerHTML="Idioma: "+info.results[0].Estudios.Universidad
        document.getElementById("idiomas").innerHTML="Idiomas: Primario- "+info.results[0].Estudios.Idiomas.principal+" Secundario- "+info.results[0].Estudios.Idiomas.secundario
    
    })
}
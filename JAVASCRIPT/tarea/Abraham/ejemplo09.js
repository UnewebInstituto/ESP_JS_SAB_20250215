//Declaración de Funciones

function empty(valor){
    let condicion = false;

    if (valor.length <=0){
        condicion = true;
    }
    return condicion;
}

function validarControles() {
    if (ctrlNombre == true && ctrlApellido == true && ctrlCorreo == true && ctrlClave1 == true && ctrlClave2 == true) {
        enviar.disabled = false;
    }
    else {
        enviar.disabled = true;
    }
}

function validarNombre() {
    //ExpresionRegular
    let erNombre =/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    let nombre = document.getElementById("nombre").value;
    let msjNombre = document.getElementById("msjNombre");

    if (empty(nombre) == false)
    {
        if (erNombre.test(nombre)) {
        ctrlNombre = true;
        msjNombre.innerHTML = "";
        } 
        else {
            ctrlNombre = false;
            msjNombre.innerHTML = "ERROR: Solo se admiten letras y espacios en blanco"; 
        }
    }
    else{
        ctrlNombre = false;
        msjNombre.innerHTML = ""; 
    }
    validarControles();
}

function validarApellido(){
    //ExpresionRegular
    let erApellido =/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    let apellido = document.getElementById("apellido").value;
    let msjApellido = document.getElementById("msjApellido");

    if (empty(apellido) == false)
    {
        if (erApellido.test(apellido)) {
            ctrlApellido = true;
            msjApellido.innerHTML = "";
        } 
        else {
            ctrlApellido = false;
            msjApellido.innerHTML = "ERROR: Solo se admiten letras y espacios en blanco"; 
        }
    }
    else{
        ctrlApellido = false;
        msjApellido.innerHTML = ""; 
    }
    validarControles();
}


function validarCorreo() {
    //ExpresionRegular
    let erCorreo =/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    let correo = document.getElementById("correo").value;
    let msjCorreo = document.getElementById("msjCorreo");

    if (empty(correo) == false)
    {
        if (erCorreo.test(correo)) {
            ctrlCorreo = true;
            msjCorreo.innerHTML = "";
        } 
        else {
            ctrlCorreo = false;
            msjCorreo.innerHTML = "ERROR: Formato incorrecto."; 
        }
    }
    else{
        ctrlCorreo = false;
        msjCorreo.innerHTML = ""; 
    }
    validarControles();
}

function validarClave1() {
    //ExpresionRegular
    let erClave =/^(?=[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[\w!@#$%^&*(),.?":{}|<>]{7,15}$/;

    let clave1 = document.getElementById("clave1").value;
    let msjClave1 = document.getElementById("msjClave1");

    let clave2 = document.getElementById("clave2").value;
    let msjClave2 = document.getElementById("msjClave2");

    if (empty(clave1) == false)
    {
        if (erClave.test(clave1)) {
            ctrlClave1 = true;
            msjClave1.innerHTML = "";
        } 
        else {
            ctrlClave1 = false;
            msjClave1.innerHTML = "ERROR: Formato incorrecto. Primera letra mayuscula. 1 carácter numérico. 1 carácter especial. Min 7. Max 15."; 
        }
    }
    else{
        ctrlClave1 = false;
        msjClave1.innerHTML = ""; 
    }

    if (empty(clave2)==false && clave1 != clave2){
        ctrlClave2=false;
        msjClave2.innerHTML="Error: Las claves no son iguales."
    }
    else if (empty(clave2)==false && clave1 == clave2){
        ctrlClave2=true;
        msjClave2.innerHTML="";
    }


    validarControles();
}
    function validarClave2()
    {
        let msjClave2 = document.getElementById("msjClave2");

        let clave1 = document.getElementById("clave1").value;
        let clave2 = document.getElementById("clave2").value;
        
        if (empty(clave2)==false)
            {
            if (clave2 != clave1){
            ctrlClave2=false;
            msjClave2.innerHTML="Error: Las claves no son iguales."
            }
            else{
                ctrlClave2=true;
                msjClave2.innerHTML="";
            }
            }
        else{
            ctrlClave2=false;
            msjClave2.innerHTML="";
        }
        validarControles();
    }

function limpiar(){

    inpNombre.value="";
    inpApellido.value="";
    inpCorreo.value="";
    inpClave1.value="";
    inpClave2.value="";

    ctrlNombre = false;
    ctrlApellido = false;
    ctrlCorreo = false;
    ctrlClave1 = false;
    ctrlClave2 = false;

    msjNombre.innerHTML="";
    msjApellido.innerHTML="";
    msjCorreo.innerHTML="";
    msjClave1.innerHTML="";
    msjClave2.innerHTML="";

}

//Declaracion de Variables

let enviar= document.getElementById("btnEnviar");

let inpNombre=document.getElementById("nombre");
let inpApellido=document.getElementById("apellido");
let inpCorreo=document.getElementById("correo");
let inpClave1=document.getElementById("clave1");
let inpClave2=document.getElementById("clave2");

let ctrlNombre = false;
let ctrlApellido = false;
let ctrlCorreo = false;
let ctrlClave1 = false;
let ctrlClave2 = false;

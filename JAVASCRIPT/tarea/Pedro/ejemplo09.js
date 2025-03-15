function validarNombre(){
    let expRegNombre = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/;
    let nombre = document.getElementById('nombre').value;
    let msjNombre = document.getElementById('msjNombre');
    if (expRegNombre.test(nombre)){
        ctrlNombre = true;
        msjNombre.innerHTML = '';
    }else{
        ctrlNombre = false;
        msjNombre.style.fontSize = '14px';
        msjNombre.style.color = 'red';
        msjNombre.innerHTML = "ERROR: en el nombre sólo se admiten letras y espacios en blanco";
    }
    validarControles();
}

function validarApellido(){
    let expRegApellido = /^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/;
    let apellido = document.getElementById('apellido').value;
    let msjApellido = document.getElementById('msjApellido');
    if (expRegApellido.test(apellido)){
        ctrlApellido = true;
        msjApellido.innerHTML = '';
    }else{
        ctrlApellido = false;
        msjApellido.style.fontSize = '14px';
        msjApellido.style.color = 'red';
        msjApellido.innerHTML = "ERROR: en el apellido sólo se admiten letras y espacios en blanco";
    }
    validarControles();
}

function validarEmail(){
    let expRegCorreo = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    let correo = document.getElementById('email').value;
    let msjCorreo = document.getElementById('msjCorreo');
    if (expRegCorreo.test(correo)){
        ctrlCorreo = true;
        msjCorreo.innerHTML = '';
    }else{
        ctrlCorreo = false;
        msjCorreo.style.fontSize = '14px';
        msjCorreo.style.color = 'red';
        msjCorreo.innerHTML = "ERROR: El correo no tiene el formato";
    }
    validarControles();
}

function validarClave1(){
    let expRegClave = /^[A-Z][a-zA-Z0-9!"#$%&/()=?¿]{5,15}[0-9][!"#$%&/()=?¿]$/;
    let clave = document.getElementById('clave').value;
    let msjClave = document.getElementById('msjClave1');
    if (expRegClave.test(clave)){
        ctrlClave1 = true;
        msjClave.innerHTML = '';
    }else{
        ctrlClave1 = false;
        msjClave.style.fontSize = '14px';
        msjClave.style.color = 'red';
        msjClave.innerHTML = "ERROR: La clave no tiene el formato indicado";
    }
    validarControles();
}

function validarClave2(){
    let clave = document.getElementById('clave').value;
    let clave2 = document.getElementById('clave2').value;
    let msjClave2 = document.getElementById('msjClave2');
    if (clave == clave2){
        ctrlClave2 = true;
        msjClave2.innerHTML = '';
    }else{
        ctrlClave2 = false;
        msjClave2.style.fontSize = '14px';
        msjClave2.style.color = 'red';
        msjClave2.innerHTML = "ERROR: Las claves no coinciden";
    }
    validarControles();
}

//Declaraión de Funciones
function validarControles(){
    if (ctrlNombre == true && ctrlApellido == true && ctrlCorreo == true && ctrlClave1 == true && ctrlClave2 == true){
        document.getElementById('btnEnviar').disabled = false;
    }else{
        document.getElementById('btnEnviar').disabled = true;
    }
}

function Enviar() {
    alert("Se hizo click a enviar");
}

function Limpiar() {
    alert("Se hizo click a limpiar");

    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('email').value = "";
    document.getElementById('clave').value = "";
    document.getElementById('clave2').value = "";

    document.getElementById('msjNombre').innerHTML = "";
    document.getElementById('msjApellido').innerHTML = "";
    document.getElementById('msjCorreo').innerHTML = "";
    document.getElementById('msjClave1').innerHTML = "";
    document.getElementById('msjClave2').innerHTML = "";

    document.getElementById('btnEnviar').disabled = false;

    ctrlNombre = false;
    ctrlApellido = false;
    ctrlCorreo = false;
    ctrlClave1 = false;
    ctrlClave2 = false;
}

//Declarción de Variables
let ctrlNombre = false;
let ctrlApellido = false;
let ctrlCorreo = false;
let ctrlClave1 = false;
let ctrClave2 = false;
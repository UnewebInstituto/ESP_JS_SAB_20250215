//Declaracion de funciones
const interCambiarImagen = (objetoImagen) => {
    let objetoPrincipal = document.getElementById('imgPrincipal');
    let nombreImagen = objetoPrincipal.src;
    let objetoTemporal = objetoPrincipal;
    objetoPrincipal.src = objetoImagen.src;
    objetoImagen.src = nombreImagen;
}

function extraccion() {
    fechaHoraSistema = new Date();
    dd = fechaHoraSistema.getDate();
    mm = fechaHoraSistema.getMonth();
    aa = fechaHoraSistema.getFullYear();
    hr = fechaHoraSistema.getHours();
    mi = fechaHoraSistema.getMinutes();
    se = fechaHoraSistema.getSeconds();
    diaSe = fechaHoraSistema.getDay();
    console.log(dd+','+mm+','+aa+','+hr+','+mi+','+se+','+diaSe);
}

function formatoFechaHora(){
    nombreDia = diasSemana[diaSe];
    nombreMes = nombresMes[mm];
    
    if (hr > 12){
        hr = hr - 12;
        ampm = 'p.m.';        
    }else {
        ampm = 'a.m.';
    }

    if (mi < 10){
        mi = '0' + mi
    }
    if (se < 10){
        se = '0' + se
    }

    //fechaHora.innerHTML = fechaHoraSistema;
    fechaHora.innerHTML = `${nombreDia}, ${dd} de ${nombreMes} de ${aa} ${hr}:${mi} ${se} ${ampm}`;
}

// Declaración de variable
var fechaHoraSistema, dd, mm, aa, hr, mi, se, diaSe, ampm, nombreDia, nombreMes;
var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var nombresMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//Cuando haya cargado el contenido del html, podrá actualizar la fecha y hora del sistema
window.onload = function(){
    var fechaHora = document.getElementById('fechaHora');
    extraccion();
    formatoFechaHora();
};
//fechaHora.innerHTML = fechaHoraSistema;
//formatoFechaHora();

setInterval(() => {
    extraccion();
    formatoFechaHora();
}, 1000);
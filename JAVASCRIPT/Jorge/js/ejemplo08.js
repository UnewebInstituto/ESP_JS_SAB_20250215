//Declaracion de Funcion

const intercambiarImagen = (objetoImagen) => {
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
    dia = fechaHoraSistema.getDay();
    console.log(dd + ',' + mm + ',' + aa + ',' + hr + ',' + mi + ',' + se + ',' + dia);
    
}

function formatoFechaHora(){
    nombreDia = diasSemana[dia];
    nombreMes = nombresMes[mm];

    //fechaHora.innerHTML = fechaHoraSistema;
    if (hr > 12) {
        hr = hr - 12;
        ampm = 'p.m.';        
    }else{
        ampm = 'a.m.';
    }
    if (mi < 10 ) {
        mi = '0' + mi;
    }
    if (se < 10) {
        se = '0' + se;
    }
    fechaHora.innerHTML = `${nombreDia}, ${dd} de 
    ${nombreMes} de ${aa} ${hr}: ${mi}: ${se} ${ampm}`
    
}


//Declaracion de Variables

var fechaHoraSistema, dd, mm, aa, hr, mi, se, ampm, diaSemana;
var diasSemana = ['Domingo', ' Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
var nombresMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
//1ra. vez

extraccion();
window.onload = function(){
    /*
    Cuando haya cargado el contenido del html,
    podra actualizar la primera vez la fecha.y hora del sistema
*/
var fechaHora = document.getElementById('fechaHora');
    extraccion();
    formatoFechaHora();
};

// Cada un 1 segundo
setInterval(() => {
    extraccion();
    formatoFechaHora()
    
}, 1000);

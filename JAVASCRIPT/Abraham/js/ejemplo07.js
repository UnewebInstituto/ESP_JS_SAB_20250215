
//Declaración de variables
let fechaHoraSistema;
let dd, mm, aa, hr, mi, se, ampm, nombreDia, nombreMes;
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nomviembre", "Diciembre"];


//primera vez
var fechaHora = document.getElementById("fechaHora");

function extraccion() {
    fechaHoraSistema = new Date();
    dd = fechaHoraSistema.getDay();
    mm = fechaHoraSistema.getMonth();
    aa = fechaHoraSistema.getFullYear();
    hr = fechaHoraSistema.getHours();
    mi = fechaHoraSistema.getMinutes();
    se = fechaHoraSistema.getSeconds();
    dia = fechaHoraSistema.getDay();

   
    // console.log(dd + "," + mm + "," + aa + "," + hr + "," + mi + "," + se + "," + dia);
}

function formatoFechaHora(){
    nombreDia=dias[dia];
    nombreMes=meses[mm];
    
    if (hr>12){
        hr=hr-12;
        ampm="Pm";
    }
    else{
        ampm="Am";
    }

    if (mi < 10){
        mi="0"+mi;
    }

    if (se<10){
        se="0"+se;
    }
    fechaHora.innerHTML = ` ${nombreDia}, ${dia} de ${nombreMes} de ${aa} ${hr}: ${mi}: ${se} ${ampm} `;

}

extraccion();
formatoFechaHora();



//función anonima
setInterval(() => {
    extraccion();
    formatoFechaHora();
}, 1000);

const intercambiarImagen = (objetoImagen)=>{
    let objetoPrincipal = document.getElementById("imgPrincipal");
    let nombreImagen = objetoPrincipal.src;
    let objetoTemporal = objetoPrincipal;
    objetoPrincipal.src=objetoImagen.src;
    objetoImagen.src = nombreImagen;
    }




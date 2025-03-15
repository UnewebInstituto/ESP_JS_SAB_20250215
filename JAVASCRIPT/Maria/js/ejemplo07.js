//IMAGEN
const intercambiarImagen = (objetoImagen)=>{
    let objetoPrincipal = document.getElementById('imgPrincipal');
     let nombreImagen = objetoPrincipal.src;
     let objetoTemporal = objetoPrincipal;
     objetoPrincipal.src = objetoImagen.src;
     objetoImagen.src = nombreImagen;
     
}

//Declaracion de Variables
var fechaHora = document.getElementById('fechaHora');
var fechaHoraSistema, dd, mm, aa, hr, mi, se, ampm, diaSemana, nombresMes;
var diasSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
var nombresMes = ['Enero','Febrero','Marzo','Abril','Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

//1era vez
function extraccion(){
var fechaHoraSistema;
fechaHoraSistema = new Date();
dd = fechaHoraSistema.getDate();
mm = fechaHoraSistema.getMonth();
aa = fechaHoraSistema.getFullYear();
hr = fechaHoraSistema.getHours();
mi = fechaHoraSistema.getMinutes();
se = fechaHoraSistema.getSeconds();
dia = fechaHoraSistema.getDay();
console.log(dd+ ','+ mm + ',' + aa + ',' + hr + ',' + mi + ',' + se + ','+ dia)
}
function formatoFechaHora(){
    nombreDia = diasSemana[dia];
    nombreMes = nombresMes[mm];
   
       if(hr > 12){
           hr = hr - 12;
           ampm = 'p.m.';
       }else{
           ampm = 'a.m.';
       }
   
       if(mi < 10){
           mi = '0' + mi;
       }
       if(se < 10){
           se = '0' + se;
       }
   
   //fechaHora.innerHTML = fechaHoraSistema;
   fechaHora.innerHTML = `${nombreDia} ,${dd} de ${nombreMes} de ${aa} ${hr}: 
   ${mi}:${se} ${ampm}`;
}

// Declaración de variables
var fechaHora = document.getElementById('fechaHora');
var fechaHoraSistema, dd, mm, aa, hr, mi, se, ampm;
// 1ra. vez
extraccion();
formatoFechaHora();

// Cada un 1 segundo
setInterval(() => {
 extraccion();
    formatoFechaHora();
}, 1000);


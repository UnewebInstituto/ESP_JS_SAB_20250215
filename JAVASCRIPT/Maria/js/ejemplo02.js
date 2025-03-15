function calcular(arg_a, arg_b, arg_c){
    /*se accede a los elementos input en el DOM y 
    se conviete a valor numerico de tipo decimal (punto flotante)*/
    /*a = parseFloat(document.getElementById('a').value); 
    b = parseFloat(document.getElementById('b').value);
    c = parseFloat(document.getElementById('c').value); */ 
//evaluacion del contenido que se obtiene
a = parseFloat(arg_a);
b = parseFloat(arg_b);
c = parseFloat(arg_c);
if  (a == 0){
    mensaje = "ERROR: el valor debe ser diferente de 0";
    objetoSalida.className = "mensaje error";
}else{
    subRadical = Math.pow(b,2) - 4 * a * c; 
    if (subRadical < 0 ){
        mensaje = "ERROR: El resultado de la expresion sub radical debe ser mayor o igual a 0";
        objetoSalida.className = "mensaje alerta";
    }else{
        x1 =  (-b) + Math.sqrt(subRadical)/(2*a);
        x2 =  (-b- Math.sqrt(subRadical))/(2*a);   
        mensaje =   "x1 : " + x1 + "<br>" + "x2 : " + x2 + "<br>";
        objetoSalida.className = "mensaje exito";
    }
}

objetoSalida.innerHTML = mensaje;

}
const limpiar = ()=> {
    let entrada = document.getElementsByTagName('input');
    for (let i = 0; i < entradas.length; i++) {
        entrada[i].value = 0;
    }
    objetoSalida.className = "";
    objetoSalida.innerHTML = "";
     
}
    //Declaracion de variables
var a, b, c, subRadical, x1, x2, mensaje, objetoSalida;

//Inicializacion de variables
a = 0; b = 0; c = 0; subRadical = 0; x1 = 0, x2 = 0;
objetoSalida = document.getElementById('salida');

// otra forma
// a =  b =  c = subRadical =  x1 =  x2 = 0;

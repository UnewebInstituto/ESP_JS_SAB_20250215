//Declaracion de Funciones
function calcular (arg_a, arg_b, arg_c){
    //Se accede a los elementos <input> en el DOM y se convierte
    //a valor numerico de tipo decimal (punto flotante)

    /*

    a = parseFloat(document.getElementById('a').value);
    b = parseFloat(document.getElementById('b').value);
    c = parseFloat(document.getElementById('c').value);

    */
   a = parseFloat(arg_a);
   b = parseFloat(arg_b);
   c = parseFloat(arg_c);

    // Evaluacion del contenido que se obtiene
    if(a==0){
        mensaje = "ERROR: El valor debe ser diferente de 0"
        objectoSalida.className ="mensaje error"
    }else{
        subRadical = Math.pow(b,2) - 4 * a * c;
        if(subRadical < 0){
            mensaje = "ERROR: El resultado de la expresión sub Radical debe ser Mayor o igual a 0"
            objectoSalida.className ="mensaje alerta"

        }else{
            x1 = (-b + Math.sqrt(subRadical))/(2*a);
            x2 = (-b + Math.sqrt(subRadical))/(2*a);
            mensaje = "x1 : " + x1 + "<br>" + "x2 : " + x2 + "<br>";
            objectoSalida.className ="mensaje exito"
        }

    }
    objectoSalida.innerHTML = mensaje;

}

const limpiar = () => {
   let entradas = document.getElementsByTagName('input');
   for (let i = 0; i < entradas.length; i++) {
    entradas[i].value = 0;
    
   }
   objectoSalida.innerHTML = "";
   objectoSalida.className= "";
}

//Declaracion de Variables
var a, b, c, subRadical, x1, x2, mensaje, objectoSalida;


//Inicializacion de Variables

a = 0; b = 0; c = 0; subRadical = 0; x1 = 0; x2 = 0;
mensaje = "";

objectoSalida = document.getElementById('salida');

// Otra Forma de inicializar
//a = b = c = subRadical = x1 = x2;

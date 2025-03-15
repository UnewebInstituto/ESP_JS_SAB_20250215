//Declaración de funciones

function calcular(argA, argB, argC){
    //se accede a los elementos input en el DOM y se convierte a float

    /*
    a= parseFloat(document.getElementById('a').value)
    b= parseFloat(document.getElementById('b').value)
    c= parseFloat(document.getElementById('c').value)

    */

    objetoSalida=document.getElementById('salida');

    a=parseFloat(argA);
    b=parseFloat(argB);
    c=parseFloat(argC);

    //evaluación del contenido
    // == comparación de contenido (no incluye el tipo de dato)
    // === comparación estricta (incluye el contenido y el tipo de dato)

    if(a==0){
        mensaje="¡Errror el valor debe ser diferente de 0!";
        objetoSalida.className="mensaje error";
    }
    else{
        //pow para potencias
        subRadical= Math.pow(b,2)-4*a*c;
        if (subRadical < 0){
            mensaje="¡Error el resultado de la expresión sub radical debe ser mayoir o igual a 0!";
            objetoSalida.className="mensaje alerta";

        }
        else{
            //sqrt raíz cuadrada
            x1 = (-b + Math.sqrt(subRadical))/(2*a);
            x2 = (-b - Math.sqrt(subRadical))/(2*a);
            mensaje="x1 = "+ x1+ "<br>"+"x2 = "+x2+"<br>";
            objetoSalida.className="mensaje exito";


        }
    }
    objetoSalida.innerHTML=mensaje
}

const limpiar = ()=>{
    var a=document.getElementById('a')
    var b=document.getElementById('b')
    var c=document.getElementById('c')    
    objetoSalida=document.getElementById('salida');


    a.value=0
    b.value=0
    c.value=0

    objetoSalida.innerHTML=""
    objetoSalida.className=""

    
}

//Declaración de variables

var a, b, c, subRadical, x1, x2, mensaje;

// Inicialización de variables
a=0; b=0; c=0; subRadical=0; x1=0; x2=0; 

//otras formas de incialización
a=b=c=subRadical=x1=x2=0;

mensaje=""

// Declaración de funciones
function calcular(arg_a, arg_b, arg_c) {
  // Se accede a los elementos <input> en el DOM y se convierte
  // a valor numérico de tipo decimal (punto flotante)
  /*
         a = parseFloat(document.getElementById('a').value);
         b = parseFloat(document.getElementById('b').value);
         c = parseFloat(document.getElementById('c').value);
         */
  a = parseFloat(arg_a);
  b = parseFloat(arg_b);
  c = parseFloat(arg_c);
  // Evaluación del contenido que se obtiene
  if (a == 0) {
    mensaje = "ERROR: El valor de 'a' debe ser diferente de 0";
    objetoSalida.className = "mensaje error";
  } else {
    subRadical = Math.pow(b, 2) - 4 * a * c;
    if (subRadical < 0) {
      mensaje =
        "ERROR: El resultado de la expresión sub radical debe ser mayor o igual a 0";
      objetoSalida.className = "mensaje alerta";
    } else {
      x1 = (-b + Math.sqrt(subRadical)) / (2 * a);
      x2 = (-b - Math.sqrt(subRadical)) / (2 * a);
      mensaje = "x1 : " + x1 + "<br>" + "x2 : " + x2 + "<br>";
      objetoSalida.className = "mensaje exito";
    }
  }

  objetoSalida.innerHTML = mensaje;
}

const limpiar = () => {
  let entradas = document.getElementsByTagName("input");
  for (let i = 0; i < entradas.length; i++) {
    entradas[i].value = 0;
  }
  objetoSalida.innerHTML = "";
  objetoSalida.className = "";
};

// Declaración de variables
var a, b, c, subRadical, x1, x2, mensaje, objetoSalida;

// Inicialización de variables
// a = 0; b = 0; c = 0; subRadical = 0; x1 = 0; x2 = 0;
// Otra forma de inicialización
a = b = c = subRadical = x1 = x2 = 0;
mensaje = "";
objetoSalida = document.getElementById("salida");

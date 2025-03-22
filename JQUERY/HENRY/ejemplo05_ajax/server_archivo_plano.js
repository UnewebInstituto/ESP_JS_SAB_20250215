// Declaración de librerías
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// Se incorpora la librería file system
const fs = require("fs");

// Se instancia la librería express
const app = express();
// Se define el puerto a través del cual se ejecuta el servidor
const PORT = 3000;

// Servir los archivos estáticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Ruta principal para la carga del formulario
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/datos", (req, res) => {
  var mensaje = '';
  const { nombre, edad } = req.body;
  // Registro de datos para almacenar
  var registro = `${nombre};${edad};\n`;
  // Apertura del archivo
  fs.appendFile('encuesta.txt', registro, (err)=>{
    if (err){
      console.log('Error: No se logró almacenar datos en el archivo encuesta.txt');
      mensaje = "<div class='alert alert-danger'><strong>Error: </strong>No se logró almacenar datos en el archivo encuesta.txt</div>";
      res.status(500).send(mensaje);
    }else{
      console.log('Atención: Datos procesados con éxito');
      mensaje = "<div class='alert alert-success'><strong>Atención: </strong>Los datos fueron almacenados con éxito</div>";
      res.status(200).send(mensaje);
    }
  });
});

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando a través del puerto http://localhost:${PORT}`
  );
});

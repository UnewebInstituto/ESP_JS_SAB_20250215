// Declaración de librerías
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

// Se instancia la libvrería express
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
  const { nombre, edad } = req.body;
  console.log(
    `Datos recibidos desde el formulario, nombre:${nombre}, edad:${edad}`
  );
  res.send(
    `Datos procesados desde el servidor: nombre:${nombre}, edad:${edad}`
  );
});

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando a través del puerto http://localhost:${PORT}`
  );
});

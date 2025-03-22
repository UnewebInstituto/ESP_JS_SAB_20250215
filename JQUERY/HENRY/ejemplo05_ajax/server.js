// Declaración de librerías
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// Se incorpora la librería para acceder a bd mariadb
const mariadb = require("mariadb");

// Se instancia la librería express
const app = express();
// Se define el puerto a través del cual se ejecuta el servidor
const PORT = 3000;
// Conexión a la base de datos
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bdespjs_henry',
  connectionLimit: 5
});

// Servir los archivos estáticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Ruta principal para la carga del formulario
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/datos", async (req, res) => {
  var mensaje = '';
  const { nombre, edad, correo } = req.body;
  // Definición de query a ejecutar
  const sql = "INSERT INTO encuestas(nombre_estudiante, edad, correo) VALUES (?, ?, ?)";
  // Definición de valores a almacenar
  const valores = [nombre, edad, correo];

  // Insercción en base de datos
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(sql, valores);
    console.log(`Atención: Datos procesados con éxito.`);
    mensaje = "<div class='alert alert-primary'><strong>Atención: </strong>Los datos fueron almacenados con éxito en base de datos.</div>";
    res.status(200).send(mensaje);
  } catch (error) {
    console.log('Error: No se logró almacenar en la tabla encuestas');
    mensaje = "<div class='alert alert-danger'><strong>Error: </strong>No se logró almacenar datos en la tabla encuestas</div>";
    console.log(mensaje);
    res.status(500).send(mensaje);
  } finally {
    if (conn) {
      // Se libera la conexión a la base de datos
      conn.release();
    }
  }
  
});

// Inicialización del servidor
app.listen(PORT, () => {
  console.log(
    `Servidor escuchando a través del puerto http://localhost:${PORT}`
  );
});

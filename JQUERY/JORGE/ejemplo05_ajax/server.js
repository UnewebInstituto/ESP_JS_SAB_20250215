// Declaracion de librerias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Se incorpora la libreria para acceder a bd mariadb
const mariadb = require("mariadb");
const { log } = require('console');

// Se instancia la libreria express
const app = express();
// Se define el puerto a traves del cual se ejecuta el servidor
const PORT = 3002;

// Conexión a la bade de datos
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdespjs_jorge',
    connectionLimit: 5
});



// Servir los archivos estaticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Ruta principal para la carga del formulario 
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/api/datos', async (req, res)=>{
    console.log('Estoy aqui...');
    var mensaje = '';
    const {nombre, edad, correo} = req.body;
    // Defenicion de query a ejecutar
    const sql = "INSERT INTO encuestas(nombre_estudiante, edad, correo) VALUES(?, ?, ?)";
    // Definición de valores a almacenar
    const valores = [nombre, edad, correo];


    // Insercción en base de datos
    let conn;
try {
    conn = await pool.getConnection();
    const result = await conn.query(sql, valores);
    console.log(`Atención: Datos procesados con exito.`);
    mensaje = "<div class= 'alert alert-success'><strong>Atención:</strong> Los datos fueron almacenados con exito</div>"
    res.status(200).send(mensaje);
} catch (error) {
    console.log('Error: No se logro almacenar datos en la tabla encuesta.txt');
    mensaje = "<div class= 'alert alert-danger'><strong>Error:</strong> No se logro almacenar datos en la tabla encuesta</div>"
    console.log(mensaje);
    
    res.status(500).send(mensaje);
}finally{
    if (conn) {
        // Se libera la conexion a la base de datos
        conn.release();
    }
}

});
// Inicializacion de Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando atraves del puerto http://localhost:${PORT}`);
    
});

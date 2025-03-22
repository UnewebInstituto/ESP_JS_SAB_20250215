// Declarando Librerias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Se incorpora la libreria para acceder Base de Datos MariDB
const mariadb = require('mariadb');

// Se instancia la libreria express
const app = express();
// Se define el puerto a través del cual se ejecuta el servidor
const PORT = 3004;

// Conexion a la base de datos

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdespjs_pedro',
    connectionLimit: 5
});


// Servir los archivos estaticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Ruta principal para la carga del formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/api/datos', async (req, res) => {
    const {nombre, edad, correo} = req.body;
    var mensaje = '';
    console.log(`Datos recibidos desde el formulario, nombre:${nombre}, edad:${edad}, correo:${correo}`);
    // Definicion de query a ejecutar
    const sql = "INSERT INTO encuestas (nombre_estudiante, edad, correo) VALUES (?, ?, ?)";
    //Definicion de valores a almacenar
    const valores = [nombre, edad, correo];
    //Insercion en base de datos
    let conn;
        try{
            conn = await pool.getConnection();
            const result = await conn.query(sql, valores);
            console.log('Atencion: Datos procesados con exito.');
            mensaje = "<div class='alert alert-primary'><strong> Atencion: </strong>Los datos fueron almacenados con exito</div>";
            res.status(200).send(mensaje);
        }catch{
            console.log('Error: No se logró almacenar datos en la tabla encuentas');
            mensaje = "<div class='alert alert-danger'><strong>Error: </strong>No se logró almacenar datos en la tabla encuentas</div>"
            res.status(500).send(mensaje);
        }finally{
            if (conn) {
                //Se libera la conexion
                conn.release();
            }
        }

});

// Inicialización del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando a través del puerto http://localhost:${PORT}`);
});

//Declaración de librerias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Se incorpora la libreria para acceder a base de datos mariadb
const mariadb = require("mariadb");

//Se instancia la libreria express
const app = express();
//Se define el puerto a través del cual se ejecuta el servidor
const PORT = 3003;

//conexión a la base de datos
const pool = new mariadb.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbespjs_abraham',
    connectionLimit:5,
})

//Servir los archivos estáticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

//Ruta principal para la carga del formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/api/datos', async(req, res)=>{
    var mensaje="";
    const {nombre, edad, correo} = req.body;
    console.log(`Datos recibidos del formulario Nombre: ${nombre}, Edad: ${edad}`);

    //Definición de query a ejecutar
    const sql = "INSERT INTO encuestas (nombreEstudiante, edad, correo) VALUES (?, ?, ?)";
    //Definición de valores
    const valores = [nombre, edad, correo];

    //Inserción en base de datos

    let conn;
    
    try{
        conn = await pool.getConnection();
        resultado=await conn.query(sql, valores);
        console.log(`Datos procesados con éxito`);
        
        mensaje="<div class='alert alert-success'><strong>Atención: </strong>Los datos fueron almacenados con éxito en la base de datos</div>";
        res.status(200).send(mensaje);

    }
    catch(error){
        console.log("No se logro almacenar datos en la base de datos");
        mensaje="<div class='alert alert-danger'><strong>Error: </strong>No se logró almacenar datos en la base de datos</div>";
        res.status(500).send(mensaje);
    }
    finally{
        if (conn){
            //Se libera la conexión
            conn.release();
        }
    }
});

//Inicialización del servidor
app.listen(PORT, () =>{
    console.log(
        `Servidor escuchando a través el puerto http://localhost:${PORT}`
    );
});

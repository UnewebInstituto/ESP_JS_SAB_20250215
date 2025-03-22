const express = require ('express');
const path = require ('path');
const bodyParser= require("body-parser"); 

//se incorpora la libreria file system
const mariadb = require("mariadb");
const app = express(); //se crea instancia con lal ibreria express
const PORT = 3001;
//conexion a la BBDD
const pool = mariadb.createPool({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdespjs_maria',connectionLimit: 5
    
});

//servir los archivos estaticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

//ruta principal para la carga del formulario
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/api/datos',async (req, res)=>{
    var mensaje = "";
    const {nombre,edad, correo} = req.body;

// definicion de query a ejecutar
    const sql = "INSERTER INTO encuestas (nombre_estudiante, edad, correo) VALUES (?, ?, ?) RETURNING*";
    const valores = [nombre,edad,correo];

    // registro de datos para almacenar
    //var registro = `${nombre};${edad};\n`;
    // apertura del archivo

    //Inserccion en la BBDD
    let conn;
    try {
        conn = await pool.getConnection();
        const result = await conn.query(sql, valores);
        console.log(`Atención: Datos procesados con exito. Nombre: ${result.rows[0].nombre_estudiante}, EDAD: ${result.rows[0].edad}`);

        mensaje = "<div class='alert alert-primary'><strong>ATENCION: </strong>Los datos fueron almacenados con éxito</div>";

        res.status(200).send(mensaje);
    } catch (error) {
        console.log('ERROR: No se logro almacenar datos en el archivo   encuesta.txt');

        mensaje = "<div class='alert alert-danger'><strong>ERROR: </strong>No se logro almacenar datos en el  archivo encuesta</div>";

        res.status(500).send(mensaje);
    }finally{
        if(conn){
        //se libera la conexion a la BBDD
        conn.release();
        }
    };
});
//inicializacion del servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando a traves del puerto http://localhost:${PORT}`);

});

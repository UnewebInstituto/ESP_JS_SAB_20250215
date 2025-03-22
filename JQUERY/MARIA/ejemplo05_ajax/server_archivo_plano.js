const express = require ('express');
const path = require ('path');
const bodyParser= require("body-parser"); 
const fs = require('fs');
//se incorpora la libreria file system
const app = express(); //se crea instancia con lal ibreria express
const PORT = 3001;

//servir los archivos estaticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

//ruta principal para la carga del formulario
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
app.post('/api/datos',(req, res)=>{
    var mensaje = "";
    const {nombre,edad} = req.body;
    console.log(
        `Datos recibidos desde el formulario, nombre:${nombre}, edad:${edad}`
    );
    // registro de datos para almacenar
    var registro = `${nombre};${edad};\n`;
    // apertura del archivo
    fs.appendFile('encuesta.txt', registro, (err)=>{
    if (err){
        console.log('ERROR: No se logro almacenar datos en el archivo   encuesta.txt');
        mensaje = "<div class='alert alert-danger'><strong>ERROR: </strong>No se logro almacenar datos en el  archivo encuesta.txt</div>";
        res.status(500).send(mensaje);
    }else{
        console.log('Atención: Datos procesados con exito');
        mensaje = "<div class='alert alert-success'><strong>ATENCION: </strong>Los datos fueron almacenados con éxito</div>";
        res.status(200).send(mensaje);
    }
    })
});

//inicializacion del servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando a traves del puerto http://localhost:${PORT}`);
});
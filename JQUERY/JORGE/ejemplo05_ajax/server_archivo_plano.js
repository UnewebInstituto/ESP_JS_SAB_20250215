// Declaracion de librerias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Se incorpora la libreria file System
const fs = require ("fs");
const { log } = require('console');

// Se instancia la libreria express
const app = express();
// Se define el puerto a traves del cual se ejecuta el servidor
const PORT = 3002;

// Servir los archivos estaticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Ruta principal para la carga del formulario 
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/api/datos', (req, res)=>{
    var mensaje = '';
    const {nombre, edad} = req.body;
    // Registro de datos para almacenar
    var registro = `${nombre};${edad};\n`;
    // Apertura del archivo
    fs.appendFile('encuesta.txt', registro,(err)=>{
        if(err){
            console.log('Error; No se logro almacenar datos en el archivo encuesta.txt');
            mensaje = "<div class= 'alert alert-danger'><strong>Error:</strong> No se logro almacenar datos en el archivo encuesta.txt</div>"
            res.status(500).send(mensaje);
        }else{
            console.log('Atención: Datos procesados con exito');
            mensaje = "<div class= 'alert alert-success'><strong>Atención:</strong> Los datos fueron almacenados con exito</div>"
            res.status(200).send(mensaje);
        }
    })
})

// Inicializacion de Servidor

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando atraves del puerto http://localhost:${PORT}`);
    
})


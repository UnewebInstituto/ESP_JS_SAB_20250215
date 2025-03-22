// Declarando Librerias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs'); // se incorpora la libreria file system

// Se instancia la libreria express
const app = express();
// Se define el puerto a través del cual se ejecuta el servidor
const PORT = 3004;

// Servir los archivos estaticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Ruta principal para la carga del formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/api/datos', (req, res) => {
    const {nombre, edad} = req.body;
    var mensaje = '';
    console.log(`Datos recibidos desde el formulario, nombre:${nombre}, edad:${edad}`);

    var registro = `${nombre};${edad};\n`;
    //Apertura de archivos
    fs.appendFile('encuesta.txt', registro, (err)=> {
        if (err){
            console.log('Error: No se logro almacenar datos en el archivo encuesta.txt');
            mensaje = "<div class='alert alert-danger'><strong>Error: </strong>No se logro almacenar datos en el archivo encuesta.txt</div>"
            res.status(500).send(mensaje);
        } else {
            console.log(' Atencion: Datos procesados con exito');
            mensaje = "<div class='alert alert-success'><strong> Atencion: </strong>Los datos fueron almacenados con exito</div>";
            res.status(200).send(mensaje);
        }
    })

    /*res.send(
        `Datos procesados desde el servidor: nombre: nombre:${nombre}, edad:${edad}`);*/
});

// Inicialización del servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando a través del puerto http://localhost:${PORT}`);
});

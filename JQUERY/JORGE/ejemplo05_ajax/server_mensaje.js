// Declaracion de librerias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

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
    const {nombre, edad} = req.body;
    console.log(`Datos recibidos desde el Formulario, nombre:${nombre}, edad:${edad}`);
    res.send(`Datos procesados desde el servidor: nombre: ${nombre}, edad: ${edad}`)
})

// Inicializacion de Servidor

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando atraves del puerto http://localhost:${PORT}`);
    
})


//Declaración de librerias
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');


//Se instancia la libreria express
const app = express();
//Se define el puerto a través del cual se ejecuta el servidor
const PORT = 3003;

//Servir los archivos estáticos
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

//Ruta principal para la carga del formulario
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/api/datos', (req, res)=>{
    var mensaje="";
    const {nombre, edad} = req.body;
    console.log(`Datos recibidos del formulario Nombre: ${nombre}, Edad: ${edad}`);
    
    var registro = `${nombre};${edad};\n`;

    //Apertura de datos
    fs.appendFile('encuenta.txt', registro, (err)=>{

    if (err){
        console.log("No se logro almacenar datos en el archivo encuesta.txt");
        mensaje="<div class='alert alert-danger'><strong>Error: </strong>No se logró almacenar datos en el archivo encuenta.txt</div>";
        res.status(500).send(mensaje);
    }else{
        console.log("Datos procesados con éxito");
        mensaje="<div class='alert alert-success'><strong>Atención: </strong>Los datos fueron almacenados con éxito</div>";
        res.status(200).send(mensaje);
        
    }
    })

    
    // res.send(`Datos procesados desde el servidor Nombre: ${nombre}, Edad: ${edad}`);
});



//Inicialización del servidor
app.listen(PORT, () =>{
    console.log(
        `Servidor escuchando a través el puerto http://localhost:${PORT}`
    );
});

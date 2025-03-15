const express = require ('express');
const path = require ('path');
const bodyParser = require('body-parser');

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
    const {nombre,edad} = req.body;
    console.log(`Datos recibidos desde el Formilario, nombre:${nombre}, edad: ${edad}`);
    res.send(`Datos Procesados desde el servidor: nombre: ${nombre},edad: ${edad}`);
});
//inicializacion del servidor

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando a traves del puerto http://localhost:${PORT}`);
});
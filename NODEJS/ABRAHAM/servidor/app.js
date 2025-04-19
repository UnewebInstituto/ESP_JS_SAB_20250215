//Carga de lirerias a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequilize= require('sequelize');

//Instancia de la librerias cargadas
const app= express();

//Definición de puerto en el cual corre la aplicación
const PORT = 3003;

//Manejo de referencias cruzadas
app.use(cors());

//Manejo del barrido de contenido json
app.use(bodyParser.json())

//Conexión a la base de datos PostgreSQL
const sequelize = new sequilize(
  'carrito_de_compras_ab', 'postgres', '123456', {
    host:'localhost',
    dialect:'postgres',
    port:5432,
  }
);

app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

  //Comprobar conexión a la base de datos
sequelize.authenticate()
.then(()=>{
  console.log("Conexión a PostgreSQL establecida con éxito");
})
.catch((err)=>{
  console.error("No se pudo conectar a PostgreSQL"+err);
})

})

app.get("/", (req, res)=>{
  res.send("Hola mundo, dice Abraham!");
})
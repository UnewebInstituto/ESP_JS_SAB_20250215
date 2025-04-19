//Cargar de librerias a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

//Instancia de las librerias cargardas
const app = express();
//Definiciópn de puerto a traves corre la aplicación
const PORT = 3002;

//Manejo de referencias cruzadas
app.use(cors());
//Manejo del barrido de contenido json
app.use(bodyParser.json());

app.get('/', (req, res) =>{
  res.send ('¡Hola mundo, dice Pedro!');
  console.log('¡Hola mundo, dice Pedro!');
})

app.listen(PORT, () =>{
  console.log (`Servidor corriendo en http://localhost:${PORT}`);

    // Comprobar conexión a la base de datos
  sequelize.authenticate()
  .then(()=>{
    console.log('Conexión a PostgreSQL, establecida con éxito')
  })
  .catch(err=>{
    console.log('No se pudo conectar a PostgreSQL:', err)
  })
})

//Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('carrito_de_compras_pb', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});
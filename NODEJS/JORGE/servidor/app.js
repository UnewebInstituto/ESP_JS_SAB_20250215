const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//Incorporando la libreria de ORM
const { sequelize, Sequelize } = require('sequelize');

// instancia de la librerias cargadas
const app = express();
//Definicion de PUerto a travaes de los cuales corre la aplicacion
const PORT = 3004;

//Manejo de referencia cruzadas
app.use(cors());
//Manejo del Barrido de contenido JSON
app.use(bodyParser.json());

//
app.get('/', (req, res)=> {
  res.send('Hola mundo, dice JORGE!');
  console.log('Hola mundo, dice JORGE!!');
  
})


app.listen(PORT, () =>{
  console.log(`Servidor corrinedo en http://localhost:${PORT}`);

  // Conexión  a la base de datos Postgresql
  const sequelize = new Sequelize
    ('carrito_de_compras_jb', 'postgres', '123456', {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432
    })

  // Comprobar conexion a la base de datos
  sequelize.authenticate().then(()=>{
      console.log('Conexión a PostgreSQL, establecida con éxito');
    }).catch(err=>{
      console.error('No se pudo conectar a PostgreSQL:', err);
    })
  });

  
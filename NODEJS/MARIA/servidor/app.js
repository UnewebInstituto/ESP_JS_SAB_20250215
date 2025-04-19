//carga de llibrerias a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Sequelize} = require('sequelize');
//instancias de las librerias cargadas
const app = express();
const PORT = 3001; 

//Middleware
//manejo de referencias cruzadas
app.use(cors());
//manejo del barrido del contenido json
app.use(bodyParser.json());

app.get('/', (req,res) =>{
  res.send('Hola mundo, dice MARIA');
  console.log('!Hola mundo, dice MARIA');
});

app.listen(PORT,()=>{
  console.log(`Servidor Corriendo en http://localhost:${PORT}`); 
  //comprobar conexion a la bbdd 
sequelize.authenticate()
.then(()=>{
  console.log('Conexion a PostgreSQL establecida con exito');
})
.catch(err=>{
  console.error('Nose pudo conectar a PostgreSQL:', err);
})
})

//conexion a la base de datos postgresql
const sequelize = new Sequelize('carrito_de_compras_mp','postgres','123456',{
  host: 'localhost',
  dialect:'postgres',
  port: 5432
});

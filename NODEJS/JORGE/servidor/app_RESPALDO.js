const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//Incorporando la libreria de ORM
const { sequelize, Sequelize } = require('sequelize');
// Acceder al modelo de datos correspondiente a la tabla Usuario
const Usuario = require('./models/Usuario'); 
// Dependencia para el manejo criptográfico de la clave
const crypto = require('crypto');
const { error } = require('console');

// instancia de la librerias cargadas
const app = express();
//Definicion de PUerto a travaes de los cuales corre la aplicacion
const PORT = 3004;

//Manejo de referencia cruzadas
app.use(cors());
//Manejo del Barrido de contenido JSON
app.use(bodyParser.json());

// Función para el cifrado de clave
function generateMD5 (texto){
  return crypto.createHash('md5').update(texto).digest('hex');
} 

//
app.get('/', (req, res)=> {
  res.send('Hola mundo, dice JORGE!');
  console.log('Hola mundo, dice JORGE!!');
})

//En caso de que la peticion sea enviada por metodo get
app.get('/login', (req, res) =>{
  res.status(200).json({message: 'Por favor enviar una solicitud POST para iniciar sesión'});
  console.log('Por favor enviar una solicitud POST para iniciar sesión');
})

//En caso de que la petición sea enviada por metodo post
app.post('/login', async (req, res) =>{
  //Se toma del cuerpo de la petición (req) los valores recibidos
  const {emailTmp, passwordTmp} = req.body;
  console.log('');
  console.log('Valores recibidos desde el cliente Angular');
  console.log('Correo electrónico: ' + emailTmp + ' Clave secreta: ' + passwordTmp);
  console.log('');
  try{
    // Busqueda del usuario en la base de datos
    // Equivalentes a:
    // 'select * from usuarios where correo_electronico = '+ emailTmp
    // al ORM método findOne()
    const user = await Usuario.findOne({ where: {correo_electronico : emailTmp}})

    // Verificaón
    if (user && user.clave === generateMD5(passwordTmp)) {
      res.status(200).json({message: 'Login fue procesado con Éxito.', error: 
        {code:200, detail: 'Login fue procesado con Éxito.'}})
      console.log('');
      console.log('Usuario: ' + user.nombre + " " + user.apellido);
      console.log('Tipo de Usuriao: ' + user.tipo_usuario);
      
      console.log('Login fue procesado con Éxito.');
      console.log('');
      
    }else{
      res.status(401).json({message: 'Credenciales incorrectas.', error: 
        {code:401, detail: 'Credenciales incorrectas.'}})
      console.log('');
      console.log('Credenciales incorrectas.');
      console.log('');
    }
  }catch (error) {
    res.status(500).json({message: 'Error en el servidorr.', error: 
      {code:500, detail: 'Error en el servidor.'}})

    console.log('');
    console.log('Error en el servidor.');
    console.log(error);
    console.log('');
  }
});

app.listen(PORT, () =>{
  console.log(`Servidor corrinedo en http://localhost:${PORT}`);

  /*// Conexión  a la base de datos Postgresql
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
    })*/
  });

  
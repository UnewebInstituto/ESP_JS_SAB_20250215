//Cargar de librerias a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

//Acceso al modelo de datos correspondiente a la tabla Usuario
const Usuario = require('./models/Usuario');

//Dependencia para el manejo criptográfico de la clave
const crypto = require('crypto');

//Instancia de las librerias cargardas
const app = express();
//Definiciópn de puerto a traves corre la aplicación
const PORT = 3002;

//Manejo de referencias cruzadas
app.use(cors());
//Manejo del barrido de contenido json
app.use(bodyParser.json());

//Función para producir la clave cifrada usando MD5 en el sembrado
const generateMD5 = (texto) => {
  return crypto.createHash('md5').update(texto).digest('hex');
}

app.get('/', (req, res) =>{
  res.send ('¡Hola mundo, dice Pedro!');
  console.log('¡Hola mundo, dice Pedro!');
})

//En caso de que la petición sea enviada por método get
app.get('/login', (req, res) =>{
  res.status(200).json({message: 'Por favor enviar una solicitud POST para iniciar sesión'});
  console.log('Por favor enviar una solicitud POST para iniciar sesión');
})

//En caso de que la petición sea enviada por método post
app.post('/login', async(req, res) =>{
  //Se toma del cuerpo de la petición (req) los valores recibidos
  const {emailTmp, passwordTmp} = req.body;
  console.log(' ');
  console.log('Valores recibidos desde el cleinte Angular');
  console.log('Correo electrónico: ' + emailTmp + ' Clave secreta: ' + passwordTmp);
  console.log(' ');
  try {
    //Buscar usuario en la base de datos
    const user = await Usuario.findOne({where: {correo_electronico:emailTmp}});
    //Verificación
    if (user  && user.clave === generateMD5(passwordTmp)){
      res.status(200).json({message: 'Login fue procesado con éxito.', error: ({code:200, detail: 'Login fue procesado con éxito.'})});
      console.log('');
      console.log('Usuario: ' + user.nombre + " " + user.apellido);
      console.log('Tipo usuario: ' + user.tipousuario);
      console.log('Login fue procesado con éxito.');
      console.log('');
    } else {
      res.status(401).json({message: 'Crendenciales incorrectas.', error: ({code:401, detail: 'Crendenciales incorrectas.'})});
      console.log('');
      console.log('Crendenciales incorrectas.');
      console.log('');
    }
  } catch (error) {
    res.status(500).json({message: 'Error en el servidor.', error: ({code:500, detail: 'Error en el servidor.'})});
    console.log('');
      console.log('Error en el servidor. ' + error);
      console.log('');
  }  
})

app.post('/usuario', async (req, res)=>{
  //Creación de nuevos usuarios  
  const { cedula, nombre, apellido, correo_electronico, clave, tipo_usuario } = req.body;
  try {
    //Verificar a traves del correo electrónico, si el usuario se encuentra registrado
    //ORM Sequelize
    const usuarioExiste = await Usuario.findOne({where:{correo_electronico}})
    if (usuarioExiste){
      //Se dvuelve al cliente con el mensaje de error
      res.status(401).json({message: 'El correo eletrónico ya se encuentra registrado.', error: ({code:401, detail: 'El correo eletrónico ya se encuentra registrado.'})});
      console.log('El correo eletrónico ya se encuentra registrado.')
    } 
    
    // El correo electrónico no existe, puede crear el nuevo usuario
    const nuevoUsuario = await Usuario.create({
      cedula,
      nombre, 
      apellido,
      correo_electronico,
      clave: generateMD5(clave),
      tipo_usuario
    });

    res.status(200).json({message: 'Nuevo usuario fue registrado de forma satisfactoria.', error: ({code:200, detail: 'Nuevo usuario fue registrado de forma satisfactoria.'})});
    console.log('Nuevo usuario fue registrado de forma satisfactoria.');
    
  } catch (error) {
    res.status(500).json({message: 'Error en el servidor.', error: ({code:500, detail: 'Error en el servidor.'})});
    console.log('Error en el servidor.');
  }
})

app.listen(PORT, () =>{
  console.log (`Servidor corriendo en http://localhost:${PORT}`);
/*
    // Comprobar conexión a la base de datos
  sequelize.authenticate()
  .then(()=>{
    console.log('Conexión a PostgreSQL, establecida con éxito')
  })
  .catch(err=>{
    console.log('No se pudo conectar a PostgreSQL:', err)
  })*/
})

//Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('carrito_de_compras_pb', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});
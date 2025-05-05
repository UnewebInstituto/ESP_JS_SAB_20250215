//carga de llibrerias a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Sequelize} = require('sequelize');
//Acceso al modelo de los datos correspondientes a la tabla usuario
const Usuario = require('./models/Usuario');
//dependencia para el manejo criptografico de la clave
const crypto = require('crypto');
const { console } = require('inspector');
//instancias de las librerias cargadas
const app = express();
const PORT = 3001; 

//Middleware
//manejo de referencias cruzadas
app.use(cors());
//manejo del barrido del contenido json
app.use(bodyParser.json());

//funcion para el cifrado de la clave
const generateMD5 = (texto)=>{
  return crypto.createHash('md5').update(texto).digest('hex');
}



app.get('/', (req,res) =>{
  res.send('Hola mundo, dice MARIA');
  console.log('!Hola mundo, dice MARIA');
});

//en caso de que la peticion sea enviada por metodo GET 
app.get('/login',  (req,res) =>{
  res.status(200).json({message:'Por favor envia una solicitud POST para iniciar sesión'});
  console.log('Por favor envia una solicitud POST para iniciar sesión');
})

//en caso de que la peticion sea enviada por metodo PPOST
app.post('/login', async (req,res) =>{

  //se toma del cuerpo de la peticion (req) los valores recibidos
  const {emailTmp, passwordTmp} = req.body; 
  console.log('Valores recibidos desde el cliente Angular');
  console.log('Correo electronico:' + emailTmp + 'Password:' + passwordTmp);
  console.log('');
    try{
      //busqueda de usuario en la bbdd
      //equivalente a :' select * from usuarios where correo_electronico =' +emailTmp 
      // AL ORM METODO findOne()
      const user = await Usuario.findOne({where: {correo_electronico:emailTmp}})
      //verificacion 
      if(user && user.clave==generateMD5(passwordTmp)){
        res.status(200).json({message:'Login fue procesado con éxito.',error:{code:200, detail:'Login fue procesado con éxito.'}});
        console.log('Tipo de usuario:' + user.tipo_usuario);
        console.log('Login fue procesado con exito.');
        console.log('');
      }else{
        res.status(401).json({message:'Credenciales incorrectas',error:{code:401, detail:'Credenciales  '}});
        console.log('');
        console.log('Credenciales incorrectas');
        console.log('');
      }
    }catch(error){
      res.status(500).json({message:'Error en el servidor.', error:{code:500, detail:'Error en el servidor.'}});
      console.log('');
      console.log('Error en el servidos', error);
      console.log('');
    };
});

app.post('/usuario', async(req,res)=>{ //creacion de los nuevos usuarios
  const{cedula,nombre,apellido,correo_electronico,clave,tipo_usuario} = req.body;
  try{
    //verificar a traves del correo electronico, si el usuario se encuentra registrado
    //ORM sequelize
    const usuarioExistente = await Usuario.findOne({where:{correo_electronico}});
    
    if(usuarioExistente){
      //Se devuelve al cliente con el mensaje de error 
      res.status(401).json({message:'Correo Electronico ya se encuentra Registrado',error:{code:401, detail:'Correo Electronico ya se encuentra Registrado.'}});
      console.log('');
      console.log('Usuario existe', error);
      console.log('');
    }
    //el correo electronico no existe, puede crear el nuevo usuario
   //ORM sequelize
    const nuevoUsuario = await Usuario.create({
      cedula,
      nombre,
      apellido,
      correo_electronico,
      clave: generateMD5(clave),
      tipo_usuario
    });

    res.status(200).json({message:'Nuevo Usuario fue registrado con Exito',error:{code:200, detail:'Nuevo Usuario fue registrado con Exito.'}});
    console.log('');
    console.log('Nuevo Usuario fue registrado', error);
    console.log('');

  }catch(error){
    res.status(500).json({message:'Error en el servidor.', error:{code:500, detail:'Error en el servidor.'}});
    console.log('');
    console.log('Error en el servidos', error);
    console.log('');
  }
})



app.listen(PORT,()=>{
  console.log(`Servidor Corriendo en http://localhost:${PORT}`); 
  //comprobar conexion a la bbdd 

//   //conexion a la base de datos postgresql
//   const sequelize = new Sequelize('carrito_de_compras_mp', 'postgres', '123456', {
//     host: 'localhost',
//     dialect: 'postgres',
//     port: 5432
// });
// sequelize.authenticate()
// .then(()=>{
//   console.log('Conexion a PostgreSQL establecida con exito');
// })
// .catch(err=>{
//   console.error('Nose pudo conectar a PostgreSQL:', err);
// })
})


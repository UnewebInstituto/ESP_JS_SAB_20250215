//Carga de lirerias a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {Sequelize}= require('sequelize');

//Acceso al modelo de datos conrrespondiente a la tabla usuario
const Usuario = require('./models/Usuario');

//Referencia para el manejo criptográfico de la clave
const crypto=require('crypto');

//Función para producir la clave cifrado en el sembrado
   //Arrow Function
   const generateMD5 = (texto)=>{
    return crypto.createHash('md5').update(texto).digest('hex');
  }

//Instancia de la librerias cargadas
const app= express();

//Definición de puerto en el cual corre la aplicación
const PORT = 3003;

//Manejo de referencias cruzadas
app.use(cors());

//Manejo del barrido de contenido json
app.use(bodyParser.json())

//Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(
  'carrito_de_compras_ab', 'postgres', '123456', {
    host:'localhost',
    dialect:'postgres',
    port:5432,
  }
);

app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en http://localhost:${PORT}`);

})

//Comprobar conexión a la base de datos
/*
sequelize.authenticate()
.then(()=>{
  console.log("Conexión a PostgreSQL establecida con éxito");
})
.catch((err)=>{
  console.error("No se pudo conectar a PostgreSQL"+err);
})

})
*/
app.get("/", (req, res)=>{
  res.send("Hola mundo, dice Abraham!");
})

app.get("/login", (req, res)=>{
  res.status(200).json({message: "Por favor enviar una solicitud POST para iniciar sesión"});
  console.log("Por favor enviar una solicitud POST para iniciar sesión");
})

app.post("/login",async(req, res)=>{
  //Se toma del cuerpo de la petición los valores recibidos
  //Deben tener el mismo nombre que en el request. De lo contrario no funcionará
  const {emailtmp, passwordtmp}=req.body;
  console.log(" ");
  console.log("Valores recibidos desde el cliente Angular");
  console.log(`Correo electónico: ${emailtmp} Contraseña: ${passwordtmp}`);

  try {
    //Busqueda del usuario en la base de datos
    //findOne es el equivalente SQL a: SELECT * FROM usuarios WHERE correo_electronico=emailtmp;
    const user= await Usuario.findOne({where: {correo_electronico: emailtmp}})
    //verificación
    if(user && user.clave === generateMD5(passwordtmp)){
      res.status(200).json({message: "Login procesado con éxito", error:{code:200, detail:"Login procesado con éxito"}});
      console.log("Login procesado con éxito");
      console.log(`Nombre: ${user.nombre} Apellido: ${user.apellido}`);
    }
    else{
      res.status(401).json({message:"Credenciales incorrectas", error:{code:401, detail:"credenciales incorrectas"}});
      console.log("Credenciales incorrectas");

    }
  } catch (error) {
    res.status(500).json({message:"Error en el servidor", error:{code:500, detail:"Error en el servidor"}});
    console.log("Error en el servidor"+error);
  }
})

app.post("/usuario", async(req, res)=>{
  //corresponde a la creación de nuevos usuarios

  const {cedula, nombre, apellido, correo_electronico, clave, tipo_usuario}=req.body;

  try{
    //verificar a través del correo electrónico si el usuario se encuentra registrado
    //Se hace así porque se llaman igual
    const usuarioExistente=await Usuario.findOne({where:correo_electronico})

    if (usuarioExistente){
      //Se devuelve al cliente con el mensaje de error
      res.status(401).json({message:"El correo electrónico ya se encuentra registrado", error:{code:401, detail:"El correo electrónico ya se encuentra registrado"}});
      console.log("El correo electrónico ya se encuentra registrado");
    }
    else{
    //El correo electrónico no existe, puede crearse el nuevo usuario

      const nuevoUsuario= await Usuario.create(
        cedula, nombre, apellido, correo_electronico, generatemd5(clave), tipo_usuario
      )
      res.status(200).json({message:"Nuevo usuario registrado de forma satisfactoria", error:{code:200, detail:"Nuevo usuario registrado de forma satisfactoria"}});
      console.log("Nuevo usuario registrado de forma satisfactoria");


    }
  }
  catch (error) {
    res.status(500).json({message:"Error en el servidor", error:{code:500, detail:"Error en el servidor"}});
    console.log("Error en el servidor");
  }
})
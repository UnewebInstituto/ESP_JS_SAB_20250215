const  {Sequelize}  = require("sequelize");

//Se configura la conexión a la base de datos de manera que a traves del modelo se acceda a los campos respectivos de la tablas en base de datos

//Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize(
  'carrito_de_compras_ab', 'postgres', '123456', {
    host:'localhost',
    dialect:'postgres',
    port:5432,
  }
);

//Verificar la conexión a la base de datos
const testConexion=async()=>{
  try{
    await sequelize.authenticate();
    console.log('Conexión a traves del modelo de datos establecida con éxito');
    console.log('');
  }
  catch(error){
    console.log("Error: No se pudo conectar a la base de datos"+ error);
  }
} 

//Realiza prueba de conexión
testConexion();

//Se habilita el modelo a traves de la exportación
module.exports = sequelize;
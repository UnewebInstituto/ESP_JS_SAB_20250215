const {Sequelize} = require('sequelize');

// Se configura conexión a la base de datos 
// de manera que a través del modelo se acceda
// a los campos respectivos de la tablas en
// base de datos
// Conexión a la base de datos Postgresql
const sequelize = new Sequelize('carrito_de_compras_hd', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

//verificar conexion a la base de datos
const testConnection =  async ( ) => {
  try{
    await sequelize.authenticate();
    console.log('');
    console.log(' conexion a traves del modelo de datos se establecio con exito');
    console.log('');
    
  } catch (error){
    console.log('');
    console.log('error: no se pudo conectar a la base de datos', error);
    console.log('');

  }
}

//realiza prueba de conexion
testConnection();

//se habilita el modelo a traves de la 

module.exports = sequelize;

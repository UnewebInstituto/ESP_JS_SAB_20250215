const {Sequelize} = require('sequelize');
//Se configura la conexion a la bbdd de manera que 
// a traves del modelo se accesa a los campos respectivo de las tablas en bbdd

const sequelize = new Sequelize('carrito_de_compras_mp', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});
//verifica la cionexion a la bbdd
const testConnection = async () =>{
  try {
    await sequelize.authenticate();
    console.log('')
    console.log('La conexion a traves del modelo de datos se establecion con exito');
  }catch(error){
    console.log('');
    console.log('Error no se pudo conectar a la base de datos', error);
    console.log('')
  }
}
//realiza prueba de conexion 
testConnection();

//se realiza el modelo a traves de la exportacion del modelo
module.exports = sequelize;
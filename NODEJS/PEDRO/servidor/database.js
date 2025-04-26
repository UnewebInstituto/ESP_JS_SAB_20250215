const {Sequelize}=require('sequelize');

//Se configura conexión a la base de datos de manera que a través del modelo se acceda a los campos respectivos de ls tablas en base de datos

//Conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('carrito_de_compras_pb', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

//Verificar la conexión
const testConnection = async () => {
  try{
    await sequelize.authenticate();
    console('');
    console.log('Conexión a través del modelo de datos, se establecio con éxito');
    console('');
  } catch (error) {
    console.log('');
    console.log('Error, no se pude conectar con la base de datos, ', error);
    console.log('');
  }
}

//Realiza prueba de conexión
testConnection();

//Se habilita el modelo a traves de la exportación
module.exports = sequelize;
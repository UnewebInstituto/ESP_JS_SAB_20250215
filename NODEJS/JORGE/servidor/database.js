const {Sequelize} = require('sequelize');
// Se configura conexión a la base de datos
// de manera que a través del modelo se acceda
// a los campos respectivos de la tablas en
// base de datos
// Conexión  a la base de datos Postgresql
const sequelize = new Sequelize
('carrito_de_compras_jb', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

// Verificar la conexión a la base de datos
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('');
    console.log('Conexión a través del modelo de datos se estableció con éxito');
    console.log('');
    
    
  } catch (error) {
    console.log('');
    console.log('ERROR: No se pudo conectar a la base de datos', error);
    console.log('');
  }
}
// Realiza prueba de conexión
testConnection();

// Se habilita el modelo a través de la exportación del modulo
module.exports = sequelize;

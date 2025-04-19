// Carga de librerías a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// ORM Sequelize
const { Sequelize } = require('sequelize');

// Instancia de la librerías cargadas
const app = express();
/**
 * Definición de Puertos a través de los cuales
 * corre la aplicación
 * Henry : 3000
 * María : 3001
 * Pedro : 3002
 * Abraham: 3003
 * Jorge: 3004
 * Efrenyer: 3005
 */
const PORT = 3000;

// Manejo de referencia cruzadas
app.use(cors());
// Manejo del barrido de contenido json
app.use(bodyParser.json());

//
app.get('/', (req,res) =>{
    res.send('¡Hola mundo, dice HENRY!');
    console.log('¡Hola mundo, dice HENRY!');
});


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

    // Conexión a la base de datos Postgresql
    const sequelize = new Sequelize('carrito_de_compras_hd', 'postgres', '123456', {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    });

    // Comprobar conexión a la base de datos
    sequelize.authenticate()
    .then(()=>{
        console.log('Conexión a PostgreSQL, establecida con éxito');
    })
    .catch(err =>{
        console.error('No se pudo conectar a PostgreSQL:', err);
    })
})

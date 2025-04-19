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
 *         serv clte
 * Henry : 3000 4200
 * María : 3001 4201
 * Pedro : 3002 4202
 * Abraham: 3003 4203
 * Jorge: 3004 4204
 * Efrenyer: 3005 4205
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

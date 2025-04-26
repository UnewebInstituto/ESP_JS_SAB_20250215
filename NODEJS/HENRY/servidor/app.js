// Carga de librerías a emplear
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// ORM Sequelize
const { Sequelize } = require('sequelize');
// Acceder al modelo de datos correspondiente a la tabla Usuario
const Usuario = require('./models/Usuario');
// Dependencia para el manejo criptografico de la clave
const crypto = require('crypto');
// Instancia de la librerías cargadas
const app = express();
/**
 * Definición de Puertos a través de los cuales
 * corre la aplicación
 *         serv clte
 * Henry : 3000 4206
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

// Función para el cifrado de clave
function generateMD5(texto){
    return crypto.createHash('md5').update(texto).digest('hex');
}

//
app.get('/', (req,res) =>{
    res.send('¡Hola mundo, dice HENRY!');
    console.log('¡Hola mundo, dice HENRY!');
});

// En caso de que la petición sea enviada por método get
app.get('/login', (req,res) =>{
    res.status(200).json({message: 'Por favor enviar una solicitud POST para iniciar sesión' });
    console.log('Por favor enviar una solicitud POST para iniciar sesión');
});

// En caso de que la petición sea enviada por métod post
app.post('/login', async(req,res) =>{
    // Se toma del cuerpo de la petición (req) los valores recibidos
    const {emailTmp, passwordTmp} = req.body;
    console.log(' ');
    console.log('Valores recibidos desde el cliente Angular');
    console.log('Correo electrónico:' + emailTmp + ', Clave secreta:' + passwordTmp );
    console.log(' ');
    try {
        // Busqueda del usuario en la base de datos
        // Equivalente de SQL
        // 'select * from usuarios where correo_electronico = ' + emailTmp
        // al ORM método findOne()
        const user = await Usuario.findOne({where: {correo_electronico:emailTmp}});
        // Verificación
        if (user && user.clave === generateMD5(passwordTmp)){
            res.status(200).json({message:'Login fue procesado con éxito.'});
            console.log(' ');
            console.log('Usuario: ' + user.nombre + " " + user.apellido);
            console.log('Tipo usuario: ' + user.tipo_usuario);
            console.log('Login fue procesado con éxito.');
            console.log(' ');
        }else{
            res.status(401).json({message:'Credenciales incorrectas.'});
            console.log(' ');
            console.log('Credenciales incorrectas.');
            console.log(' ');
        }
    } catch (error) {
        res.status(500).json({message:'Error en el servidor.'});
        console.log(' ');
        console.log('Error en el servidor.');
        console.log(' ');
    }
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);

    // Conexión a la base de datos Postgresql
    /*
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
    */
})

'use strict';
//incorporacion de libreria criptografica
const crypto = require ('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    //Funcion  para producir la clave del cifrado MD5 en el sembrado
    const generateMD5 = (texto)=>{
      return crypto.createHash('md5').update(texto).digest('hex');
    }

    await queryInterface.bulkInsert('usuarios', [{
      cedula:'V12345678',
      nombre: 'Maria',
      apellido: 'Pena',
      correo_electronico:'mpr@gmail.com',
      clave: generateMD5('V12345678'),
      tipo_usuario: 'ADMINISTRADOR',
    }], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};

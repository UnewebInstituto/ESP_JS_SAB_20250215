'use strict';
// Incorporación de librería criptografica
const crypto = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // Función para producir la clave cifrada usando MD5 en el sembrado
    // Arrow function
    /*
    const generateMD5 = (texto) =>{
      return crypto.createHash('md5').update(texto).digest('hex');
    }
    */
   function generateMD5(texto){
    return crypto.createHash('md5').update(texto).digest('hex');
   }

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('usuarios', [{
       cedula: 'V12345678',
       nombre: 'ANA',
       apellido: 'VASQUEZ',
       correo_electronico: 'av@gmail.com',
       clave: generateMD5('V12345678'),
       tipo_usuario: 'ADMINISTRADOR'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};

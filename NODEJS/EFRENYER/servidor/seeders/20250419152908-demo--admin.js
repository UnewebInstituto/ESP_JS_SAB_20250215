'use strict';
//incorporacion libreria criptografica
const crypto = require('crypto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   //funcion para producir la clave cifrada usando MD5 en el sembrado

   const generate = (texto) => {
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
     apellido: 'VAZQUEZ',
     correo_electronico: 'AV@gmail.com',
     clave: generate('V12345678'),
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

    await queryInterface.bulkDelete('usuario', null, {});
  }
};

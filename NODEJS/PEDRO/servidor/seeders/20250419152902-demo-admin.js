'use strict';
//Incorporación de libreria criptografica
const crypto = require('crypto');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    //Función para producir la clave cifrada usando MD5 en el sembrado
    const generateMD5 = (texto) => {
      return crypto.createHash('md5').update(texto).digest('hex');
    }

    await queryInterface.bulkInsert('usuarios', [{
         cedula:'V13686366',
         nombre: 'PEDRO',
         apellido: 'BALDA',
         correo_electronico: 'pedro@gmail.com',
         clave: generateMD5("V13686366"),
         tipousuario: 'ADMINISTRADOR'
       }], {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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

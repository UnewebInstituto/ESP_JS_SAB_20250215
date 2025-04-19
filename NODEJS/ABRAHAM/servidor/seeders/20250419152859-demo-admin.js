'use strict';
//Incorporación de libreria criptográfica
//Ya viene con javascript
const crypto = require('crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   //Función para producir la clave cifrado en el sembrado
   //Arrow Function
    const generateMD5 = (texto)=>{
      return crypto.createHash('md5').update(texto).digest('hex');
    }

    await queryInterface.bulkInsert('usuarios', [{
        cedula:"30721342",
         nombre: 'Abraham',
         apellido: "Balda",
         correo_electronico:"abrahamBalda@gmail.com",
        clave:generateMD5("123456"),
        tipo_usuario:"administrador"
       }]);

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

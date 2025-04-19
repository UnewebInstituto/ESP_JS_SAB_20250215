'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('productos', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      nombre:{
        type:Sequelize.STRING(255),
        allowNull:false
      },
      descripcion:{
        //STRING mucho más largo 65000
        type:Sequelize.TEXT,
        allowNull:false
      },
      precio:{
        //FLOAT con limites de decimales
        type:Sequelize.DECIMAL(13,2),
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('productos');
  }
};

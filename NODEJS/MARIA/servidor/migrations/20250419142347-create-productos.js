'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('productos', { 
      id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    nombre:{
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    descripcion:{
      type:Sequelize.TEXT,
      allowNull: false,
    },
    precio:{
      type:Sequelize.DECIMAL(13,2),
      allowNull: false,
    },
    existencia:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt:{
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt:{
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    });

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('productos');
    
  }
};

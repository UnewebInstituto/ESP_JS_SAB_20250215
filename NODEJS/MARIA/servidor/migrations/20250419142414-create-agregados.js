'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('agregados', { 
      sesion_id: { type: Sequelize.STRING(26),
        allowNull:false,
      },
      producto_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

    });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('agregados');

  }
};

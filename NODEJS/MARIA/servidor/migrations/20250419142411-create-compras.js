'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('compras', { 
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      producto_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      fecha: {
        type: Sequelize.DATE,
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

    await queryInterface.dropTable('compras');

  }
};

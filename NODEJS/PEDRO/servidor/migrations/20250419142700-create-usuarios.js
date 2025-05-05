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
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cedula: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      nombre: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      correo_electronico: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      clave: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      tipousuario: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('usuarios');
  }
};

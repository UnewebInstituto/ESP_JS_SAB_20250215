// models/Usuario.js
const { DataTypes } = require("sequelize");
//Requerido para vincular el modelo con datos físicos de la tabla (conexión a la base de datos)
const sequelize = require('../database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cedula: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  clave: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  tipousuario: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'usuarios', //Nombre de la tabla en la base de datos
  timestamps: true, // Si se desea que sequelize maneje createAT y updateAT
  createdAt: 'createdAt', //Nomnre del campo createdAt
  updateddAt: 'updateddAt', //Nomnre del campo updateddAt
});

//Espera por la sincronización del modelo con la base de datos
const syncModel = async() => {
  await Usuario.sync();
}

syncModel();

module.exports = Usuario;
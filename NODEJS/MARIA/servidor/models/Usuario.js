const {DataTypes} = require('sequelize');

//requerido para vincular el modelo con datos fisicos de la tabla (conexion a bbdd)
const sequelize = require('../database'); 


const Usuario = sequelize.define('Usuario',{

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cedula:{
    type: DataTypes.STRING(255),
    allowNull: false
  },
  nombre:{
    type: DataTypes.STRING(255),
    allowNull: false
  },
  apellido:{
    type: DataTypes.STRING(255),
    allowNull: false
  },
  correo_electronico:{
    type: DataTypes.STRING(255),
    allowNull: false,
    unique:true
  },
  clave:{
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  tipo_usuario:{
    type: DataTypes.STRING(255),
    allowNull: false
  },
},{
  tableName:'usuarios', //Nombre de la tabla en la BBDD
  timestamps: true, //si se desea que sequelize maneje createAt y updateAt
  createdAt:'createdAt', //nombre del campo createAt
  updateAt:'updateAt', //nombre del campo updateAt
})

//sincroniza los modelos con la bbdd
const syncModel = async()=>{
  await Usuario.sync();
};

syncModel();
module.exports = Usuario;
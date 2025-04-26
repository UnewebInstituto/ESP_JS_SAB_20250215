const { DataTypes } = require("sequelize");

//Requerido para vincular el modelo con datos físicos de la tabla (conexión a base de datos)
const  sequelize  = require("../database");

const usuarios=sequelize.define("Usuarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  cedula:{
    type: DataTypes.STRING(255),
    allowNull:false,
    unique:true
  },
  nombre:{
    type: DataTypes.STRING(255),
    allowNull:false,
  },
  apellido:{
    type: DataTypes.STRING(255),
    allowNull:false,
  },
  correo_electronico:{
    type: DataTypes.STRING(255),
    allowNull:false,
    unique:true
  },
  clave:{
    type: DataTypes.STRING(32),
    allowNull:false,
  },
  tipo_usuario:{
    type:DataTypes.STRING(255),
    allowNull:false,
  },
},
{
  tableName:"usuario",
  timestamps: true,
  createdAt:"createdAt",
  updatedAt:"updatedAt"
}
)

//Espera por la sincronización del modelo con la base de datos
const syncModel=async()=>{
  await usuarios.sync();
}

syncModel();
module.exports=usuarios;
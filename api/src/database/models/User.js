const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user',{
       id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       firstName:{
        type: DataTypes.STRING
       },
       lastName:{
        type: DataTypes.STRING
       },
       userName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
       },
       password:{
        type: DataTypes.STRING,
        allowNull: false
       },
       avatar:{
        type: DataTypes.STRING,
        defaultValue: null
       },
    },
    {
        timestamps: false,
    }
    );
};

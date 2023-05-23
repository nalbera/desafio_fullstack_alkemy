const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('type',{
       id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       description:{
        type: DataTypes.STRING
       },
    },
    {
        timestamps: false,
    }
    )
};

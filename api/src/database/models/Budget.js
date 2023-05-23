const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('budget',{
       id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
       },
       description:{
        type: DataTypes.STRING
       },
       amount:{
        type: DataTypes.DECIMAL,
        allowNull: false
       }
    },
    {
        timestamps: false,
    }
    );
};

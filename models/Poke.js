const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Poke extends Model { }

Poke.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        superEffective: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        notEffective: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'poke',
    }
);

module.exports = Poke;

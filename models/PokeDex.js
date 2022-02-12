const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokedex extends Model { }

Pokedex.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        superEffective: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notEffective: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pokedex',
    }
);

module.exports = Pokedex;
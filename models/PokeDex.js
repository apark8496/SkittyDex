const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Team extends Model { }

Team.init(
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
            type: DataTypes.TEXT,
            allowNull: false,
        },
        superEffective: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notEffective: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },        
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'team',
    }
);

module.exports = PokeDex;
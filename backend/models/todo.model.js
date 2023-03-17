const { Sequelize, DataTypes } = require('sequelize');

const db = require('../db')
const sequelize = db.getDB();

const Todo = sequelize.define('Todo', {
    todoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    todoTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    todoDescription: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    todoCreationTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    todoDeadline: {
        type: DataTypes.DATE,
        allowNull: true
    },
    todoCompletionTime: {
        type: DataTypes.DATE,
        allowNull: true
    },
    todoIsPending: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = {
    Todo
};

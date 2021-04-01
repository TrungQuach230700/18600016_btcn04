const { DataTypes } = require('sequelize');
const db=require('./db');
const User=require('./user');

const Todo = db.define('Todo', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    done: {
      type: DataTypes.STRING,
      defaultValue:false,
      allowNull: false,
      // allowNull defaults to true
    },
  });

  Todo.belongsTo(User);
  User.hasMany(Todo);
  module.exports=Todo;
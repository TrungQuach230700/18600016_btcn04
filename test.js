const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/todo');
 // Example for postgres
 (async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        const User = sequelize.define('User', {
            // Model attributes are defined here
            firstName: {
              type: DataTypes.STRING,
              allowNull: false
            },
            lastName: {
              type: DataTypes.STRING
              // allowNull defaults to true
            }
          }, {
            // Other model options go here
          });
          await sequelize.sync();
          const users= await User.findAll();
          console.log(users);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
 })().catch(console.error);
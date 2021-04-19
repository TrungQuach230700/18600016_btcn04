const { DataTypes } = require('sequelize');

const db=require('./db');
const User = db.define('User', {
    // Model attributes are defined here
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        // allowNull defaults to true
      },
    picture:{
      type:DataTypes.BLOB,
      allowNull:true,
    }  
  });

// const users=[{
//     id:1,
//     displayName:'TrungQuach',
//     email:'18600016@student.hcmus.edu.vn',
//     password:'kocopass',
// }];

User.findByEmail= async function(email){
    return User.findOne({
        where:{
            email,
        },
    });
};

User.findById= async function(id){
    return User.findByPk(id);
};

module.exports=User;
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = squelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dob:{
        type:Sequelize.DATEONLY,
        allowNull:false
    },
    mobile:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
});

module.exports = User;

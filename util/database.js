const Sequelize = require('sequelize');
const sequelize = new Sequelize('booking-user','root','SQLpassword',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;

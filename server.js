const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

sequelize.sync()
    .then(result =>{
        app.listen(5000);
    })
    .catch(err => console.log(err))

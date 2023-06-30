const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const controller404 = require('./controllers/404');

app.use(bodyParser.urlencoded({extended:false}));

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(userRoutes);
app.use('/admin',adminRoutes);

app.use(controller404.get404);

sequelize.sync()
    .then(result =>{
        app.listen(5000);
    })
    .catch(err => console.log(err))

const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/users');
const fs = require('fs');

exports.getUserIndex = (req,res,next) => {
    fs.readFile(path.join(rootDir,'views','add-user.html'),'utf8',(err,data) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }else{
            res.send(data);
        }
    })
}


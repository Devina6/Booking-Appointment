const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/users');
const fs = require('fs');

exports.getIndex = (req,res,next) => {
    fs.readFile(path.join(rootDir,'views','add-user.html'),'utf8',(err,data) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }else{
            res.send(data);
        }
    })
}

exports.getUsers = (req,res,next) => {
    User.findAll()
        .then(users => {
            console.log(users);
            res.json(users);
        })
        .catch(err => console.log(err))
}

exports.getUser = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id).then((user) => {
      res.json(user);
    });
  };

  exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    User
      .findByPk(id)
      .then((user) => {
        return user.destroy();
      })
      .then(() => {
        res.redirect("/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

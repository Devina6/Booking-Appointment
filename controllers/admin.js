const path = require('path');
const rootDir = require('../util/path');
const User = require('../models/users');
const fs = require('fs');

exports.postAddUser = (req,res,next) => {
    const name = req.body.name;
    const dob = req.body.dob;
    const mobile = req.body.mobile;
    const email = req.body.email;
    User.create({
        name:name,
        dob:dob,
        mobile:mobile,
        email:email
    }).then(result => {
        return res.redirect('/users');
    }).catch(err => console.log(err))
}

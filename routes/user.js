const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/',userController.getIndex);
router.get('/users',userController.getUsers);
router.get('/user/:id',userController.getUser);
router.get('/delete/:id',userController.deleteUser);

module.exports = router;

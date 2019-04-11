
const express = require('express');
const Router = express.Router;
const loginRouter = Router();
const {logIn, logInUser} = require('../controllers/login');


loginRouter.get('/', logIn);
loginRouter.post('/', logInUser);

module.exports = loginRouter;
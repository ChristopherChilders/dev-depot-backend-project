const express = require('express');
const Router = express.Router;
const registrationRouter = Router();
const register = require('../controllers/registration');

registrationRouter.post('/', register);

module.exports = registrationRouter;
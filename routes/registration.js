const express = require('express');
const Router = express.Router;
const registrationRouter = Router();
const {goToRegistration} = require('../controllers/registration');
const User = require('../models/users');

registrationRouter.get('/', goToRegistration);
// registrationRouter.post('/', registration);


module.exports = registrationRouter;
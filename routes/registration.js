const express = require('express');
const Router = express.Router;
const registrationRouter = Router();
const {goToRegistration} = require('../controllers/registration');
const User = require('../models/users');

registrationRouter.get('/', goToRegistration);

registrationRouter.post('/registration', (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    console.log(firstName, lastName, username, email, password);
})


module.exports = registrationRouter;
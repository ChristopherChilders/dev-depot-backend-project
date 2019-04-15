const express = require('express');
const Router = express.Router;
const registrationRouter = Router();
const {goToRegistration} = require('../controllers/registration');
const User = require('../models/users');

registrationRouter.get('/', goToRegistration);

registrationRouter.post('/', (req, res) => {
    console.log(req.body);
    console.log('======================');
    const firstName = req.body.firstName;
    console.log(`first name`, req.body.firstName);
    const lastName = req.body.lastName;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log(firstName, lastName, email, username, password);
    User.add(firstName, lastName, email, username, password)
        .catch(err => {
            console.log(err);
        })
        .then(newUser => {
            console.log(newUser);
            req.session.user = newUser;
            res.redirect('/dashboard');
        })
})


module.exports = registrationRouter;
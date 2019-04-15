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
    // const hashedPassword = setPassword(req.body.password);
    // console.log(hashedPassword);
    console.log(firstName, lastName, email, username, password);
    User.add(firstName, lastName, email, username, password)
    .then(async () => {
        const user = await User.getByEmail(`${req.body.email}`);
        console.log(user);
        user.setPassword(`${req.body.password}`);
        await user.updatePassword();
        console.log('you did the thing')
        
    })
    .catch(err => {
        console.log(err);
        console.log('////////////////////////')
        res.redirect('/registration');
    })
    .then(newUser => {
        console.log(newUser);
        req.session.user = newUser;
        res.redirect('/login');
    })
})


module.exports = registrationRouter;
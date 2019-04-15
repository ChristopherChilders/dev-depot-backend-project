
const User = require('../models/users');

async function logIn(req, res) {
    // const theUser = await User.getByEmail(`${email}`);
    res.render('login', {
        locals: {
            email: '',
            password: '',
            message: ''
        }
    });
}

async function logInUser(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);

    const theUser = await User.getByEmail(req.body.email);
    const correctPassword = theUser.checkPassword(req.body.password);
    if (correctPassword) {
        req.session.user = theUser.id;
        req.session.save(() => {
            res.redirect('/dashboard');
        });
    } else {
        res.render('login', {
            locals: {
                email: req.body.email,
                message: 'Password IS WRONG. GET OUT!'
            }
        });
    }
}

module.exports = {
    logIn,
    logInUser
};
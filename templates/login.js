
const User = require('../models/users');


//initial login page render,
async function logIn(req, res) {
    res.render('login', {
        locals: {
            email: '',
            password: ''
        }
    });
}

async function logInUser(req, res) {
    console.log(req.body.email);
    console.log(req.body.password);

    //this relies on `checkPassword` and `getByEmail` static function in user model
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
                message: 'error'
            }
        });
    }
}


module.exports = {
    logIn,
    logInUser
};
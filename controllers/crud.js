const User = require('../models/users');

async function addUser (req, res) {
    const addUser = await User.add(req.body);
    res.json(`The added user was given the id ${addUser}`);
}

async function retrieveOne(req, res) {
    const theUser = await User.getById(req.params.id);
    res.render('users', {
        locals: {
            oneUser: theUser
        }
    });
}

module.exports = {
    addUser,
    retrieveOne
};
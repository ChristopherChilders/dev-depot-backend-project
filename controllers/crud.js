const User = require('../models/users');

async function addUser (req, res) {
    const addUser = await User.add(req.body);
    res.json(`The added user was given the id ${addUser}`);
}

module.exports = {
    addUser
};
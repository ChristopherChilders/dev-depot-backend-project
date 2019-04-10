const User = require('../models/users');

async function addUser (req, res) {
    const addUser = await User.add(req.body);
    res.json(`The added user was given the id ${addUser}`);
}
async function deleteUser (req, res) {
    const { id } = req.params;
    await User.delete(id);
    console.log(`user with id: ${id} was deleted`);
}
async function retrieveAllUsers (req, res) {
    const allUsers = await User.getAll();
    console.log(allUsers);
    res.json(allUsers);
}

module.exports = {
    addUser,
    deleteUser,
    retrieveAllUsers
};
const User = require('../models/users');
const Framework = require('../models/frameworks');

async function goToDashboard(req, res) {
    res.render('dashboard')
}

module.exports = {
    goToDashboard
}
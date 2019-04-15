const User = require('../models/users');
async function goToRegistration(req, res) {
    res.render('registration')
} 

module.exports = {
    goToRegistration
}


const User = require('../models/users');
async function goToRegistration(req, res) {
    res.render('registration')
} 
module.exports = {
    goToRegistration
}
// module.exports = function (req, res) {
//     console.log(req.body.firstName);
//     User.add(req.body.firstName, req.body.lastName, req.body.email, req.body.password)
// };

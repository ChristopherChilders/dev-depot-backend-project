const User = require('../models/users');
const Framework = require('../models/frameworks');
const fs = require('fs');



async function goToFrameworks(req, res) {

    fs.readFile('templates/users.js', 'utf-8', (err, data) => {
        // console.log(data);
        res.render('frameworks',{
            locals: {
                code:data
            }
        });
    });
}

module.exports = {
    goToFrameworks
}
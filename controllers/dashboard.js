const User = require('../models/users');
const Framework = require('../models/frameworks');
const fs = require('fs');



async function goToDashboard(req, res) {
//readFile function grabs text from file path and hands it to res.render within it.
//Data is ${} into html div
    fs.readFile('templates/users.js', 'utf-8', (err, data) => {
        // console.log(data);
        res.render('dashboard',{
            locals: {
                code:data
            }
        });
    });

}


module.exports = {
    goToDashboard
}
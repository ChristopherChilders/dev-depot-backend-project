const User = require('../models/users');
const Framework = require('../models/frameworks');
const fs = require('fs');
const highlight = require('pygments').colorize;


async function goToFrameworks(req, res) {

    fs.readFile('templates/users.js', 'utf-8', (err, templatedata) => {
        // console.log(data);
        //put res.render ino
        highlight(templatedata,'js','html',(data)=>{
            res.render('frameworks',{
                locals: {
                    code:data
                }
            });
        })
    });
}

module.exports = {
    goToFrameworks
}
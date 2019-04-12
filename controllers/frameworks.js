const User = require('../models/users');
const Framework = require('../models/frameworks');
const fs = require('fs');
const highlight = require('pygments').colorize;


async function goToFrameworks(req, res) {
    data='template-here';
    res.render('frameworks',{
        locals: {
            code:data
        }
    });

};


async function getUsersTemplate(req, res) {

    fs.readFile('templates/users.js', 'utf-8', (err, templatedata) => {
        // console.log(data);
        //put res.render ino
        highlight(templatedata,'js','html',(data)=>{
            res.render('frameworks',{
                locals: {
                    code:data
                }
            });
        });
    });
};
async function getModelsTemplate(req, res) {

    fs.readFile('templates/models.js', 'utf-8', (err, templatedata) => {
        // console.log(data);
        //put res.render ino
        highlight(templatedata,'js','html',(data)=>{
            res.render('frameworks',{
                locals: {
                    code:data
                }
            });
        });
    });
};
async function getLoginTemplate(req, res) {

    fs.readFile('templates/login.js', 'utf-8', (err, templatedata) => {
        // console.log(data);
        //put res.render ino
        highlight(templatedata,'js','html',(data)=>{
            res.render('frameworks',{
                locals: {
                    code:data
                }
            });
        });
    });
};
async function getControllerTemplate(req, res) {

    fs.readFile('templates/controller.js', 'utf-8', (err, templatedata) => {
        // console.log(data);
        //put res.render ino
        highlight(templatedata,'js','html',(data)=>{
            res.render('frameworks',{
                locals: {
                    code:data
                }
            });
        });
    });
};

module.exports = {
    goToFrameworks,
    getUsersTemplate,
    getModelsTemplate,
    getLoginTemplate,
    getControllerTemplate
}
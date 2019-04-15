const Packages = require('../models/json_packages');


async function getAllPackages(req, res) {
    const jsonPackages = await Packages.getAll();
    res.json(jsonPackages);
    
}
async function displayAllPackages(req, res) {
    const jsonPackages = await Packages.getAll();
    res.render('json_packages', {
        locals: {
            name: jsonPackages[0].name,
            name2: jsonPackages[1].name,
            terminal: '',
            scripts: ''
            
        }
    })

}

async function getTdd(req, res) {
    const jsonPackages = await Packages.getById(1);
    res.render('json_packages', {
        locals: {
            name: jsonPackages.name,
            terminal: jsonPackages.installations,
            scripts: jsonPackages.scripts
            
        }
    })

}

async function getNodemon(req, res) {
    const jsonPackages = await Packages.getById(2);
    res.render('json_packages', {
        locals: {
            name: jsonPackages.name,
            terminal: jsonPackages.installations,
            scripts: jsonPackages.scripts
            
        }
    })

}

// name: jsonPackages.name,
// name2: jsonPackages.packages,
// terminal: jsonPackages.installations,
// scripts: jsonPackages.scripts
    


module.exports = {
displayAllPackages, 
getAllPackages,
getTdd,
getNodemon
} 
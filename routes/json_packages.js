
const express = require('express');
const Router = express.Router;
const packageRouter = Router();
// const {getTdd} = require('../controllers/json_packages');
const {
    displayAllPackages,
    getTdd,
    getNodemon
} = require('../controllers/json_packages');

packageRouter.get('/', displayAllPackages);
// packageRouter.get('/', getAllPackages);
packageRouter.get('/tdd', getTdd);

packageRouter.get('/nodemon', getNodemon)




module.exports = packageRouter;
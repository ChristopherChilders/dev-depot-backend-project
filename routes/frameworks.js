const express = require('express');
const Router = express.Router;
const frameworksRouter = Router();
const {goToFrameworks} = require('../controllers/frameworks');

frameworksRouter.get('/', goToFrameworks);


module.exports = frameworksRouter;
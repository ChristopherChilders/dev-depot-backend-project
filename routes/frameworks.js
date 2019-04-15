const express = require('express');
const Router = express.Router;
const frameworksRouter = Router();
const { 
    goToFrameworks,
    getUsersTemplate,
    getModelsTemplate,
    getLoginTemplate,
    getControllerTemplate,
    getConnjsTemplate,
    getDotEnvTemplate,
    getGitIgnoreTemplate
} = require('../controllers/frameworks');

frameworksRouter.get('/', goToFrameworks);
frameworksRouter.get('/users', getUsersTemplate);
frameworksRouter.get('/models', getModelsTemplate);
frameworksRouter.get('/login', getLoginTemplate);
frameworksRouter.get('/controller', getControllerTemplate);
frameworksRouter.get('/conn', getConnjsTemplate);
frameworksRouter.get('/env', getDotEnvTemplate);
frameworksRouter.get('/gitignore', getGitIgnoreTemplate);

module.exports = frameworksRouter;
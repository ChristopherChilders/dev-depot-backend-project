const express = require('express');
const Router = express.Router;
const devDepotRouter = Router();

const {
    addUser,
    retrieveOne
} = require('../controllers/users');

// devDepotRouter.post('/user', addUser);
devDepotRouter.get('/', retrieveOne);

module.exports = devDepotRouter;
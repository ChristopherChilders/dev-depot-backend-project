const express = require('express');
const Router = express.Router;
const devDepotRouter = Router();

const {
    addUser
} = require('../controllers/crud');

devDepotRouter.post('/user', addUser);

module.exports = devDepotRouter;
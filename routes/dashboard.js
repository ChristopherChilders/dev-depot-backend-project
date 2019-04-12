
const express = require('express');
const Router = express.Router;
const dashboardRouter = Router();
const {goToDashboard} = require('../controllers/dashboard');

dashboardRouter.get('/', goToDashboard);


module.exports = dashboardRouter;
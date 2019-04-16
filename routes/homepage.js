const express = require('express');
const Router = express.Router;
const homepageRouter = Router();
const {goToHomepage} = require('../controllers/homepage');

homepageRouter.get('/', goToHomepage);




module.exports = homepageRouter;
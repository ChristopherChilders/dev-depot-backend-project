const express = require('express');

const Router = express.Router;
//name your routes to controller you are directing requests to
const userRoutes = Router();

const {

    create,
    retrieveAll,
    retrieveOne,
    deleteOne,

} = require('../controllers/users');

userRoutes.get('/addUser', create);
userRoutes.get(`/${userID}`,retrieveOne)
userRoutes.post('/', retrieveAll);
userRoutes.post(`/remove${userID}`, deleteOne);

module.exports = userRoutes;
//Require a model with functions for your controller to use. Example we use here is our Users model template.
const User = require('../models/users');

async function create(req, res) {
   const theUserId = await User.add(req.body);
   res.render('users', {
       locals: {
           message: `Created user with user id ${theUserId}`
       }
   });
}

async function retrieveAll(req, res) {
   const usersArray = await User.getAll();
   res.render('users', {
       locals: {
           users: usersArray
       }
   });
}

async function retrieveOne(req, res) {
   const theUser = await User.getById(req.params.id);
   res.render('users', {
       locals: {
           oneUser: theUser
       }
   });
}


async function deleteOne(req, res) {
   const theUser = await User.delete(req.params.id);
   res.render('users', {
       locals: {
           message: `Deleted ${req.params.id}`
       }
   });
}

// export every function created in controller
module.exports = {
   create,
   retrieveAll,
   retrieveOne,
   deleteOne,
};
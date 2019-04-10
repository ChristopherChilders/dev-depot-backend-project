// Bring in the database connection.
const db = require('./conn');

// declare the class
class Models {
    static getAll() {
        //`model` keyword should be the database being referenced
        return db.any(`select * from model`);
    }
    }


// export the class
module.exports = Models;
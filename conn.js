const pgp = require('pg-promise')({
    query: e => {
        console.log('QUERY: ', e.query);
    }  
});

const options = {
    host: localhost,
    database: devdepot-app
};

const db = pgp(options);
module.exports = db;
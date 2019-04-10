// Bring in the database connection.
const db = require('./conn');

// declare the class
class Models {

    // constructor needs to be customized to your own database columns for however many exist
    constructor(id, database_column1, database_column2, database_column3) {

        this.id = id;
        this.datbaseColumn1 = database_column1;
        this.databaseColumn2 = database_column2;
        this.databaseColumn3 = database_column3;
    }
    //deletes the specific id in selected database
    static delete(id) {
        return db.result('delete from users where id=$1', [id]);
    }

    static add(data) {
        return db.one(`
            insert into database 
                (database_column1, database_column2, database_column3)
            values 
                ($1, $2, $3)
            returning id, first_name, last_name
        `, [data.database_column1, data.database_column2, data.database_column2, data.database_column2])
        .then((data) => {
            console.log(data);
            return data.id;
        })
    }

    static getById(id) {
        return db.one(`select * from database where id=${id}`)
                    .then((data) => {
                        const dataInstance = new Models(data.id, 
                                                      data.first_name,
                                                      data.last_name,
                                                      data.username,
                                                      data.password
                                                     );
                        return dataInstance;
                    })
                    .catch(() => {
                        return null;
                    })
    }

    //`model` keyword should be the database being referenced
    static getAll() {
        return db.any(`select * from models`)
                .then((arrayOfModels => {
                    return arrayOfModels.map((Data) => {
                        const aModel = new Model(
                                                Data.id, 
                                                Data.first_name, 
                                                Data.last_name, 
                                                Data.email, 
                                                Data.password);
                        return aModel;
                    })
                })
    }
    save() {
        //used to add into the current database
        //`databaseName` keyword to be replaced by database name
        // `name` keywords to be replaced by database values 
        return db.result(`            
        update databaseName set 
            first_name='${this.firstName}',
            last_name='${this.lastName}',
            username='${this.username}',
            password='${this.password}'
        where id=${this.id}
        `);
    }
    }


// export the class
module.exports = Models;
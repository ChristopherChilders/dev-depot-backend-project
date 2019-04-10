const db = require('./conn');
const bcrypt = require('bcryptjs');

class Users {
    constructor(id, first_name, last_name, email, username, password) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.username = username;
        this.password =password;
    }
    static add(userData){
        return db.one(`
        insert into users
        (first_name, last_name, email, username, password)
        values
        ($1, $2, $3, $4, $5)`[first_name, last_name, email, username, password])
        .then((data) => {
            return data.id;
        })
    }
    static delete(id){
        return db.result('delete from users where id=$1', [id]);
    }
    static getAll() {
        
    }
    static getById(id){
        return db.one(`select * from users where id=${id}`)
        .then((userData) => {
            const userInstance = new User(
                userData.id,
                userData.first_name,
                userData.last_name,
                userData.email,
                userData.username,
                userData.password
            );
        })
        .catch(()=>{
            return null;
        })
    }
}
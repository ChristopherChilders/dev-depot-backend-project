const db = require('./conn');
const bcrypt = require('bcryptjs');

// Need a User class.
// Classes should start with an uppercase letter
class User {

    constructor(id, first_name, last_name, username, password) {

        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.userName = username;
        this.password = password;
    }

    static delete(id) {
        return db.result('delete from users where id=$1', [id]);
    }

    static add(userData) {
        return db.one(`
            insert into users 
                (first_name, last_name, email, password)
            values 
                ($1, $2, $3, $4)
            returning id, first_name, last_name
        `, [userData.first_name, userData.last_name, userData.username, userData.password])
        .then((data) => {
            console.log(data);
            return data.id;
        })
    }

    static getById(id) {
        return db.one(`select * from users where id=${id}`)
                    .then((userData) => {
                        const userInstance = new User(userData.id, 
                                                      userData.first_name,
                                                      userData.last_name,
                                                      userData.username,
                                                      userData.password
                                                     );
                        return userInstance;
                    })
                    .catch(() => {
                        return null;
                    })
    }

    static getAll() {
        return db.any(`select * from users`)
                .then((arrayOfUsers) => {
                    return arrayOfUsers.map((userData) => {
                        const aUser = new User(
                                                userData.id, 
                                                userData.first_name, 
                                                userData.last_name, 
                                                userData.email, 
                                                userData.password);
                        return aUser;
                    })
                })
    }
    save() {
        //used to add new users
        return db.result(`            
        update users set 
            first_name='${this.firstName}',
            last_name='${this.lastName}',
            username='${this.username}',
            password='${this.password}'
        where id=${this.id}
        `);
    }

    setPassword(newPassword) {
        //we use bcrypt but feel free to use your own encryption module
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }

    static getByUsername(username) {
        return db.one(`select * from users where email=$1`, [username])
                .then(userData => {
                    const aUser = new User(
                        userData.id, 
                        userData.first_name, 
                        userData.last_name, 
                        userData.email, 
                        userData.password);
                    return aUser;
                })
    }

    checkPassword(aPassword) {
        // const isCorrect = bcrypt.compareSync(aPassword, this.password);
        return bcrypt.compareSync(aPassword, this.password);
    }
}
module.exports = User;
const db = require('./conn');
const bcrypt = require('bcryptjs');
const Favorite = require('./favorites');

class User {
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
        return db.any(`select * from users`)
        .then((arrayOfUsers) => {
            return arrayOfUsers.map((userData) => {
                const aUser = new User (
                    userData.id,
                    userData.first_name,
                    userData.last_name,
                    userData.email,
                    userData.password
                );
                return aUser;
            })
        })
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
            return userInstance;
        })
        .catch(()=>{
            return null;
        })
    }
    static getByEmail(email) {
        return db.one(`select * from users where email=$1`, [email])
            .then(userData => {
                const aUser = new User(
                    userData.id,
                    userData.first_name,
                    userData.last_name,
                    userData.email,
                    userData.username,
                    userData.password
                );
                return aUser;
            });
    }
    save() {
        return db.result(`
        update users set
        first_name='${this.firstName}',
        last_name='${this.lastName}',
        email='${this.email}',
        username='${this.username}',
        password='${this.password}'`)
    }
    setPassword(newPassword) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }
    checkPassword(aPassword) {
        return bcrypt.compareSync(aPassword, this.password);
    }
    getFavorites(){
        return db.any(`select * from favorites where user_id=${this.id}`)
                .then(favorites =>{
                    let bunchOfFavorites = favorites.map( oneFavorite =>{
                        let oldF = new Favorite(
                            oneFavorite.id,
                            oneFavorite.user_id,
                            oneFavorite.framework_id,
                            oneFavorite.method
                        );
                        return oldF;
                    }
                    )
                    return bunchOfFavorites;
                })
    }
}

module.exports = User;
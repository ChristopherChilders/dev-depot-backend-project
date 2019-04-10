const db = require('./conn');

class Framework {
    constructor(id, name, code) {
        this.id = id;
        this.name = name;
        this.code = code;
    }
    static deleteByName (name) {
        return db.result(`delete from frameworks where name=$1`, [name]);
    }
    static getAll() {
        return db.any(`select * from frameworks`)
            .then((result) => {
                return result;
            });
    }
    static getById(id) {
        return db.one(`select * from frameworks where id=$1`, [id])
            .then((frameData) => {
                const frameInstance = new Framework(
                    frameData.id,
                    frameData.name,
                    frameData.code
                );
                return frameInstance
            });
    }
    static addNewFrame(name, code) {
        return db.one(`
        insert into frameworks
            (name, code)
        values
            ($1, $2)
        returning id, name, code`,
        [name, code])
        .then((data) => {
            return data;
        });
    }
};

module.exports = Framework;
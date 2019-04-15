const db = require('./conn');

class Package {
    constructor(id, name, packages, installations, scripts) {
        this.id = id;
        this.name = name;
        this.packages = packages;
        this.installations = installations;
        this.scripts = scripts;
    }
    static deleteByName (name) {
        return db.result(`delete from json_packages where name=$1`, [name]);
    }
    static getAll() {
        return db.any(`select * from json_packages`)
            .then((result) => {
                return result;
            });
    }
    static getById(id) {
        return db.one(`select * from json_packages where id=$1`, [id])
            .then((packageData) => {
                const packageInstance = new Package(
                    packageData.id,
                    packageData.name,
                    packageData.packages,
                    packageData.installations,
                    packageData.scripts
                );
                return packageInstance
            });
    }

    static addNewPackage(name, packages, installations, scripts) {
        return db.one(`
        insert into json_packages
            (name, packages, installations, scripts)
        values
            ($1, $2, $3, $4)
        returning id, name, packages, installations, scripts`,
        [name, packages, installations, scripts])
        .then((data) => {
            return data;
        });
    }
    save() {
        return db.result(`
        update json_packages set 
            name='${this.name}',
            packages='${this.packages}',
            installations=${this.installations}',
            scripts=${this.scripts}
        where id=${this.id}`);
    }
};

module.exports = Package;

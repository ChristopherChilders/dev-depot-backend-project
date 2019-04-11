const db = require('./conn');

class Favorite {
    static getAll () {
        db.any(`select * from favorites`)
        .then((arrayOfFavorites) => {
            return arrayOfFavorites.map((favoriteData) => {
                const aFavorite = new Favorite (
                    favoriteData.id,
                    favoriteData.user_id,
                    favoriteData.framework_id,
                    favoriteData.method_id
                );
                return aFavorite;
            })
        })
    }
    static getById (id) {
        db.one(`select * from favorites where id=${id}`)
        .then((favoriteData) => {
            const favoriteInstance = new Favorite (
                favoriteData.id,
                favoriteData.user_id,
                favoriteData.framework_id,
                favoriteData.method_id
            );
            return favoriteInstance;
        })
        .catch(() => {
            return null;
        })
    }
}

module.exports = Favorite;
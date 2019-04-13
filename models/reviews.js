const db = reuqire('./conn');
class Review {
    constructor(id, user_id, topic, content) {
        this.id = id;
        this.userId = user_id;
        this.topic = topic;
        this.content = content;
    }
    
    static getAll(){
        return db.any(`select * from reviews`)
        .then((arrayOfReviews)=> {
            return arrayOfReviews.map((reviewData) => {
                const aReviews = new Reviews (
                    reviewData.id,
                    reviewData.userId,
                    reviewData.topic,
                    reviewData.content
                );
                return aReviews;
            })
        })
    }
    static getById(id) {
        return db.one(`select * from reviews where id=${id}`)
        .then((reviewData) =>{
            const methodInstance = new Reviews (
                reviewData.id,
                reviewData.userId,
                reviewData.topic,
                reviewData.content
            );
            return reviewInstance;
        })
        .catch(() => {
            return null;
        })
    }
}

module.exports = Review;
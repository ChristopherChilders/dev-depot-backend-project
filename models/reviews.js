const db = require('./conn');
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
                const aReviews = new Review (
                    reviewData.id,
                    reviewData.userId,
                    reviewData.topic,
                    reviewData.content
                );
                return aReviews;
            });
        });
    };
    
    static getReviews(){
        return db.any(`select content from reviews`)
        // .then((reviewsOnly)=> {
        //     return reviewsOnly.map((reviewData) =>{
        //         const aReviews = new Review (
        //             reviewData.id,
        //             reviewData.userId,
        //             reviewData.topic,
        //             reviewData.content
        //         );
        //         // return aReviews;
        //     });
        // });
            .then((data)=>{
                // console.log(data)
                let contentReviews = [];
                // for (let i=0; i<data.length; i+=1) {
                //     contentReviews.push(data[i].content)
                // }
                // return contentReviews;
                data.forEach(reviews=>{
                    contentReviews.push(reviews.content);
                })
                // console.log('look here', contentReviews)
                return contentReviews;
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
        });
    };
}

module.exports = Review;
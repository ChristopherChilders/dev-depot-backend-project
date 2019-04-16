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
        return db.any(`select content,topic from reviews`)
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
                
                let contentReviews = [];
                
                // for (let i=0; i<data.length; i+=1) {
                //     contentReviews.push(data[i].content)
                // }
                // return contentReviews;
                data.forEach(reviews=>{
                    contentReviews.push(reviews.content);
                })
                return contentReviews;
            })
    }

    static splitReviews(content){
        console.log('=========================')
        var currentIndex = content.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = content[currentIndex];
        content[currentIndex] = content[randomIndex];
        content[randomIndex] = temporaryValue;
        }
        
        console.log(content);
        return content;
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
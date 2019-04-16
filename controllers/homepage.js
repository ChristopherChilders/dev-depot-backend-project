const User = require('../models/users');
const Review = require('../models/reviews');



async function goToHomepage (req,res) {
    const reviews = await Review.getReviews();


    // console.log(reviews)
    res.render('homepage', {
        locals: {
            reviewTopic1: reviews[0],
            reviewContent1: reviews[1],
            reviewTopic2: reviews[2],
            reviewContent2: reviews[3],
            reviewTopic3: reviews[4],
            reviewContent3: reviews[5],
            reviewTopic4: reviews[6],
            reviewContent4: reviews[7],
        }
    });
}


module.exports = {
    goToHomepage
}
const User = require('../models/users');
const Review = require('../models/reviews');



async function goToHomepage (req,res) {
    const reviews = await Review.getReviews();
    const randomReviews = await Review.splitReviews(reviews);

    // console.log(reviews)
    res.render('homepage', {
        locals: {
            review1: randomReviews[0],
            review2: randomReviews[1],
            review3: randomReviews[2],
            review4: randomReviews[3]
        }
    });
}


module.exports = {
    goToHomepage
}
const User = require('../models/users');
const Review = require('../models/reviews');



async function goToHomepage (req,res) {
    const reviews = await Review.getReviews();
    console.log(reviews)
    res.render('homepage', {
        locals: {
            reviewBoard: reviews
        }
    });
}


module.exports = {
    goToHomepage
}
var express = require('express');
var router = express.Router();
const Review = require('../models/review');



/* GET home page. */
router.get('/', (req, res) => {
  Review.find({}, (err, reviews) => {
    if(err) {
      console.log(err);
    }

    res.render('reviews/index', {
      reviews: reviews
    });
  });
});

router.get('/reviews/new', (req, res) => {
  res.render('reviews/new');
});

router.post('/reviews', (req, res) => {
  // 2
  const review = new Review(req.body);

  // 3
  review.save(function(err, review) {
    if (err) {
      console.log(err);
    }

    // 4
    return res.redirect('/');
  });
});
router.get('/reviews/:id', (req,res) => {
  Review.findById(req.params.id, (err, review) => {
    if(err) {
      console.log(err);
    }

    res.render('reviews/show', {
      review: review
    });
  });
});
module.exports = router;

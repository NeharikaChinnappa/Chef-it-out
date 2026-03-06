const express = require("express");
const router = express.Router();

const { reviews } = require("../data");

router.post("/", (req, res) => {

 const { restaurantId, rating, comment, favoriteFood } = req.body;

 const review = {
  restaurantId,
  rating,
  comment,
  favoriteFood
 };

 reviews.push(review);

 res.json({
  message: "Review added"
 });

});

router.get("/:restaurantId", (req, res) => {

 const restaurantReviews = reviews.filter(
  r => r.restaurantId === req.params.restaurantId
 );

 res.json(restaurantReviews);

});

module.exports = router;
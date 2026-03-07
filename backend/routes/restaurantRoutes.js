const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");
const auth = require("../middleware/authMiddleware");
router.get("/", async (req, res) => {

  const restaurants = await Restaurant.find();

  res.json(restaurants);

});
router.post("/", auth, async (req, res) => {

  if (req.user.role !== "owner") {
    return res.status(403).json({ message: "Only owners can add cafes" });
  }

  const { name } = req.body;

  const newRestaurant = new Restaurant({ name });

  await newRestaurant.save();

  res.json(newRestaurant);

});

/*router.post("/update-status/:id", auth, async (req, res) => {

  if (req.user.role !== "owner") {
    return res.status(403).json({ message: "Only owners allowed" });
  }

  const { crowdLevel } = req.body;

  const restaurant = await Restaurant.findById(req.params.id);

  restaurant.crowdLevel = crowdLevel;

  await restaurant.save();

  res.json(restaurant);

});*/

module.exports = router;
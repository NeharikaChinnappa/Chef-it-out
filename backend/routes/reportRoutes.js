const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurant");
const auth = require("../middleware/authMiddleware");

router.post("/:id", auth, async (req, res) => {
  if (req.user.role !== "student") {
    return res.status(403).json({ message: "Only students can report" });
  }

  const restaurant = await Restaurant.findById(req.params.id);

  restaurant.reportCount += 1;
  if (restaurant.reportCount >= 5) {

    restaurant.crowdLevel = "Busy";

    restaurant.reportCount = 0;

  }

  await restaurant.save();

  res.json({ message: "Report submitted" });

});

module.exports = router;
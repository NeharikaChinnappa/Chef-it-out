const express = require("express");
const router = express.Router();

const { reports, restaurants } = require("../data");

router.post("/", (req, res) => {

 const { restaurantId, status } = req.body;

 const report = {
  restaurantId,
  status,
  timestamp: Date.now()
 };

 reports.push(report);

 const fullReports = reports.filter(
  r => r.restaurantId === restaurantId && r.status === "full"
 );

 if (fullReports.length >= 5) {

  const restaurant = restaurants.find(r => r.id === restaurantId);

  if (restaurant) {
   restaurant.status = "full";
  }

 }

 res.json({
  message: "Report submitted"
 });

});

module.exports = router;
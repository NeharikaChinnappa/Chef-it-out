const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  name: String,

  crowdLevel: {
    type: String,
    enum: ["Free", "Moderate", "Busy"],
    default: "Free"
  },
  foodItems: [
    {
      name: String,
      available: Boolean
    }
  ],

  reportCount: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
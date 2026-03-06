const express = require("express");
const cors = require("cors");

const restaurantRoutes = require("./routes/restaurantRoutes");
const reportRoutes = require("./routes/reportRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/restaurants", restaurantRoutes);
app.use("/reports", reportRoutes);
app.use("/reviews", reviewRoutes);

app.listen(5000, () => {
 console.log("Server running on port 5000");
});
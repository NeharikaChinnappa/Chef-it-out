const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const reportRoutes = require("./routes/reportRoutes");
const uploadProofRoutes = require("./routes/uploadProof");

app.use("/auth", authRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/reports", reportRoutes);
app.use("/upload-proof", uploadProofRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
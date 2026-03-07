const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/authMiddleware");

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }

});

const upload = multer({ storage });

router.post("/", auth, upload.single("image"), (req, res) => {

  if (req.user.role !== "owner") {
    return res.status(403).json({ message: "Only owners allowed" });
  }

  res.json({
    message: "Proof uploaded",
    file: req.file.filename
  });

});

module.exports = router;
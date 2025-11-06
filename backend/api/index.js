const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend deployed successfully!" });
});

// 👇 No app.listen here!
module.exports = app;

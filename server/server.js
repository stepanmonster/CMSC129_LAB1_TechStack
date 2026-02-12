const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db"); // 1. Import the connection function (adjust path if it's in a folder)

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Call the connection
connectDB(); 

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is running..."));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

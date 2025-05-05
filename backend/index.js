const express = require('express');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const port = 4000;
const UserRoute = require("./routes/dataRoute");

app.use(
  cors({
    origin: "https://react-portfolio-98tk.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended
  : true }));

app.use("/api/user", UserRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

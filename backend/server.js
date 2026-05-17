const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const candidateRoutes = require("./routes/candidateRoutes");

dotenv.config();

const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api", candidateRoutes);


// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });


// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
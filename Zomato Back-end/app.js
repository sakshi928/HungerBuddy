const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AppRoutes = require("./routes/AppRoutes");

const app = express();
const PORT = 3030;
const MONGODB_URI = `mongodb://127.0.0.1:27017`;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use("/api", AppRoutes);

mongoose.connect(MONGODB_URI).then(() => {
    console.log("database connected successfully.");
    app.listen(PORT, () => {
      console.log("Project is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
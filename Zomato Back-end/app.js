const mongoose = require("mongoose");
const cors = require("cors");
const express = require('express');
const AppRoutes = require("./routes/AppRoutes");

const app = express();
<<<<<<< HEAD
const MONGODB_URI = process.env.MONGODB_URI; // Use environment variable for MongoDB URI
const PORT = process.env.PORT || 3030; // Use environment variable for port, fallback to 3030 if not defined
=======
const PORT = 3030;
const MONGODB_URI = `mongodb://localhost:27017`;
>>>>>>> bb2cbd595fea2edebe8d733667792dd046feb1db

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define your serverless functions
module.exports = async (req, res) => {
  if (req.url.startsWith('/api')) {
    // If the URL starts with '/api', handle API routes
    await handleApiRoutes(req, res);
  } else {
    // Otherwise, return a 404 Not Found
    res.status(404).send('Not Found');
  }
};

<<<<<<< HEAD
async function handleApiRoutes(req, res) {
  // Remove '/api' prefix from URL to match AppRoutes
  const url = req.url.replace(/^\/api/, '');
  
  // Create a new request object to mimic Express.js req
  const request = {
    ...req,
    url,
    body: req.body || {},
    params: {},
    query: req.query || {},
    method: req.method.toUpperCase()
  };
  
  // Create a new response object to mimic Express.js res
  const response = {
    ...res,
    status(code) {
      response.statusCode = code;
      return response;
    },
    send(data) {
      response.body = data;
      return response;
    },
    json(data) {
      response.body = JSON.stringify(data);
      return response;
    }
  };

  // Pass the request and response objects to your AppRoutes
  await AppRoutes(request, response);
}

// Connect to MongoDB and start server
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully."))
  .catch(error => console.error("Error connecting to database:", error));

// No need to start server, Vercel will handle it
=======
mongoose.connect(MONGODB_URI).then(() => {
    console.log("database connected successfully.");
    app.listen(PORT, () => {
      console.log("Project is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
>>>>>>> bb2cbd595fea2edebe8d733667792dd046feb1db

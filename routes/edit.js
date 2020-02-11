// Router for handling requests to save and get questions

const express = require('express');

const router = express.Router();

// Fetch Mongoose models
const QuestionData = require('../mongoose-models/project');

const requireLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.status(400).send("Not logged in");
  } else {
    next();
  }
}

// Handling new question requests
router.post("/new", requireLogin, (req, res) => {
  const { title, desc } = req.body;

  // Check so all data exists
  if ( title && desc ) {
    res.status(200).send("Received project!");
  }
})

module.exports = router;

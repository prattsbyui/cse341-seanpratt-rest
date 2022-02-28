const express = require('express');

const feedController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', feedController.getInfo);

// POST /feed/post
// router.post('/post', feedController.createPost);

module.exports = router;
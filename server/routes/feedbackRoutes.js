const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const feedbackController = require('../controllers/feedbackController');

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '')}`),
});

const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), feedbackController.submitFeedback);
router.get('/', feedbackController.getAllFeedback);

module.exports = router;

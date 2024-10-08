const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

// Add this line for the signup route
router.post('/signup', authController.signup);

// Routes
router.post('/login', authController.login);
router.post('/logout', protect, authController.logout);

module.exports = router;

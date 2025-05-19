const express = require('express');
const router = express.Router();

// Controller (update the path if needed)
const { registerVolunteer } = require('../controllers/volunteerController');

// Define route
router.post('/register', registerVolunteer);

// ✅ Export the router
module.exports = router;

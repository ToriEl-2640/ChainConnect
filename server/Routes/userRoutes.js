const express = require('express');
const router = express.Router();
const { socialLogin, createProfile, getProfile } = require('../controllers/userController');

router.post('/login', socialLogin);
router.post('/profile', createProfile);
router.get('/:userId', getProfile);

module.exports = router;

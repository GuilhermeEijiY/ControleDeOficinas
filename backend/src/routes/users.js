const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const userController = require('../controllers/userController');


router.get('/', authenticateToken, authorizeRoles('admin'), userController.listUsers);
router.get('/me', authenticateToken, userController.getProfile);


module.exports = router;
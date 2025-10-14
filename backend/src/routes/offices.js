const express = require('express');
const router = express.Router();
const officeController = require('../controllers/officeController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');


router.post('/', authenticateToken, authorizeRoles('admin', 'professor'), officeController.createOffice);
router.get('/', authenticateToken, officeController.listOffices);
router.get('/:id', authenticateToken, officeController.getOffice);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), officeController.deleteOffice);


module.exports = router;
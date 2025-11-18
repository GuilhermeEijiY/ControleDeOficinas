const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');


router.post('/', authenticateToken, authorizeRoles('aluno'), enrollmentController.enroll);
router.get('/office/:officeId', authenticateToken, authorizeRoles('admin', 'professor', 'tutor'), enrollmentController.listEnrollmentsByOffice);
router.get('/me', authenticateToken, enrollmentController.listUserEnrollments);


module.exports = router;
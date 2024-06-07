const express = require('express');
const documentController = require('../controllers/documentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/documents', authMiddleware, documentController.uploadDocument);
router.get('/documents', authMiddleware, documentController.getDocuments);

module.exports = router;
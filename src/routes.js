const express = require('express');
const router = express.Router();
const NoteController = require('./controllers/NoteController');

router.get('/ping', NoteController.ping);

module.exports = router;
const express = require('express');
const router = express.Router();
const beansController = require('./../controllers/beansController');

router.post('/beans', beansController.create);
router.get('/', beansController.index);

module.exports = router;
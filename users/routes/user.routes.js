const router = require('express').Router();
const users = require('../controllers/users.controllers.js');
router.get('/users', users.getAll);

module.exports = router;

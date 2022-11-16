const router = require('express').Router();
const users = require('../controllers/users.controllers.js');
router.get('/users', users.getAll);
router.get('/tes', (req, res) => {
  res.send('cek');
});

module.exports = router;

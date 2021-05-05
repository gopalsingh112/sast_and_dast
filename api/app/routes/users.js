const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
  res.send('Registration Page');
});

router.get('/authenticate', (res, req, next) => {
  res.send('Authenticate');
});

router.get('/profile', (res, req, next) => {
  res.send('Profile');
});


module.exports = router;
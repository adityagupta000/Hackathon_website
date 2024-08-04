const express = require('express');
const router = express.Router();

// Protected route example
router.get('/data', (req, res) => {
  res.json({ message: 'This is protected data', user: req.user });
});

module.exports = router;

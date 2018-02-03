const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('prodict smoke test');
});

module.export = router;
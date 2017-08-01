var express = require('express');
var router = express.Router();
var wineRoutes = require('./api/wine-entries');
var userRoutes = require('./api/user-entries');

/* GET home page. */
router.use('/api', wineRoutes);
router.use('/api', userRoutes);

module.exports = router;

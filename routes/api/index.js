const router = require('express').Router();
const cattleRoutes = require('./cattleRoutes');

router.use('/drivers', cattleRoutes);

module.exports = router;
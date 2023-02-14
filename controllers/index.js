const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const cattleRoutes = require('./api/cattle-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', cattleRoutes);

module.exports = router;

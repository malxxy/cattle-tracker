const router = require('express').Router();

const apiRoutes = require('./api'); // require all routes within api folder
const homeRoutes = require('./home-routes.js'); // require home-routes js file

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;

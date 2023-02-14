const router = require('express').Router();

const userRoutes = require('./user-routes');
// const postRoutes = require('./post-routes');
const cattleRoutes = require('./addCattle-routes');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
router.use('/addCattle', cattleRoutes);

module.exports = router;

const router = require('express').Router();

const userRoutes = require('./user-routes');
// const postRoutes = require('./post-routes');
const cattleRoutes = require('./cattle-routes');

router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
router.use('/cattle', cattleRoutes);

module.exports = router;

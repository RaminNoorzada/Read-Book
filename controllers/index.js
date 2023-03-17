const router = require('express').Router();

const userRoutes = require('./api');
const postRoutes = require('./home-routes.js');
const commentRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;

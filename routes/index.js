const router = require("express").Router();

const exerciseRoutes = require('./exerciseRoutes');
const statsRoutes = require('./statsRoutes');
const apiRoutes = require('./api/workouts');

router.use('/', exerciseRoutes);
router.use('/', statsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
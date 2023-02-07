// Cattle Routes
const router = require('express').Router();
const { Cattle, User } = require('../../models');

// GET all livestock and user data
router.get('/', async (req, res) => {
  try {
    // need to double check accuracy, this is skeleton code
    const cattleData = await Cattle.findAll({
        include: [{ model: Cattle }, { model: User }],
    });
    res.status(200).json(cattleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one cattle
router.get('/:id', async (req, res) => {
  try {
    // need to double check
    const cattleData = await cattle.findByPk(req.params.id, {
        include: [{ model: Cattle }, { model: User }],
    });

    if (!cattleData) {
      res.status(404).json({ message: 'No cattle found with this id!' });
      return;
    }

    res.status(200).json(driverData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
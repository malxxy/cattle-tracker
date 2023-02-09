const router = require('express').Router();
const { cattle } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newCattle = await cattle.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newCattle);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const cattleData = await cattle.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!cattleData) {
      res.status(404).json({ message: 'No live-stock found with this id!' });
      return;
    }

    res.status(200).json(cattleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

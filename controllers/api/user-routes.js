const router = require('express').Router();
const { User } = require('../../models');
const { Ranch } = require('../../models');
const _ = require('lodash');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const lowerName = req.body.username;
    const capitalName = _.capitalize(lowerName);
    console.log("User's name capitalized", capitalName);
    await User.create({
      name: capitalName,
      email: req.body.email,
      password: req.body.password,
    });

    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
      include: [
        {
          model: Ranch
        },
      ],
    });

    console.log(dbUserData.id)

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId  = dbUserData.id;
      req.session.name = dbUserData.name;
      req.session.ranchNum = dbUserData.ranchNum;
      req.session.ranch = dbUserData.ranch;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
      include: [
        {
          model: Ranch
        },
      ],
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    console.log(dbUserData)
    
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId  = dbUserData.id;
      req.session.name = dbUserData.name;
      req.session.ranchNum = dbUserData.ranchNum;
      req.session.ranch = dbUserData.ranch;
      res
        .status(200)
        .json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

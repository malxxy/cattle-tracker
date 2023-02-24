const router = require('express').Router();
const { User } = require('../../models');
const { Ranch } = require('../../models');

// CREATE new user (post route)
router.post('/', async (req, res) => {
  try {
    
    const newRanchData = await Ranch.create({
      name: req.body.ranchName,
    });

    const dbRanchData = await Ranch.findOne({
      where: {
        name: req.body.ranchName,
      }
    })

    const newUserData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      ranchNum: dbRanchData.dataValues.id
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

    req.session.save(() => { // save user sessionn to keep them logged in
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

// Route to login user (post route)
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

    if (!dbUserData) { // if user email does not match database, display error message to user
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) { // If the password is not valid, show message error
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

// Route to Logout (post route)
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end(); // end user session to log out and make data inaccessible until they log in again
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

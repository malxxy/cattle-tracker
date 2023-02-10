const router = require('express').Router();

// GET homepage
router.get('/', async (req, res) => {
  console.log(req.session.loggedIn)
    try {
      res.render('homepage', {
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

console.log(posts)
router.get('/login', async (req, res) => {
  {posts,user_id,cattledata}; 
  //catch (err) {
    //console.log(err);
    //res.status(500).json(err);
  //}


  // GET Dashboard Page
router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  // GET Cattle Page
  router.get('/cattle', async (req, res) => {
    try {
      res.render('cattle', {
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;

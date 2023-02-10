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
router.get("/cattle", async (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    try {
      const {username, user_id, loggedIn, ranchNum} = req.session
      const cattleData = await Cattle.findAll({
        where: {
          ranchNum: ranchNum
        }
      })
      console.log(cattleData)

      const cattleDatapretty = cattleData.map((post) =>
      post.get({ plain: true })
      );

      res.render("Cattle", {
        cattleDatapretty,
        loggedIn: req.session.loggedIn,
      });
      console.log(cattleDatapretty)

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

});
module.exports = router;

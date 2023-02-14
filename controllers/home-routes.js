const router = require("express").Router();
const { User, Cattle } = require('../models');

// GET homepage
router.get("/", async (req, res) => {
  console.log(req.session.loggedIn);
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
      userid: req.session.userId,
      name: req.session.name,
      ranchNum: req.session.ranchNum,
      ranch: req.session.ranch
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// console.log(posts)
// router.get('/login', async (req, res) => {
//   {posts,user_id,cattledata};
//   //catch (err) {
//     //console.log(err);
//     //res.status(500).json(err);
//   //}

// GET Dashboard Page
router.get("/dashboard", async (req, res) => {
  try {
    console.log(req.session.userId)
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      name: req.session.name,
      ranchNum: req.session.ranchNum,
      ranch: req.session.ranch
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET Cattle Page
router.get("/addCattle", async (req, res) => {
    // if (!req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }

    try {
      console.log(req.session.userId)
      res.render("addCattle", {
        loggedIn: req.session.loggedIn,
        userId: req.session.userId,
        name: req.session.name,
        ranchNum: req.session.ranchNum,
        ranch: req.session.ranch
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

    // try {
    //   const {username, user_id, loggedIn, ranchNum} = req.session
    //   const cattleData = await Cattle.findAll({
    //     where: {
    //       ranchNum: ranchNum
    //     }
    //   })
    //   console.log(cattleData)

    //   const cattleDatapretty = cattleData.map((post) =>
    //   post.get({ plain: true })
    //   );

      // res.render("addCattle", {
      //   loggedIn: req.session.loggedIn,
      // });
      // console.log(cattleDatapretty)

    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // })
});

// GET viewCattle Page
router.get("/viewCattle", async (req, res) => {
  if (!req.session.loggedIn) {
  res.redirect('/');
   return;
 };

 try {
  const dbCattleData = await Cattle.findAll({
    include:
      {
        model: User,
        attributes: ['username']
 }
  });

  try {
    console.log(req.session.userId)
    res.render("viewCattle", {
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      name: req.session.name,
      ranchNum: req.session.ranchNum,
      ranch: req.session.ranch
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

   try {
      const {username, user_id, loggedIn, ranchNum} = req.session
      const cattleData = await Cattle.findAll({
         where: {
         ranchNum: ranchNum
     }
    })
    console.log(cattleData)

 const dbCattleData = cattleData.map((post) =>
  post.get({ plain: true })
 );

  res.render("viewCattle", {
    id,
    ranchNum,
    tagID,
    name,
    sex,
    vaccine,
    fatherID,
    motherID,
    birthday,
    currentLocation,
    notes,
 });
 } catch (err) {
 console.log(err);
 res.status(500).json(err);

};
console.log(cattleData)

 } catch (err) {
 console.log(err);
 res.status(500).json(err);

};

module.exports = router;


const router = require('express').Router();
const Cattle = require('../../models/Cattle');

//CREATE new livestock
router.post('/', async (req, res) => {
    console.log(req)
    try {
        const cattleInput = await Cattle.create({
            ranchNum: req.body.ranchNum,
            tagID: req.body.tagID,
            name: req.body.name,
            sex: req.body.sex,
            vaccine: req.body.vaccine,
            fatherID: req.body.fatherID,
            motherID: req.body.motherID,
            birthday: req.body.birthday,
            currentLocation: req.body.currentLocation,
            notes: req.body.notes
        });
        const dbCattleData = await Post.create(cattleInput);
        res.status(200).json(dbCattleData)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;


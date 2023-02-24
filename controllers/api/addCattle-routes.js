// Route to add cattle to the data base
const router = require('express').Router(); // require express
const Cattle = require('../../models/Cattle'); // require cattle model
const _ = require('lodash'); // require lodash package

// CREATE new livestock (post route)
router.post('/', async (req, res) => {
    console.log(req.body)
    console.log(req.body.sex)
    const lowerName = req.body.name;
    const capitalName = _.capitalize(lowerName);
    const lowerSex = req.body.sex;
    const capitalSex = _.capitalize(lowerSex);
    const lowerCurrentLocation = req.body.currentLocation;
    const capitalCurrentLocation = _.capitalize(lowerCurrentLocation);
    try {
        const cattleInput = {
            ranchNum: req.body.ranchNum,
            tagID: req.body.tagID,
            name: capitalName,
            sex: capitalSex,
            vaccine: req.body.vaccine,
            fatherID: req.body.fatherID,
            motherID: req.body.motherID,
            birthday: req.body.birthday,
            currentLocation: capitalCurrentLocation,
            notes: req.body.notes
        }

        console.log(cattleInput)
        const dbCattleData = await Cattle.create(cattleInput);
        res.status(200).json(dbCattleData)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router; // export this route


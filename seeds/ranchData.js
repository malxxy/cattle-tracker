const { Ranch } = require('../models');

const ranchdata = [
    {
        "name": "Last Frontier",
    },
    {
        "name": "Deseo Ranch",
    },
    {
        "name": "Avenales Ranch",
    },
    {
        "name": "Santa Margarita Ranch",
    },
];

const seedRanches = () => Ranch.bulkCreate(ranchdata);

module.exports = seedRanches;
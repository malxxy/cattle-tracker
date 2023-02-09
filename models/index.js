const Cattle = require('./Cattle');
const User = require('./User');
const Ranch = require('./Ranch');

// Cattle.belongsTo(Ranch, {
//     foreignKey: 'RanchID',
// });

// Ranch.hasMany(Cattle, {
//     foreignKey: 'RanchID',
// });

module.exports = { Cattle, User, Ranch };

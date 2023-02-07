const User = require('./User');
const Cattle = require('./Cattle');

Cattle.belongsTo(User, {
});

User.hasMany(Cattle, {
});

module.exports = { Cattle, User };

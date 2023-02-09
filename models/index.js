const Cattle = require('./Cattle');
const User = require('./User');
const Ranch = require('./Ranch');

Ranch.hasMany(Cattle, {
    foreignKey: 'ranchNum',
    onDelete: 'CASCADE'
});

Ranch.hasMany(User, {
    foreignKey: 'ranchNum',
    onDelete: 'CASCADE'
});

Cattle.belongsTo(Ranch, {
    foreignKey: 'ranchNum',
});

User.belongsTo(Ranch, {
    foreignKey: 'ranchNum',
});

module.exports = { Cattle, User, Ranch };

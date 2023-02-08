const User = require('./User');
const cattle = require('./Cattle');

Cattle.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(cattle, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { cattle, User };

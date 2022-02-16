const User = require('./User.js');
const Post = require('./Post.js');
const Comment = require('./Comment.js');
const Pokedex = require('./Pokedex.js');

User.hasMany(Post, {
    foreignKey: 'userID'
});

Post.belongsTo(User, {
    foreignKey: 'userID'
});

Comment.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'cascade',
    hooks:true
});

Comment.belongsTo(Post, {
    foreignKey: 'postID',
    onDelete: 'cascade',
    hooks: true
});

User.hasMany(Comment, {
    foreignKey: 'userID',
    onDelete: 'cascade',
    hooks:true
});

// User.hasMany(Teams, {
//     foreignKey: 'userID',
//     onDelete: 'cascade',
//     hooks:true
// });

Post.hasMany(Comment, {
    foreignKey: 'postID',
    onDelete: 'cascade',
    hooks:true
})


module.exports = { User, Post, Comment, Pokedex };
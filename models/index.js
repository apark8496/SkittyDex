const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Pokedex = require('./Pokedex');

// create associations
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

Post.hasMany(Comment, {
    foreignKey: 'postID',
    onDelete: 'cascade',
    hooks:true
})

module.exports = { User, Post, Comment, Pokedex };
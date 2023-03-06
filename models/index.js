// Models import
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

// User comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

// Post for user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post comment
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Post comment 
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Post for user
Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = {
  User,
  Comment,
  Post
}


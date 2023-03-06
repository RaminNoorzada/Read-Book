const { Comment } = require('../models');
const commentData = [
    {
        comment_content: 'How cool is that!',
        user_id: 2,
        post_id: 3, 
    },
    {
        comment_content: 'Thats the way!',
        user_id: 3,
        post_id: 3, 
    },
    {
        comment_content: 'Nice thinking!',
        user_id: 1,
        post_id: 2, 
    },
    {
        comment_content: 'Nice one!',
        user_id: 2,
        post_id: 1, 
    },
    {
        comment_content: 'Great job!',
        user_id: 3,
        post_id: 1, 
    },
    {
        comment_content: 'Quiet helpful!',
        user_id: 3,
        post_id: 2, 
    },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
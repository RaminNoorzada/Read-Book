const { Post } = require("../models");
const postData = [
    {
        title: "test one",
        content: "test one",
        user_id: 1,
    },
    {
        title: "test two",
        content: "test two",
        user_id: 2,
    },
    {
        title: "test three",
        content: "test three",
        user_id: 3,
    },
];
const seedPost = () => Post.bulkCreate(postDate)
module.exports = seedPost;
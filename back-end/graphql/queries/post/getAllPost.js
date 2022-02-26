const Post = require('../../../model/post_model');

module.exports = async function (parent, args, context, info) {
    console.log("getPostAll")

    const posts=await Post.find();

    return posts
}
const Post = require('../../../model/post_model');

module.exports = async (parent, args, context, info) => {

    const post = await Post(args).save();

    return post
}
const Post = require('../../../model/post_model');

module.exports = async (args) => {
    await Post.findByIdAndDelete(args._id);
    console.log('delete post')
    return args._id;
}
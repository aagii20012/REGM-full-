const Post = require('../../../model/post_model');

module.exports = async (parent, args, context, info) => {
    let form = args
    console.log(args)
    delete form._id
    const post = await Post.findByIdAndUpdate(args._id, form, {new: true});
    
    console.log("update")
    console.log(post);
    return post
}
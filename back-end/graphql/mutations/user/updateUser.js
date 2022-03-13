const User = require('../../../model/model');

module.exports = async (parent, args, context, info) => {
    const id = args._id
    let form = args
    delete form._id
    const user = await User.findByIdAndUpdate(id, form, {new: true});
    
    console.log("update user")
    console.log(user);
    return user
}
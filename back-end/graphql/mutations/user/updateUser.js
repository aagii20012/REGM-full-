const User = require('../../../model/model');

module.exports = async (args) => {
    let form = args
    delete form._id
    const user = await User.findByIdAndUpdate(args._id, form, {new: true});
    
    console.log("update user")
    console.log(user);
    return user
}
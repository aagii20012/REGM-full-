const User = require('../../../model/model');

module.exports = async function (parent, args, context, info) {
    console.log(args);
    const user = await User.findById(args._id);
    
    console.log("getUser")
    console.log(user);
    return user
}
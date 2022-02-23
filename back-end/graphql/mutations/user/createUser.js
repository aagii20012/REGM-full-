const User = require('../../../model/model');

module.exports = async (args) => {
    const user = await User(args).save();
    
    console.log("getUser")
    console.log(user);
    return user
}
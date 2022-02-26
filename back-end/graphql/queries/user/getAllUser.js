const User = require('../../../model/model');

module.exports = async function (args) {
    console.log(args);
    const user = await User.find();;
    
    console.log("getUserAll")
    console.log(user);
    return user
}
const User = require('../../../model/model');

module.exports = async (args) => {
    await User.findByIdAndDelete(args._id);
    console.log('delete user')
    return args._id;
}
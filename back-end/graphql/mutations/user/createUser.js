const User = require('../../../model/model');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async (parent, args, context, info) => {
    args.password = bcrypt.hashSync(args.password, 10);
    console.log("here")
    
    const user = await User(args).save();
    
    return user
}
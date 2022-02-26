const User = require('../../../model/model');
const bcrypt = require('bcrypt');

module.exports = async function (parent, args, context, info) {
    console.log(args);
    const user = await User.findOne({"email":args.email});
    if(user){
        const validPass=await bcrypt.compare(args.password,user.password)
        if(validPass){
            return user
        }else{
            throw new Error("Wrong password");
        }
    }else{
        throw new Error("Accound not found");
    }

}
const dotenv = require('dotenv');
const User = require('../../../model/model');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

dotenv.config();

module.exports = async function (parent, args, context, info) {
    console.log(args);
    const user = await User.findOne({"email":args.email});
    if(user){
        const validPass=await bcrypt.compare(args.password,user.password)
        if(validPass){
            console.log("here",user)
            const accessToken=jwt.sign(user.toJSON(),
                 process.env.TOKEN)
            return {token:accessToken}
        }else{
            throw new Error("Wrong password");
        }
    }else{
        throw new Error("Accound not found");
    }

}
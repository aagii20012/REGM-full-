const jwt = require("jsonwebtoken");

module.exports = async function (parent, args, context, info) {
    console.log(args);
    const user = jwt.decode(args.token);
    
    console.log(user);
    return user
}
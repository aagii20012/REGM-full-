const {userSchema, userResolver} = require('./schema/user/user');
// const {merge} = require('lodash');

const schema = [
    userSchema
];

// const resolver = merge(
//     userResolver
// )
const resolver = userResolver


module.exports = {schema, resolver};
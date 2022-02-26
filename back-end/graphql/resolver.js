const {userSchema, userResolver} = require('./schema/user/user');
const {postSchema, postResolver} = require('./schema/post/post');
const {categorySchema, categoryResolver} = require('./schema/category/category');
const {merge} = require('lodash');

const schema = [
    userSchema,
    postSchema,
    categorySchema,]
;


// const resolver = merge(
//     userResolver
// )
const resolver = merge(
    postResolver,
    userResolver,
    categoryResolver
)


module.exports = {schema, resolver};
const Category = require('../../../model/category_model');

module.exports = async function (parent, args, context, info) {
    console.log("getPostAll")

    const category=await Category.find();

    return category
}
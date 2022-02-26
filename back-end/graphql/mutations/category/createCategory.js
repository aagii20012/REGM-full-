const Category = require('../../../model/category_model');

module.exports = async (parent, args, context, info) => {

    const category = await Category(args).save();

    return category
}
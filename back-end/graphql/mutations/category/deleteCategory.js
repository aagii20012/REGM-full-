const Category = require('../../../model/category_model');

module.exports = async (args) => {
    await Category.findByIdAndDelete(args._id);
    console.log('delete post')
    return args._id;
}
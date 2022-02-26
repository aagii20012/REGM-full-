const Category = require('../../../model/category_model');

module.exports = async (args) => {
    let form = args
    delete form._id
    const category = await Category.findByIdAndUpdate(args._id, form, {new: true});
    
    console.log("update")
    console.log(category);
    return category
}
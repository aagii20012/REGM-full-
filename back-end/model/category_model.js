const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    label:{type:String,required: true,unique: true },
},{collection:'Category'})

const model=mongoose.model('CategorySchema',UserSchema)

module.exports=model
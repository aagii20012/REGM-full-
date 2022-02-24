const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    first_name:{type:String,},
    last_name:{type:String,},
    email:{type:String,},
    password:{type:String,},
    isAdmin:{type:String,}
},{collection:'User'})

const model=mongoose.model('UserSchema',UserSchema)

module.exports=model
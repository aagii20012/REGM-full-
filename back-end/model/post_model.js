const mongoose=require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{type:String,required: true },
    category:{type:String,required: true },
    date:{type:String,required: true },
    person:{type:String,required: true },
    comment:{type:Number,},
    description:{type:String,required: true},
    img:{type:String,required: true }
},{collection:'Post'})

const model=mongoose.model('PostSchema',PostSchema)

module.exports=model
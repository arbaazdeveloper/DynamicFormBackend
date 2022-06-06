const mongoose=require('mongoose')

const FormSchema=mongoose.Schema({
    userId:{type:String},
    formTitle:{type:String},
    fields:{type:Array},
    createdOn:{type:String},
    date:{type:Date,default:Date.now()}

})

const Form=mongoose.model('Form',FormSchema)

module.exports=Form
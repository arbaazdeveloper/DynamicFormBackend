const mongoose=require('mongoose')

const FormSchema=mongoose.Schema({
    userId:{type:String},
    formTitle:{type:String},
    fields:{type:Array}

})

const Form=mongoose.model('Form',FormSchema)

module.exports=Form
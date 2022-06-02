const mongoose=require('mongoose')

const FormSchema=mongoose.Schema({
    userId:{type:String},
    fields:{type:Array}

})

const Form=mongoose.model('Form',FormSchema)

module.exports=Form
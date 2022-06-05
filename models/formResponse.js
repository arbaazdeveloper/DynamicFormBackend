const mongoose=require('mongoose')

const responseSchmema=mongoose.Schema({
    formId:{type:String},
    response:{type:Array}
})

const FormResponse=mongoose.model('response',responseSchmema)

module.exports=FormResponse
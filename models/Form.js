const mongoose=require('mongoose')

const FormSchema=mongoose.Schema({
    userId:{type:String},
    input:{
        type:Array,
      
    },
    chekbox:{
       type:Array
    },
    radio:{
        type:Array
    }

})

const Form=mongoose.model('Form',FormSchema)

module.exports=Form
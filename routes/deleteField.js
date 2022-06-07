const express=require('express')
const Form = require('../models/Form')
const app=express()

const deleteField=app.put('/deletefield/:id/:fieldId',(req,res)=>{
    const doupdate=async()=>{
        const id=req.params.id
        const fieldId=parseInt(req.params.fieldId)
        const result=await Form.update({_id:id},{$pull:{fields:{id:fieldId}}})
        res.json(result)

    }
    doupdate()
})
module.exports=deleteField
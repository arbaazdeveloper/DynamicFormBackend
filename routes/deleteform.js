const express=require('express')
const app=express()
const Form=require('../models/Form')

const deleteForm=app.delete('/deleteform/:id',(req,res)=>{
    const del=async ()=>{
        const id=req.params.id
        const result=await Form.findByIdAndDelete({_id:id})
        res.json(result)
    }
    del()
})
module.exports=deleteForm
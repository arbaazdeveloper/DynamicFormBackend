const express=require('express')
const app=express()
const Form = require('../models/Form')

const formFetch=app.get('/getform/:id',(req,res)=>{
    const getForm=async()=>{
        const id=req.params.id
        const result=await Form.find({_id:id})
        res.json(result)
    }
    getForm()
})

module.exports=formFetch
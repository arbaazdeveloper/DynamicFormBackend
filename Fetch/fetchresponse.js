const express=require('express')
const app=express()
const formResponse=require('../models/formResponse')

const fetchResponse=app.get('/getresponse/:id',(req,res)=>{
    const doResponse=async()=>{
        const id=req.params.id
        const result= await formResponse.find({formId:id})
        res.json(result)
    }
    doResponse()
})
module.exports=fetchResponse
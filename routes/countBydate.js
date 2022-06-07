const express=require('express')
const Form = require('../models/Form')
const app=express()

const countByDate=app.post('/countbydate',(req,res)=>{
    const doCount=async ()=>{
        const date=req.body.date
        const result= await Form.find({createdOn:date}).count()
        res.json(result)

    }
    doCount()
})
module.exports=countByDate
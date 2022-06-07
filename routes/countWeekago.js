const express=require('express')
const Form = require('../models/Form')
const app=express()

const countWeekAgo=app.get('/countweekago',(req,res)=>{
    const doCount=async ()=>{
        var ourDate = new Date();
        var pastDate = ourDate.getDate() - 7;
        ourDate.setDate(pastDate);
        const result= await Form.find({createdOn:ourDate.toDateString()}).count()
        res.json(result)

    }
    doCount()
})
module.exports=countWeekAgo
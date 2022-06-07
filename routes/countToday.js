const express=require('express')
const Form = require('../models/Form')
const app=express()

const CountToday=app.get('/countformtoday',(req,res)=>{
    const doCount=async ()=>{

        var ourDate = new Date();
        var pastDate = ourDate.getDate();
        ourDate.setDate(pastDate);
        console.log(ourDate)
        const result= await Form.find({createdOn:ourDate.toDateString()}).count()
        res.json(result)
    }
    doCount()
})
module.exports=CountToday
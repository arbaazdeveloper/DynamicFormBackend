const express=require('express')
const Form = require('../models/Form')
const moment=require('moment')
const app=express()

const CountyesterDay=app.get('/countformyesterday',(req,res)=>{
    const doCount=async ()=>{
        var ourDate = new Date();
        var pastDate = ourDate.getDate() - 1;
        ourDate.setDate(pastDate);
        const result= await Form.find({createdOn:ourDate.toDateString()}).count()
        res.json(result)

    }
    doCount()
})
module.exports=CountyesterDay
const express=require('express')
const Form = require('../models/Form')
const moment=require('moment')
const app=express()

const CountyesterDay=app.get('/countformyesterday',(req,res)=>{
    const doCount=async ()=>{
        const date=new Date()
        var d=date.getDay()
        var m=date.getMonth()
        var y=date.getFullYear()
        const myDate=`${d-1}-${m}-${y}`;
        const result= await Form.find({createdOn:myDate}).count()
        res.json(result)

    }
    doCount()
})
module.exports=CountyesterDay
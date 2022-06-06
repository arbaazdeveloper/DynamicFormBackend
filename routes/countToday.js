const express=require('express')
const Form = require('../models/Form')
const app=express()

const CountToday=app.get('/countformtoday',(req,res)=>{
    const doCount=async ()=>{
        const date=new Date()
        var d=date.getDay()
        var m=date.getMonth()
        var y=date.getFullYear()
        const myDate=`${d}-${m}-${y}`;
        const result= await Form.find({createdOn:myDate}).count()
        res.json(result)

    }
    doCount()
})
module.exports=CountToday
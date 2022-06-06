const express=require('express')
const authenticate = require('../middleware/authenticate')
const Form=require('../models/Form')
const app=express()

const NewForm=app.post('/createform',authenticate,(req,res)=>{
    const getForm=async ()=>{
        const userId= req.user
        const date=new Date()
        var d=date.getDay()
        var m=date.getMonth()
        var y=date.getFullYear()
        const myDate=`${d}-${m}-${y}`;
        const f1=new Form({
            userId:userId,
            formTitle:req.body.formTitle,
            fields:req.body.fields,
            createdOn:myDate
        })
       const result=await f1.save();
        res.json(result)

    }
    getForm()
})
module.exports=NewForm
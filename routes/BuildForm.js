const express=require('express')
const authenticate = require('../middleware/authenticate')
const Form=require('../models/Form')
const app=express()

const NewForm=app.post('/createform',authenticate,(req,res)=>{
    const getForm=async ()=>{
        const userId= req.user
        
        var ourDate = new Date();
        var pastDate = ourDate.getDate();
        ourDate.setDate(pastDate);
       

        const f1=new Form({
            userId:userId,
            formTitle:req.body.formTitle,
            fields:req.body.fields,
            createdOn:ourDate.toDateString()
        })
       const result=await f1.save();
        res.json(result)

    }
    getForm()
})
module.exports=NewForm
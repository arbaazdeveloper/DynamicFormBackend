const express=require('express')
const authenticate = require('../middleware/authenticate')
const Form=require('../models/Form')
const app=express()

const NewForm=app.post('/createform',authenticate,(req,res)=>{
    const getForm=async ()=>{
        const userId= req.user
        const f1=new Form({
            userId:userId,
            fields:req.body.fields
        })
       const result=await f1.save();
        res.json(result)

    }
    getForm()
})
module.exports=NewForm
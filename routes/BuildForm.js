const express=require('express')
const authenticate = require('../middleware/authenticate')
const Form=require('../models/Form')
const app=express()

const NewForm=app.post('/createform',authenticate,(req,res)=>{
    const getForm=async ()=>{
        const userId= req.user
        const input=req.body.input
        const chekbox=req.body.chekbox
        const radio=req.body.radio
        const f1=new Form({
            userId:userId,
            input:input,
            chekbox:chekbox,
            radio:radio
        })
       const result=await f1.save();
        res.json(result)

    }
    getForm()
})
module.exports=NewForm
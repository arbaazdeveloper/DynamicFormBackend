const express=require('express');
const authenticate = require('../middleware/authenticate');
const app=express();
const Form=require('../models/Form')

const updateForm=app.put('/updateform/:id',authenticate,(req,res)=>{
    const doUpdate=async()=>{
     const userId= req.user
       const updatedForm={
        userId:userId,
        formTitle:req.body.formTitle,
        fields:req.body.fields
       }
        const result=await Form.findByIdAndUpdate(req.params.id,{$set:updatedForm})
        res.json(result)
    }
    doUpdate()
})
module.exports=updateForm
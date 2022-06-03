const express=require('express')
const authenticate = require('../middleware/authenticate')
const Form = require('../models/Form')
const app=express()

const allForm=app.get('/getallform',authenticate,(req,res)=>{
    const getForm =async ()=>{
        const user=req.user
        const result = await Form.find({userId:user})
        res.json(result)
    }
    getForm()
})
module.exports=allForm
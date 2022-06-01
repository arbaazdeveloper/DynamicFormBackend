const express=require('express')
const authenticate = require('../middleware/authenticate')
const user = require('../models/User')
const app=express()

const getUser=app.get('/getuser',authenticate,(req,res)=>{
    const getuser= async ()=>{
        const id=req.user;
        const result=await user.find({_id:id});
        res.json(result)
    }
    getuser()
})
module.exports=getUser
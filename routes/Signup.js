const { request } = require('express');
const express=require('express')
const app=express()
const user=require('../models/User');

const Signup=app.post('/signup',(req,res)=>{
    const doSignUp=async ()=>{
        try {
            const name=req.body.name
            const email=req.body.email
            const password=req.body.password;
            const u1= await new user({name:name,email:email,password:password})
            const result=await u1.save();
            res.json(result)
            
        } catch (error) {
            console.log(error)
        }
      

    }
    doSignUp()
})
module.exports=Signup;
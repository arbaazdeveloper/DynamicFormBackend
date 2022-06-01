const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const user = require('../models/User');

const login=app.post('/login',(req,res)=>{
    const doLogin= async ()=>{
        const email=req.body.email;
        const password=req.body.password;
        const result= await user.findOne({email:email});
        if(!result){
           res.status(404).json({message:"Email not Found"})  
        }
        else{
            if(result.password===password){
                const token= jwt.sign({id:result.id,email:result.email},'thesecretishere')
                res.json({token:token})
            }
            else{
                res.json({message:"Login with correct credentials"})
            }
        }
    }
    doLogin()
});
module.exports=login
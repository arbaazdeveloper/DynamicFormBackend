const express=require('express')
const Form = require('../models/Form')
const Response=require('../models/formResponse')
const app=express()

const formResponse=app.post('/postresponse',(req,res)=>{
    const doResponse= async ()=>{

        const formId=req.body.formId
        const response=req.body.response
        const r1= await new Response({formId:formId,response:response})
        const result= await r1.save()
        res.json(result)
        console.log(formId)
    }
    doResponse()
})
module.exports=formResponse
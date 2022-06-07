const express=require('express')
const Form = require('../models/Form')
const app=express()

const dateResponse=app.get('/responsedate',(req,res)=>{
    const getResponse=async()=>{
      const result =await Form.aggregate(
        { $group: {_id: { $dayOfYear: "$date"},
          click: {$sum: 1 } } }
        )
        res.json(result)
    }
    getResponse()
})
module.exports=dateResponse
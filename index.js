const express=require('express')
const app=express()
const db=require('./db')
app.use(express.json())
const cors=require('cors')
app.use(cors())

const fetchResponse=require('./Fetch/fetchresponse')
const signup=require('./routes/Signup')
const login=require('./routes/login')
const getUser=require('./routes/getuser')
const Builform=require('./routes/BuildForm')
const formFetch=require('./Fetch/Formfetch')
const allForm=require('./Fetch/allForm')
const formResponse=require('./routes/response')
const deleteForm=require('./routes/deleteform')
const updatedForm=require('./routes/updateform')
const CountToday=require('./routes/countToday')
const CountyesterDay=require('./routes/countYesterday')

app.use(CountyesterDay)
app.use(CountToday)
app.use(updatedForm)
app.use(deleteForm)
app.use(fetchResponse)
app.use(formResponse)
app.use(signup)
app.use(login)
app.use(getUser)
app.use(Builform)
app.use(formFetch)
app.use(allForm)

app.listen(5000,()=>{
console.log('the server is satrted at port no. 5000.....')
})
const mongoose=require('mongoose')

const connection=mongoose.connect('mongodb+srv://arbaaz:arbaazdatabase123@cluster0.ukfau.mongodb.net/formdata?retryWrites=true&w=majority').then(()=>{
    console.log('Database connection is ready')
}).catch((e)=>{
    console.log('the error is '+e)
})

module.exports=connection
const jwt=require('jsonwebtoken');

const authenticate=(req,res,next)=>{
    try{
    const token=req.header('token');
    if(!token){res.json({message:"user is not logged in"})};
    const isValid= jwt.verify(token,'thesecretishere')
    if(!isValid){res.json({loggedin:false,message:"token not valid"})}
    req.user=isValid.id;
    next();
    }
    catch (e){
        console.log(e)

    }

}

module.exports=authenticate
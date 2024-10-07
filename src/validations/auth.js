const {responseHandler} = require("../common/reponseHandllers");

const signup = (req,res,next)=>{
    const {userName,email,password} = req.body;
    if(!userName || !email || !password){
        return responseHandler.badRequestResponse({res,message:"userName or email or password is required"});
    }
    if(password.length <= 7){
        return responseHandler.badRequestResponse({res,message:"password is too Short"});
    }
    return next();
}

const signin = (req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return responseHandler.badRequestResponse({res,message:"email and password is required"});
    }
    return next();
}

module.exports = {
    signup,
    signin,
}
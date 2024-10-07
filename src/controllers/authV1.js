const authService = require("../services/auth");
const {responseHandler} = require('../common/reponseHandllers');


const signup = async (req,res) =>{
    try {
        const response = await authService.signup(req.body);
        return responseHandler.successResponse({res,message:"Success",data:response});
    } catch (error) {
        console.log("Error signing due to:", error);
        return responseHandler.serverErrorResponse({res,message:'Error signing'});
    }
}

const signin = async (req,res) =>{
    try {
        const response = await authService.signin(req.body);
        return responseHandler.successResponse({res,message:"Success",data:response});
    } catch (error) {
        console.log("Error signing in due to:", error);
        return responseHandler.serverErrorResponse({res,message:'Error signing'});
    }
}

module.exports = {
    signup,
    signin,
}
const UserRepository = require("../repository/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const signin = async ({email,password})=>{
    try {
        const user = await UserRepository.getUserByEmail({email});
        if(user && bcrypt.compareSync(password, user.password)){
            const token = jwt.sign({id: user._id}, process.env.JWT_secret_key, {expiresIn: '3d'});
            return {
                token,
                id: user._id,
                userName: user.userName,
                email: user.email,
            };
        }
        return {
            message: "Invalid credentials",
        };
    } catch (error) {
        console.log("Error signing in: " + error);
        return {
            message: "An error occurred while signing in",
        };
    }
}

const signup = async ({userName, email, password})=>{
    try {
        const user = await UserRepository.getUserByEmail({email});
        if(user){
            return {
                message: "Email already exists",
            };
        }
        const newUser = await UserRepository.createNewUser({userName, email, password});
        return {
           id:newUser.id,
        };
    } catch (error) {
        console.log("Error signing up: " + error);
        return {
            message: "An error occurred while signing Up",
        };
    }
}

module.exports = {
    signin,
    signup,
}
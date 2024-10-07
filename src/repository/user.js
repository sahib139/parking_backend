const User = require("../models/users");

const getUserById = async ({id})=>{
    try {
        const user = await User.findById(id);
        if(!user) return null;
        return user;
    } catch (error) {
        console.log("Error fetching user: " + error);
        return null;
    }
}

const getUserByEmail = async ({email})=>{
    try {
        const user = await User.findOne({email});
        if(!user) return null;
        return user;
    } catch (error) {
        console.log("Error fetching user: " + error);
        return null;
    }
}

const createNewUser = async ({userName,email,password})=>{
    try {
        console.log({userName,email,password});
        const user = await User.create({userName: userName, email: email, password: password});
        return user;
    } catch (error) {
        console.log("Error creating user: " + error);
        return null;
    }
}

module.exports = {
    getUserById,
    getUserByEmail,
    createNewUser,
}
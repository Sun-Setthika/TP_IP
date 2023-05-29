const User = require("../model/User")

const getUser = async (userId) => {
    try{
        const user = await User.findById(userId);
        if(!user){
            return{
                success: false,
                err: "Id is invalid"
            }
        }
        return{
            success: true,
            data: User
        }
    }catch(err){
        return{
            success: false,
            err: err
        }
    }
}

module.exports = {
    getUser
}
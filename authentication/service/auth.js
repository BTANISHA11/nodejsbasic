//const sessionIdToUserMap = new Map(); //a hash map
const jwt=require("jsonwebtoken");
const secret="Tanisha$123@"
 
//this function will make token for me
function setUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
    },
    secret //asigning user object as payload

    )
}

function getUser(token){
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
   
}
// function setUser(id , user){
//     sessionIdToUserMap.set(id , user);
// }

// function getUser(id){
//    return sessionIdToUserMap.get(id);
// }

module.exports={
    setUser,
    getUser
};
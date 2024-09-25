const {getUser} = require('../service/auth')

// this func do a soft check
function checkForAuthentication(req, res, next){
    const tokenCookie = req.cookies?.token;
    req.user = null;
    if(!tokenCookie) return next();

    const token = tokenCookie;
    const user = getUser(token);
    req.user=user;
    return next()
}

// ADMIN , Normal 
function restrictTo(roles = []){
    return function(req, res, next){
        if(!req.user ) return res.redirect("/login");
        if(!roles.includes(req.user.role)) return res.end("UnAuthorized")
        return next();
    }
}


//for authntication
// async function restrictToLoggedinUserOnly(req , res , next){
//     //const userUid = req.cookies?.uid;
//     const userUid = req.headers["authorization"];

//     if(!userUid) return res.redirect("/login");
//     const token = userUid.split("Bearer ")[1];
//     // Bearer jkd2132jk3123
//     //const user = getUser(userUid);
//     const user=getUser(token);

//     if(!user) return res.redirect("/login");

//     req.user = user;
//     next();
// }

// async function checkAuth(req , res , next){
//     //const userUid = req.cookies?.uid;
//     const userUid = req.headers["authorization"];
//     const token = userUid.split("Bearer ")[1];
//     console.log(req.headers);
//     const user = getUser(token);
//     //const user = getUser(userUid);
//     req.user = user;
//     next();
// }

module.exports= {
    checkForAuthentication,
    restrictTo
    // restrictToLoggedinUserOnly,
    // checkAuth
};
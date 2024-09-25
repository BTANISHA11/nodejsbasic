const express = require('express')
const URL = require('../models/url');
const {restrictTo} = require("../middlewares/auth")
const router = express.Router();



router.get('/admin/urls',restrictTo(['ADMIN']), async(req , res)=>{
    const allurls = await URL.find({});
    return res.render("home",{
        urls:allurls,
    })
})


//inline middleware
router.get('/',restrictTo(["NORMAL","ADMIN"]), async(req, res)=>{
    const allUrls = await URL.find({ createdBy : req.user._id});
    return res.render("home",{
        urls: allUrls,
    })
})


/*router.get('/' , async(req, res)=>{
    // if(!req.user) return res.redirect('/login')
    const allUrls = await URL.find({ createdBy : req.user._id});
    return res.render("home",{
        urls: allUrls,
    })
}) */


router.get('/signup', async(req , res)=>{
    return res.render("signup");
})

router.get('/login', async(req , res)=>{
    return res.render("login");
})



module.exports = router;
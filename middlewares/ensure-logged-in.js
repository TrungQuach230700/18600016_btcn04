const User=require('../models/user');

module.exports=function ensureLoggedIn(req,res,next){
    if(!req.currentUser){
        res.redirect('/auth/login');
    }else{
        next();
    }
};
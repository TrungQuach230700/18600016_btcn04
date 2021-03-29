const User=require('../models/user');
const express = require('express');
const router = express.Router();

router.use(function(req,res,next){
    res.locals.title='Đăng nhập';
    next();
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    const {email,password}=req.body;
    const found=User.findByEmail(email);
    if(found&&found.password===password){
        req.session.userId=found.id;
        res.redirect('/');
    }else{
        res.render('auth/login');
    }
});
router.get('/logout',(req,res)=>{
    delete req.session.userId;
    res.redirect('/');
});

module.exports=router;
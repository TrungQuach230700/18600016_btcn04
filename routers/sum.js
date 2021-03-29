const express = require('express');
const router = express.Router();
const User=require('../models/user');
const ensureLoggedIn=require('../middlewares/ensure-logged-in');

router.use(ensureLoggedIn);
router.use(function(req,res,next){
  res.locals.title='Cộng hai số';
  next();
});

router.get('/', (req, res) => {
    res.render('sum/form');
  })
  router.post('/',function(req,res){
      const number1=Number(req.body.number1);
      const number2=Number(req.body.number2);
      const result=number1+number2;
      res.render('sum/result',{number1,number2,result});
  });

module.exports=router;
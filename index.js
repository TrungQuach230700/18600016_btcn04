const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts=require('express-ejs-layouts');
const cookieSession = require('cookie-session');

const db=require('./models/db');
const sumRouter=require('./routers/sum');
const todoRouter=require('./routers/todo');
const authRouter=require('./routers/auth');
const authMiddleware=require('./middlewares/auth');

app.use(cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY||'secret'],
    maxAge:24*60*60*1000,
  }))

app.use(authMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/sum',sumRouter);
app.use('/auth',authRouter);
app.use('/todo',todoRouter);

app.get('/view',function(req,res){
    req.session.views = (req.session.views || 0) + 1;
    res.send(`Bạn đã xem trang này ${req.session.views} lần`);

});

app.get('/',(req,res)=>{
  res.render('index',{title:'Trang chủ'});
});

db.sync().then(function(){
  const port=process.env.PORT || 3000;
  app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
  })
}).catch(console.error);

const express=require('express');
const app = express();
const nav= [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link: '/login', name:'Login'
    },
    {
        link: '/signup', name:'Signup'
    },
    {
        link: '/admin',name:'Add Book'
    }
];


const booksRouter= require('./src/routes/bookRoutes')(nav);
const authorsRouter= require('./src/routes/authorRoutes')(nav);
const adminRouter= require('./src/routes/adminRoutes')(nav);

const loginRouter = require('./src/routes/loginRoutes')(nav);

const signupRouter = require('./src/routes/signupRoutes')(nav);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);

app.use('/login', loginRouter);
app.use('/signup', signupRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });

});


app.listen(5000);

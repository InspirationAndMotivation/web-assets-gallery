const express = require('express')
const app = new express()
const { start } = require('repl')
const ejs = require('ejs')

const { body,validationResult } = require('express-validator');

const expressSession = require('express-session');
app.set('view engine','ejs')

global.loggedIn = null; //global variable accessible from all EJS files

//databases 
const mongoose = require('mongoose');
const User = require('./models/User.js')
const AssetPost = require('./models/AssetPost.js')

mongoose.connect('mongodb+srv://bismor_user:3rTcZaZbmTiFYUWL@adcluster.cbytb.mongodb.net/AD_Database', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
// for uploading images
const fileUpload = require('express-fileupload')
app.use(fileUpload())
app.use(expressSession({
    secret: 'after dark is the best server',
    proxy: true,
    resave: true,
    saveUninitialized: true
}))

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});
    
app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})

app.get('/home',(req,res)=>{
    res.render('home');
})


const validateMiddleware = require('./middleware/validationMiddleware'); //Middleware validation
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

const storeUserController = require('./controllers/storeUser')
const newUserController = require('./controllers/newUser')
const newPostController = require('./controllers/newPost')
const mainController = require('./controllers/main')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const storePostController = require('./controllers/storePost')
const logoutController = require('./controllers/logout')


app.get('/auth/logout', logoutController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController);
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/assets/new', authMiddleware, newPostController)
app.get('/main', mainController)

app.post('/assets/gallery', authMiddleware, storePostController)

app.use('/assets/gallery', validateMiddleware)
app.use((req, res) => res.render('notfound'));



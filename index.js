const mongoose = require('mongoose')
require('./config/db')

const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routers')
const cookieParser=require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const bodyParser = require('body-parser')

const path = require('path')
const app = express()

//Enable body-parse
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//enable handlebars
require('dotenv').config({path: 'config/variables.env'})
app.engine('handlebars',
    exphbs({
        defaultLayout: 'layout',
        helpers: require('./helpers/handlebars')
    })
)
app.set('view engine', 'handlebars')

//Static files

app.use(express.static(path.join(__dirname, 'public')))

app.use(cookieParser())
app.use(session({
    secret: process.env.SECRET,
    ky: process.env.KEY,
    resave: false,
    saveUninitialized:false,
    store: new MongoStore({ mongooseConnection : mongoose.connection}),

}))
app.use('/', router())
app.listen(process.env.PUERTO)










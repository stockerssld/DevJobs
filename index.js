const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routers')
const path = require('path')
const app = express()

app.engine('handlebars',
    exphbs({
        defaultLayout: 'layout'
    })
)
app.set('view engine', 'handlebars')

//Static files

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router())
app.listen(5000)
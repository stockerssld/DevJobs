const mongoose = require('mongoose')
const config = require('./index');
require('dotenv').config({path: 'variables.env'})

// mongoose.connect( process.env.DATABASE, {useNewUrlParser:true}, err=>{

mongoose.connect( config.database, {useNewUrlParser:true}, err=>{
    if (err) {
        console.log(err);
      } else {
        console.log('Connected to the database');
      }
})

mongoose.connection.on('error', (e)=>{
    console.log(e)
})

//Importacion de modelos
require('../models/Vacantes')



// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const config = require('./config');

// const app = express();

// // Only include useMongoClient only if your mongoose version is < 5.0.0
// mongoose.connect(config.database, { useNewUrlParser: true },err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan('dev'));
// app.use(cors());

// // app.use('/', router())


// app.listen(config.port, err => {
//   console.log('Magic happens on port awesome ' + config.port);
// });

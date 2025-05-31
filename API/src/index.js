const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

const app=express();

mongoose.connect('mongodb://localhost:27017')
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

//Setting

app.set('port',process.env.PORT || 1801);

// middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
    app.use(require('./routes/car'));

// server is listening
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
});
const mongoose = require('mongoose')
const mongoConfig = require('./config-mongo')

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log('connection to database established');
    }).catch(err => {
    console.log(`db error: ${err.message}`);
    process.exit(-1);
});

const mongoose = require('mongoose')
const mongoConfig = require('./config-mongo')

mongoose.connect('mongodb://192.168.0.226:27017/')
    .then(() => {
        console.log('connection to database established');
    }).catch(err => {
    console.log(`db error: ${err.message}`);
    process.exit(-1);
});

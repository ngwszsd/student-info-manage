const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('connected success'); })
    .catch(() => { console.log('conmnected failed'); })
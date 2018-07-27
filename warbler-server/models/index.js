const mongoose = require('mongoose');
// connect to db
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
    keepAlive: true,
    useMongoClient: true
});


const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false); // workaround for deprecated methods

mongoose.connect('mongodob://localhost:27017', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDb!');
});

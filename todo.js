const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false); // workaround for deprecated methods

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDb!');
});

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.export = Todo;

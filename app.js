const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const bodyParser = require('body-parser');

const Todo = require('./todo'); // local require instead of npm

// middleware we want to run everything through before response sent
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS");
  next(); // call next middleware
})

// app.use(express.static('public'));

app.use(bodyParser.json());

router.get('/', (req, res) => res.send('Hello world!'));

router.route('/todos')
  .get((req, res) => {
    Todo.all(function(data) {
      console.log('Retrieving all Todos');
      res.json(data);
    })
  })
  .post((req, res) => {
    Todo.createDocument(req.body, function(data) {
      console.log(`Todo created with id ${data._id}`);
      res.json(data);
    })
  })

router.route('/todos/:todo_id') // backticks used for template string, single quotes for literal string
  .put((req, res) => {
    Todo.updateDocument(req.params.todo_id, req.body, function(data) {
      console.log(`Todo id ${data._id} updated!`);
      res.json(data);
    });
  });

app.use('/', router); // hooks things together

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

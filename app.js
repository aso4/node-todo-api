const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const Todo = require('./todo'); // local require instead of npm

router.get('/', (req, res) => res.send('Hello world!'));

router.route('/todos')
  .get((req, res) => {
    Todo.all(function(data) {
      res.json(data);
    })
  });

app.use('/', router); // hooks things together

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

const Todo = require('./todo'); // local require instead of npm

router.get('/', (req, res) => res.send('Hello world!'));

router.route('/todos')
  .get((req, res) => {
    res.json([
              {
                "_id": "a",
                "text": "Item 1",
                "done": false
              },
              {
                "_id": "b",
                "text": "Item 2",
                "done": false
              },
              {
                "_id": "c",
                "text": "Item 3",
                "done": true
              }
            ]); // send blank json
  })

app.use('/', router); // hooks things together

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

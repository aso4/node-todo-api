const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/', (req, res) => res.send('Hello world!'));

router.route('/todos')
  .get((req, res) => {
    res.json({}); // send blank json
  })

app.use('/', router); // hooks things together

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

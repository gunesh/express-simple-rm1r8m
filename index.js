const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const ytdl = require('ytdl-core');
app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/', (req, res) => {
  return res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

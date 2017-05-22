var path = require ('path');
var express = require('express');
var app = express();

// define the folder that will be used for static assets
//app.use(path.join(__dirname, 'static'));
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.listen(8081, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on 8081
    `);
});
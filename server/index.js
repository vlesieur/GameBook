// Import
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');

// Server
const app = module.exports = express();

app.use(fileupload());

app.post('/createstory/upload', function(req, res, next) {
  const file = req.files.photo;
  file.mv('./public/uploads/' + file.name, function(err, result) {
    if(err)
      throw err;
    res.send({
      success:true,
      message: 'Fichier envoyé',
    });
  });
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH, HEAD');
  next();
});


// Start on :3000
app.listen(3000);

// importing route
const routes = require('./app/routes');

routes(app);

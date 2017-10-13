let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let session = require('express-session');
let router = require('./router/router');
var cors = require('cors');


let port = process.env.PORT || 9000;
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'fuckupig',
  cookie: {maxAge: 3600000},
  resave: true,
  saveUninitialized: true,
}));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use(router);

app.listen(port, () => {
  console.log(`devServer start on port:${ port}`);
});



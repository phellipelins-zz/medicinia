var express = require('express');
var bodyParser = require('body-parser');
var Pusher = require('pusher');
var cors = require('cors');

var pusher = new Pusher({
  appId: '451439',
  key: 'b0ffaa435a3fd8fddf5b',
  secret: 'b95d4aa6b9e0a3cd843a',
  cluster: 'us2'
});

var app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

var port = process.env.PORT || 4201;
app.listen(port);
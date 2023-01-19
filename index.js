var express = require('express');
const router =require('./timestampRouter.js');
var app = express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));
app.use('/api', router);
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

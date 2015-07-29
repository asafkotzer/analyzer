var Firebase = require("firebase");
var express = require('express')
var bodyParser = require('body-parser');
var app = express()
 
app.use( bodyParser.json());

app.post('/:deviceId', function (req, res) {
	console.log(req.body);
	var firebaseClient = new Firebase('https://scorching-fire-7424.firebaseio.com/' + req.params.deviceId);
	firebaseClient.push({ actions: [ 'some-action1' ] });
	res.status(202);
	res.send();
})
 
app.listen(3000)

const express = require('express'),
	path = require('path'),	
	app = express(),
	cors = require('cors'),
	mysql = require('mysql'),
	bodyParser = require('body-parser');

var server = {
	port: 4040
};

db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'express-backend'
  })

// routes
const usersRouter = require('./routes/users');

app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true})) // parsing incoming requests with urlencoded based body-parser
app.use('/users', usersRouter);
app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname,'views') + '/input.html');
  });
app.listen( server.port , () => console.log('Server started, listening port: %s', server.port));


var app = require('koa')(),
		serve = require('koa-static'),
		bodyParser = require('koa-bodyparser'),
		Router = require('koa-router')();

var	router = require('./routes/index.js')(app, Router);
var db = require('./controllers/dbControllers');

db.connect();

app.use(bodyParser());

app.use(serve(__dirname + '/public'));

app.use(Router.routes());


app.listen(8000, function () {
	console.log('Listening to port 8000');
});
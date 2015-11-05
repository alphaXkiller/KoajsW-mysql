var koa = require('koa'),
		app = koa();
		serve = require('koa-static'),
		path = require('path');
		bodyParser = require('koa-bodyparser'),
		Router = require('koa-router')(),
		co = require('co');

var	router = require('./routes/index.js')(app, Router);
var db = require('./controllers/dbControllers');

db.connect();

app.use(bodyParser());

app.use(serve('public'));

app.use(Router.routes());

app.listen(8000, function () {
	console.log('Listening to port 8000');
});
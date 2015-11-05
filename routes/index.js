'use strict';

var db = require('./../controllers/dbControllers');
var Users = require ('./../controllers/');

module.exports = function (app, route) {
	route
		.get('/')
		.get('/api/user', Users.showUser);
}

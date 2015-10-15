'use strict'
var db = require('./dbControllers');

module.exports.showUser = function* (next) {
	var users = {};

	yield db.query()
		.then( function (data) {
			users.users = data;
		});

	this.body = users;
};
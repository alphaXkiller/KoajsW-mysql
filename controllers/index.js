'use strict'
var db 			= require('./dbControllers');

module.exports.showUser = function *() {
	var users = {};

	yield db.query()
		.then( function (data) {
			users.users = data;
		});

	this.body = users;
};

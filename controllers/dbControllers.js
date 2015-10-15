var mysql = require('mysql');
var config = require('../dbconfig');
var db = mysql.createConnection(config);

module.exports.connect = function () {
	db.connect(function (err) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('Connected to database..' + db.threadId );
	});
};

module.exports.query = function (cb) {
	var query = new Promise (
		function (res, rej) {
			db.query('select * from users', function (err, rows) {
				if(err) 
					console.error(err);
				res(rows);
			});
		});
	return query;
}
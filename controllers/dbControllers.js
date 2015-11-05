var mysql = require('mysql');
var config = require('../config').db;
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

module.exports.query = function () {
	var query = new Promise (
		function (res, rej) {
			db.query('SELECT DISTINCT FROM_UNIXTIME(lastvisit, "%H") AS hour, COUNT(*) AS count FROM user GROUP BY hour limit 0, 500', function (err, rows) {
				if(err) 
					console.error(err);
				res(rows);
			});
		});
	return query;
}
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'Wbt2K2RUjr',
  password : 'l1YqRFh0gh',
  database : 'Wbt2K2RUjr',
  port	 : '3306'
});

connection.connect(function(err) {
	if (err) {
	  console.error('error connecting: ' + err.stack);
	  return;
	}
	console.log('connected as id ' + connection.threadId);
});



exports.signup = function(user) {
    return new Promise(function(resolve, reject){
        connection.query('INSERT INTO users SET ?', [user], function(err, data) {
            if (err) reject(err);
            resolve(data);
        });
    })
}

exports.profile = function(email) {
    return new Promise(function(resolve, reject){
        connection.query('SELECT * FROM users WHERE email = ? LIMIT 1', [email], function(err, data) {
            if (err) reject(err);
            if (typeof data !== 'undefined' && data) resolve(data[0]);
            else reject("data is undefined!");
        });
    })
}
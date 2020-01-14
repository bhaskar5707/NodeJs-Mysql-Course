var mysql = require('mysql');

// Create A Connection
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password:"",
	database:"nodemysql",
})

// Connect To Mysql
con.connect(function(err){
	if(err) throw err;
	console.log("Connected to the database");
     
    // Create Table
    var sql = "SELECT * from customers";
    con.query(sql, function(err, result , fields){
    	if(err) throw err;
    	console.log(fields);
    	console.log(fields[0].name);
    	console.log(result[0].name);
    })
});
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
    var sql = "INSERT INTO customers (name, email) VALUES ?";
    values = [
                ['Santosh Devi','santoshdevi@gmail.com'],
                ['Rajkumari','rajkumari@gmail.com'],
                ['Rakhi','rakhi@gmail.com'],
             ]
    con.query(sql,[values], function(err, result){
    	if(err) throw err;
    	console.log('Record Insert: ' +result.affectedRows);
    })
});
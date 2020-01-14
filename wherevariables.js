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
     
    var name_search = 't%';
    var id_search = 1;
    var sql = "SELECT * from customers WHERE name LIKE ? or id = ?";
    con.query(sql,[name_search , id_search] , function(err, result){
    	if(err) throw err;
    	console.log(result);
    })
});
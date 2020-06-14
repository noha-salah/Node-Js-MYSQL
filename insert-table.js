var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node"
});

con.connect(function(err) {
  if (err) throw err;

  console.log("Connected!");

  //var sql = "INSERT INTO customers (name, address) VALUES ?";

  //var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Highway 37' Limit 1";

//var sql="select * from customers ";
//var sql="select address from customers where name LIKE 'no%'";

  //var sql = "DELETE FROM customers WHERE address = 'm' Limit 1";
  var values =[
    ['s','portsaid'],
    ['m','portsaid'],
    ['good','portsaid'],
];
//con.query(sql,[values], function (err, result)
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log( result.affectedRows + " : record inserted");
//   });



    // con.query("SELECT  address FROM customers where name LIKE 'no%' ", function (err, result, fields) {
    //   if (err) throw err;
    //   console.log(result);
    // });



    // con.query("Drop customers ", function (err, result) {
    //   if (err) throw err;
    //   console.log( " Drop Table ....");
    // });




    
  });



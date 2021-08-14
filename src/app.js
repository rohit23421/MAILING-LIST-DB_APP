var faker = require("faker");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "join_us",
});

// //selecting Data
// var q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function (error, results, fields) {
// 	if(error) throw error;
// 	console.log(results);
// });

//inserting data
// var q = 'INSERT INTO users (email) VALUES ("Captain@gmail.com")';

// connection.query(q, function (error, results, fields) {
// 	if(error) throw error;
// 	console.log(results);
// });

//inserting data take_2
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// console.log(end_result.sql);

// connection.end();

// console.log(faker.date.past());

//inserting lots of data
var data = [];
for (var i = 0; i < 500; i++) {
  data.push([faker.internet.email(), faker.date.past()]);
}

var q = "INSERT INTO users (email, created_at) VALUES ?";

connection.query(q, [data], function (err, result) {
  console.log(err);
  console.log(result);
});

connection.end();

// function generateAddress() {
//   console.log(faker.internet.email());
//   console.log(faker.date.past());
//   console.log(faker.address.streetAddress());
//   console.log(faker.address.city());
//   console.log(faker.address.state());
// }

// generateAddress();
// generateAddress();

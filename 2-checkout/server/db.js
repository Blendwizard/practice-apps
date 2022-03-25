const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
  // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .catch((err) => console.log(err));

  db.insertUser = (user, callback) => {
    var query = 'INSERT INTO users_table VALUES (NULL, ?, ?, ?)';
    var queryArgs = [user.name, user.email, user.password];
    connection.query(query, queryArgs, (err, results) => {
      if (err) {
        callback(err);
      } else {
        console.log('Saving User to database...')
        callback(null, results);
      }
    })
  }

module.exports = db;




// .then(() =>
// // Expand this table definition as needed:
// db.queryAsync(
//   "CREATE TABLE IF NOT EXISTS users_table (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name TEXT, email TEXT, password VARCHAR(20))"
// )
// )
// .then(() =>
// db.queryAsync(
//   "CREATE TABLE IF NOT EXISTS shipping_table (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, street TEXT, city TEXT, state TEXT, zip INT, phone INT)"
// )
// )
// .then(() =>
// db.queryAsync(
//   "CREATE TABLE IF NOT EXISTS billing_table (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, card_number INT, expiry VARCHAR(6), CW INT, zip INT)"
// )
// )

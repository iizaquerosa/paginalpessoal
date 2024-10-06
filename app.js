const connection = require('./db');

connection.query('SELECT * FROM usuarios', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.end();

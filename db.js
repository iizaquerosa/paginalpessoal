const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'001972',
    database:'base_usuarios'
});


connection.connect((err) =>{
    if (err) {
        console.error('Erro ao conectar ao MYSQL:' + err.stack);
        return;
    }
    console.log('Conectado ao MYSQL como id' + connection.treadId);
});

module.exports = connection;

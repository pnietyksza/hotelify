var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hotelify'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Database connection is successfull');
});
module.exports = conn;
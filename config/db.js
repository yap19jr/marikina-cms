require('dotenv').config();
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

let sql ="SELECT * from RoomType"
pool.execute(sql, function(error, result){
if(error) throw error;
result.forEach(res =>{
})

});


module.exports = pool.promise();
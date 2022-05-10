const { createPool } = require('mysql')
const pool =  createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_test",
    connectionLimit: 10
})
if(pool){
    console.log("Connection has been established", pool);
}
pool.query(`select * from users`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})
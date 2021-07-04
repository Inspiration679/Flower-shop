const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Мать',
    password: "12345678"
});
connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

connection.query(
    'SELECT id FROM минусмать WHERE Name = 22',
    function(err, results, fields) {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
    }
);
connection.query(
    "RENAME TABLE минусмать TO anime",(err)=>{
       if (err){
           console.log("Table 'anime' already exists")
       }
    }

)
connection.query(
    "ALTER TABLE anime ADD Address VARCHAR(50) NULL ",(err)=>{
        if (err){
            console.log("error")
        }
}
)
connection.query(
    "SELECT * FROM anime",(err,results)=>{
        console.log(results);

}
)
connection.end()




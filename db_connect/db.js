const mysql = require('mysql2')

class db {
    static connect(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'mainbase',
            password: '14099041ROr'
        })
    }

    async close(){
        db.connect.end()
    }

}

module.exports = db
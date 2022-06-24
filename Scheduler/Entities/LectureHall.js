const mysql=require('mysql')
// connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.databaseHost,
    user: process.env.databaseUser,
    password: process.env.databasePassword
})

class LectureHall {
    constructor(id, name, capacity) {
        this.id = id;
        this.name = name;
        this.capacity = capacity;
    }


    static getAllLectureHalls(callback) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log('connected with-> ', connection.threadId);

            connection.query(`select * from ${process.env.databaseName}.lecture_hall`, (err, rows) => {
                if (!err) {
                    callback(rows);
                } else {
                    console.log("There is an error", err);
                }
            });
        });
    }

    static getLectureHallById(id, callback) {    // get lecture hall by id
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log('connected with-> ', connection.threadId);

            connection.query(`select * from ${process.env.databaseName}.lecture_hall where id=?`, [id], (err, rows) => {
                if (!err) {
                    callback(rows);
                } else {
                    console.log("There is an error", err);
                }
            });
        });
    }

    static addLectureHall(name, capacity, callback) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log('connected with-> ', connection.threadId);

            connection.query(`insert  into ${process.env.databaseName}.lecture_hall set name=?,capacity=?`, [name, capacity], (err, rows) => {
                if (!err) {
                    callback(rows);
                } else {
                    console.log("There is an error", err);
                }
            });
        });
    }

    static updateLectureHall(id, name, capacity, callback) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log('connected with-> ', connection.threadId);

            connection.query(`update ${process.env.databaseName}.lecture_hall set name=?,capacity=? where id=?`, [name, capacity, id], (err, rows) => {
                if (!err) {
                    callback(rows);
                } else {
                    console.log("There is an error", err);
                }
            });
        });
 
 
    }

    static deleteLectureHall(id, callback) {
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log('connected with-> ', connection.threadId);

            connection.query(`delete from ${process.env.databaseName}.lecture_hall where id=?`, [id], (err, rows) => {
                if (!err) {
                    callback(rows);
                } else {
                    console.log("There is an error", err);
                }
            });
        });
    }

    static getLectureHallByName(name, callback) {   // get lecture hall by name
        pool.getConnection((err, connection) => {
            if (err) throw err;
            console.log('connected with-> ', connection.threadId);

            connection.query(`select * from ${process.env.databaseName}.lecture_hall where name=?`, [name], (err, rows) => {
                if (!err) {
                    callback(rows);
                } else {
                    console.log("There is an error", err);
                }
            });
        });
    }

}
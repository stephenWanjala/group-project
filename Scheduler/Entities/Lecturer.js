
const mysql=require('mysql')
// connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.databaseHost,
    user: process.env.databaseUser,
    password: process.env.databasePassword
})
class Lecturer{
    constructor(LecturerId,lecturerName,unitTaken){
        this.LecturerId = LecturerId;
        this.lecturerName = lecturerName;
        this.unitTaken = unitTaken;
    }

    static getAllLecturers(callback){
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            console.log('connected with-> ',connection.threadId);
            connection.query(`select * from ${process.env.databaseName}.lecturer`,(err,rows)=>{
                if(!err){
                    callback(rows);
                }else{
                    console.log("There is an error",err);
                }
            });
        });
    }

    static getLecturerById(id,callback){       
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            console.log('connected with-> ',connection.threadId);
            connection.query(`select * from ${process.env.databaseName}.lecturer where id=?`,[id],(err,rows)=>{
                if(!err){
                    callback(rows);
                }else{
                    console.log("There is an error",err);
                }
            });
        });
    }


    static addLecturer(LecturerId,lecturerName,unitTaken,callback){
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            console.log('connected with-> ',connection.threadId);
            connection.query(`insert  into ${process.env.databaseName}.lecturer set LecturerId=?,lecturerName=?,unitTaken=?`,[LecturerId,lecturerName,unitTaken],(err,rows)=>{
                if(!err){
                    callback(rows);
                }else{
                    console.log("There is an error",err);
                }
            });
        });
    }

    static updateLecturer(LecturerId,lecturerName,unitTaken,callback){
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            console.log('connected with-> ',connection.threadId);
            connection.query(`update ${process.env.databaseName}.lecturer set LecturerId=?,lecturerName=?,unitTaken=? where id=?`,[LecturerId,lecturerName,unitTaken,id],(err,rows)=>{
                if(!err){
                    callback(rows);
                }else{
                    console.log("There is an error",err);
                }
            });
        });
    }
}
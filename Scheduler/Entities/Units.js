const mysql=require('mysql')
// connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.databaseHost,
    user: process.env.databaseUser,
    password: process.env.databasePassword
})
class Units{
    constructor(unitCode,unitName,semesterTaught){
        this.unitCode = unitCode;
        this.unitName = unitName;
        this.semesterTaught = semesterTaught;
    }
    static getAllUnits(callback){
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            console.log('connected with-> ',connection.threadId);
            connection.query(`select * from ${process.env.databaseName}.units`,(err,rows)=>{
                if(!err){
                    callback(rows);
                }else{
                    console.log("There is an error",err);
                }
            });
        });
    }

    static getUnitById(id,callback){
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            console.log('connected with-> ',connection.threadId);
            connection.query(`select * from ${process.env.databaseName}.units where id=?`,[id],(err,rows)=>{
                if(!err){
                    callback(rows);
                }else{
                    console.log("There is an error",err);
                }
            });
        });
    }

    static addUnit(unitCode,unitName,semesterTaught,callback){
        pool.getConnection((err,connection)=>{
            if(err) throw err;
            console.log('connected with-> ',connection.threadId);
            connection.query(`insert  into ${process.env.databaseName}.units set unitCode=?,unitName=?,semesterTaught=?`,[unitCode,unitName,semesterTaught],(err,rows)=>{
                if(!err){
                    callback(rows);
                }else{
                    console.log("There is an error",err);
                }
            });
        });
    }
}
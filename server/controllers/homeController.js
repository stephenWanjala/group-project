

const res = require('express/lib/response');
const mysql = require('mysql');
// connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    port:process.env.conectionPort,
    host: process.env.databaseHost,
    user: process.env.databaseUser,
    password: process.env.databasePassword
})


// Home view
exports.view=(req,res)=>{

    res.render('homePage')
   
}


exports.login=(req,res)=>{
    const {lecturerId,password}=req.body

    pool.getConnection((err,connection)=>{  // get connection from pool
        if(err) throw err;
        console.log('connected with-> ', connection.threadId);
        connection.query(`select * from ${process.env.databaseName}.lecturer where lecturerId=? and lecturerId=?`,[1,1],(err,rows)=>{  
            if(!err){
                if(rows.length>0){
                    // res.send("succes")
                    res.render('adminLogin',{rows:rows})
                    console.log(rows)
                }else{
                    // res.send("Error")
                    res.render('homePage',{error:'Invalid lecturerId or password'})
                }
            }else{
                console.log("There is an error",err);
            }
        })
         })
            
    
}


exports.generateDownloadTimeTable=(req,res)=>{
    var PdfTable = require('voilab-pdf-table'),
    PdfDocument = require('pdfkit');

    

    
}

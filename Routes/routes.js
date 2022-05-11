const express=require('express')
const router=express.Router()
const mysql=require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
   database:'myNodeDb'
} )

db.connect((err)=>{
    if(err){
        throw err
    }
    console.log("mysql connected...")

})


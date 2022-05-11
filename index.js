const express=require('express')
const path=require('path')
const mysql=require('mysql')
const expHandlebars=require('express-handlebars')
const app=express()
let PORT=process.env.PORT||5000



//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    }))
// body parser middleware function
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT,(req,res)=>{
    
    console.log(":server running on port",PORT)
})
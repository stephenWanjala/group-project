const express = require('express')
const app = express()
const PORT=process.env.PORT||3000


require('dotenv').config()

// body parser  middleware
// url encoded
app.use(bodyParser.urlencoded({
  extended: false
}))


// parse app-json
app.use(bodyParser.json())

// static folder
app.use(express.static('public'))

// Templating engine 
app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}))
// app.engine('hbs',exphbs.engine({extname: '.hbs'}))
app.set('view engine', 'handlebars')

// connection pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.databaseHost,
  user: process.env.databaseUser,
  password: process.env.databasePassword
})

pool.getConnection((err,Connection)=>{
  if(err)    throw err   // not connected
console.log(`connected with id ${Connection.threadId}`)
  
})

app.get('/', (req, res) => {
  res.send('hello world me')
})






app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
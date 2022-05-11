const express=require('express')
const handlebars=require('express-handlebars')
const app=express()

const PORT=process.env.PORT||5000
app.set('view engine','handlebars')
app.engine('handlebars',handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
}))
app.use(express.static('public'))
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'})
});

app.listen(PORT,()=>`server listeniing on port ${PORT}`)
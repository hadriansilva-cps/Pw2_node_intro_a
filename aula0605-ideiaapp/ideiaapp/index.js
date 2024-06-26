const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')

const app = express()
const Ideia =  require('../models/Ideia')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.get('/',(req, res) => {
    res.render('layouts/main')
})

conn
.sync({force: true})
.then(() => {
    app.listen(3000, () => {
        console.log('Servidor:http://localhost:3000/')
    })
    
}).catch((err) => {
    console.error(`erro no MySQL / sequilize: ${err} `)
})

app.listen(3000, () =>{
    console.log('Servidor:http://localhost:3000/')
})

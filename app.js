const express = require('express')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

const config = require(path.join(__dirname, 'config', 'config.json'))
//require(path.join(__dirname, 'config', 'database.js')).connect()

const app = express()

app.set('port', process.env.PORT || config.port)
app.set('views', path.join(__dirname, config.views))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, config.static)))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config.key
}))
app.use(bodyParser.urlencoded({ extended: false }))

fs.readdirSync(path.join(__dirname, 'controllers')).forEach(function(file) {
  if(file.substr(-3) == '.js') {
      let route = require(path.join(__dirname, 'controllers', file))
      route.controller(app)
  }
})

app.listen(app.get('port'), ()=>{
  console.log('App running on port ' + app.get('port'))
})

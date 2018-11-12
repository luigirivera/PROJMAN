const path = require('path')
const mongoose = require('mongoose')

require(path.join(__dirname, '..', 'config', 'database.js')).connect()
.then(()=>{
  mongoose.connection.db.dropCollection('users')
  mongoose.connection.db.dropCollection('user_types')
})
.catch((err)=>{
  console.log(err)
})

const mongoose = require('mongoose')
const path = require('path')

const uri = require(path.join(__dirname, 'config.json')).database.uri

// checks if mongoose is connected to the database
function isConnected(){
  return mongoose.connection.readyState == 1
}

// connects mongoose to the database
function connect(){
  return new Promise(
    function(resolve, reject) {
      if (isConnected()) resolve()
      mongoose.connect(uri, {
        useNewUrlParser : true
      })
      .then(()=>{
        mongoose.Promise = global.Promise
        resolve()
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

module.exports.connect = connect;

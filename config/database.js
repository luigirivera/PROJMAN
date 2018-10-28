const mongoose = require('mongoose')
const path = require('path')

const uri = require(path.join(__dirname, 'config.json')).database.uri

// checks if mongoose is connected to the database
function isConnected(){
  return mongoose.connection.readyState == 1;
}

// connects mongoose to the database
function connect(){
  if (!isConnected()) {
    mongoose.connect(uri, {
        useNewUrlParser : true
    });
    mongoose.Promise = global.Promise;
  }
}

connect();

module.exports.mongoose = mongoose;

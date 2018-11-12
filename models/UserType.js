const mongoose = require('mongoose')

let userTypeSchema = mongoose.Schema({
  system_name : {
    type : String,
    required : true,
    uppercase : true,
    trim : true,
    unique : true
  },
  display_name : {
    type : String,
    required : true,
    trim : true
  }
}, { collation : { locale : 'en_US', strength : 1 }})

let UserType = mongoose.model('user_type', userTypeSchema)

module.exports = {UserType}

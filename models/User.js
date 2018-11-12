const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const saltRounds = 10

function noSpaces(str) {
  return !(/\s/.test(str))
}

var userSchema = mongoose.Schema({
  username : {
    type : String,
    required : true,
    trim : true,
    unique : true,
    validate : {
      validator : noSpaces,
      msg : 'Username cannot have spaces'
    }
  },
  password : {
    type : String,
    required : true,
  },
  type : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "user_type",
    required : true
  }
})

userSchema.pre('save', function(next){
  let user = this

  if (!user.isModified('password')) return next()

  bcrypt.hash(user.password, saltRounds, function(err, hash){
    if(!err){
      user.password = hash;
      return next()
    }
  })
})

var User = mongoose.model('user', userSchema)

module.exports = {User}

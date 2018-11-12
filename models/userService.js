const path = require('path')

const User = require(path.join(__dirname, 'User.js')).User

function getAll() {
  return new Promise(
    function(resolve, reject) {
      User.find({}, '-password').sort({ username : 1 }).populate('type')
      .then((users)=>{
        if (users) resolve(users)
        else throw Error('No users')
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

function getByUsername(username) {
  return new Promise(
    function(resolve, reject) {
      User.findOne({username}, '-password')
      .populate('type')
      .then((user)=>{
        if (user) resolve(user)
        else throw Error('User ' + username + ' not found')
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

/*
  Creates a new User.
  @param {String} username
  @param {String} password
  @param {UserType} type
*/
function createUser(username, password, type) {
  return new Promise(
    function(resolve, reject) {
      let user = new User({
        username, password, type : type._id
      })

      user.save()
      .then((savedUser)=>{
        return savedUser.populate('type').execPopulate()
      })
      .then((savedUser)=>{
        resolve(savedUser)
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

module.exports = {
  getAll, getByUsername, createUser
}

const path = require('path')

const User = require(path.join(__dirname, 'User.js')).User

function getAll() {
  return new Promise(
    function(resolve, reject) {
      User.find({}, 'username').sort({ username : 1 }).populate('type')
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
      User.findOne({username}, 'username')
      .populate('type')
      .then((user)=>{
        if (user) resolve(user)
        else throw Error('User ' + username + ' not found')
      })
      .catch((err)=>{
        reject(err)
      })
      // collation
    }
  )
}

module.exports = {
  getAll, getByUsername
}

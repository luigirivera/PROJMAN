const path = require('path')
const bcrypt = require('bcryptjs')

const User = require(path.join(__dirname, 'User.js')).User

function authUser(username, password) {
  return new Promise(
    function (resolve, reject) {
      var user
      User.findOne({username}, '_id password')
      .then((doc)=>{
        if (!doc) throw Error('User not found')
        user = doc
        return bcrypt.compare(password, user.password)
      })
      .then((result)=>{
        if (result) resolve(user._id)
        else throw Error('Invalid credentials')
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

module.exports = {authUser}

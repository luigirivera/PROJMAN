const path = require('path')
const bcrypt = require('bcryptjs')

const User = require(path.join(__dirname, 'User.js')).User

function authUser(username, password) {
  return new Promise(
    function (resolve, reject) {
      var user
      User.findOne({username}, 'password')
      .then((doc)=>{
        user = doc
        return bcrypt.compare(password, user.password)
      })
      .then((result)=>{
        if (result) resolve(user);
        else reject(Error('Invalid credentials'))
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

module.exports = {authUser}

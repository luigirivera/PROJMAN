const path = require('path')

const UserType = require(path.join(__dirname, 'UserType.js')).UserType

function getAll() {
  return new Promise(
    function(resolve, reject) {
      UserType.find({}).sort({ system_name : 1 })
      .then((userTypes)=>{
        if (userTypes) resolve(userTypes)
        else throw Error('No user types')
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

function getById(id) {
  return new Promise(
    function(resolve, reject) {
      UserType.findOne({ _id : id })
      .then((userType)=>{
        if (userType) resolve(userType)
        else throw Error('User type with id ' + id + ' not found')
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

function getBySystemName(name) {
  return new Promise(
    function(resolve, reject) {
      UserType.findOne({ system_name : name })
      .then((userType)=>{
        if (userType) resolve(userType)
        else throw Error('User type with system name ' + name + ' not found')
      })
      .catch((err)=>{
        reject(err)
      })
    }
  )
}

module.exports = {getAll, getById, getBySystemName}

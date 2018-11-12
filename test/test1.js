const path = require('path')
const mongoose = require('mongoose')

const userService = require(path.join(__dirname, '..', 'models', 'userService.js'))
const userTypeService = require(path.join(__dirname, '..', 'models', 'userTypeService.js'))

require(path.join(__dirname, '..', 'config', 'database.js')).connect()

let utPromises = [
  userTypeService.createUserType('ADMIN', "Administrator"),
  userTypeService.createUserType('EMPLOYEE', "Employee")
]

let userTypes = []

Promise.all(utPromises)
.then((uts)=>{
  return userTypeService.getAll()
})
.then((uts)=>{
  userTypes = uts
  console.log(userTypes)
  return userService.createUser('sampleAdmin', 'password', userTypes.find((userType)=>{return userType.system_name==='ADMIN'}))
})
.then((user)=>{
  return userService.createUser('sampleEmployee', 'password', userTypes.find((userType)=>{return userType.system_name==='EMPLOYEE'}))
})
.then((user)=>{
  return userService.getAll()
})
.then((users)=>{
  console.log(users)
})
.catch((err)=>{
  console.log(err)
  mongoose.connection.db.dropCollection('users')
  mongoose.connection.db.dropCollection('user_types')
})

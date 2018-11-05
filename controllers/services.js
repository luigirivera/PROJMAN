module.exports.controller = function (app) {

  app.get('/services', (req, res)=>{
    res.send('The "services" page.')
  })

}

module.exports.controller = function (app) {

  app.get('/request', (req, res)=>{
    res.send('The "request pickup/delivery" page.')
  })

}

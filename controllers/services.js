module.exports.controller = function (app) {

  app.get('/services', (req, res)=>{
    res.render('services.ejs')
  })

}

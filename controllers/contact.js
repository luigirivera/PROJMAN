module.exports.controller = function (app) {

  app.get('/contact', (req, res)=>{
    res.render('contact.ejs')
  })

}

module.exports.controller = function (app) {

  app.get('/', (req, res)=>{
    res.render('home.ejs')
  })

}

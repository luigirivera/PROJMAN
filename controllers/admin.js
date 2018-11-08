module.exports.controller = function (app) {

  app.all(/admin(\/.)*/, (req, res, next)=>{
    console.log('Admin session check')
    next()
  })

  app.get('/admin', (req, res)=>{
    res.render('admin_login.ejs')
  })

}

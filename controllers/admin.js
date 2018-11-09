module.exports.controller = function (app) {

  app.all(/admin(\/.)*/, (req, res, next)=>{
    console.log('Admin session check')
    if (req.session.uid){
      console.log('Session exists -- proceeding')
      next()
    }
    else {
      console.log('No session found -- redirecting to login')
      res.render('admin_login.ejs')
    }
  })

  app.get('/admin', (req, res)=>{
    res.redirect('admin_information.ejs')
  })

}

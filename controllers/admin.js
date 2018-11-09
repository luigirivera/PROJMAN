const path = require('path')

module.exports.controller = function (app) {

  app.post('/admin', (req, res)=>{
    console.log('POST /admin')
    if (req.body.username && req.body.password) {
      // dummy login -- replace with auth function later
      let username = req.body.username
      let password = req.body.password
      req.session.uid = 1
      console.log('Login complete')
    }
    res.redirect('/admin')
  })

  app.get('/admin', (req, res)=>{
    console.log('GET /admin')
    if (req.session && req.session.uid) {
      res.redirect('/admin/info')
    } else {
      res.render(path.join('admin', 'login.ejs'))
    }
  })

  app.all(/admin(\/.)*/, (req, res, next)=>{
    console.log('ALL /admin(/...)')
    console.log('Admin session check')
    if (req.session && req.session.uid) {
      console.log('Session exists -- proceeding')
      next()
    } else {
      console.log('No session found -- redirecting to login')
      res.redirect('/admin')
    }
  })

  app.get('/admin/info', (req, res)=>{
    console.log('GET /admin/info')
    res.render(path.join('admin', 'information.ejs'))
  })

  app.get('/admin/services', (req, res)=>{
    console.log('GET /admin/services')
    res.render(path.join('admin', 'services.ejs'))
  })

  app.get('/admin/promos', (req, res)=>{
    console.log('GET /admin/promos')
    res.render(path.join('admin', 'promos.ejs'))
  })

  app.get('/admin/orders', (req, res)=>{
    console.log('GET /admin/orders')
    res.render(path.join('admin', 'orders.ejs'))
  })

  app.get('/admin/account', (req, res)=>{
    console.log('GET /admin/account')
    res.render(path.join('admin', 'account.ejs'))
  })

}

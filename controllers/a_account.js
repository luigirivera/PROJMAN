module.exports.controller = function (app) {

  app.get('/admin/account', (req, res)=>{
    res.render('admin/account.ejs')
  })

}

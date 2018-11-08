module.exports.controller = function (app) {

  app.get('/admin/information', (req, res)=>{
    res.render('admin/information.ejs')
  })

}

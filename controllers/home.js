module.exports.controller = function (app) {

  app.get('/', (req, res)=>{
    res.render('home.ejs')
  })
  app.get("/contact", (req, res)=>{
    res.render('contact.ejs')
})
app.get("/services", (req, res)=>{
  res.render('services.ejs')
})
}

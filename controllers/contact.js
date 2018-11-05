module.exports.controller = function (app) {

  app.get('/contact-us', (req, res)=>{
    res.send('The "contact us" page.')
  })

}

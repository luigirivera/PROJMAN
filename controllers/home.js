module.exports.controller = function (app) {

  app.get("/", (req, res)=>{
    res.send("Hello world!")
  })

}

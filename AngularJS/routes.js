module.exports = function (app) {

  app.set('view engine','ejs');
  app.post( '/loginProcess',(req,res) => {
    res.render(__dirname+'/client/loginProcess.ejs',{id:req.body.id});
  });

  app.set('view engine','ejs');
  app.get('/main_practice', (req,res) => {
    res.render(__dirname+'/client/main_practice.ejs');
  });

  // app.set('view engine','ejs');
  // app.get('/dailyLog', (req,res) => {
  //   res.render(__dirname+'./dailyLog.ejs');
  // });

  // app.get('/personalPage', (req,res) => {
  //   res.render(__dirname+'./personal.ejs');
  // });
}

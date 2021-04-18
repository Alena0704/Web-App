const app = require('./config/express')

const port = process.env.PORT || 5000;

// app.listen(process.env.PORT || port);
// console.log("heroku started at: " + port);

app.listen(port, function(){
  console.log("Heroku started on port %d in %s mode", this.address().port, app.settings.env);
})

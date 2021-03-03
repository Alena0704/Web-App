//Install express server
const express = require('express');
const path = require('path');
const app = express();


const mysql = require('mysql');

const dbConnect = mysql.createConnection({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b0a4da6ce0854d',
  password: 'fd5828d2',
  database:'heroku_21e880135017970',
  port:'3306'
});


dbConnect.connect(function(err){
if (err) throw err;
console.log("Database connected!!!!!");
});


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/al'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/al/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);



/*
mysql://
b0a4da6ce0854d
:
fd5828d2
@
us-cdbr-east-03.cleardb.com
/heroku_21e880135017970?reconnect=true
*/


/*
const express = require('express');

const app = express();

app.use(express.static('../Web-App'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: '../Web-App/src'}),
);

app.listen(process.env.PORT || 8080);
*/


//______________________________

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/al'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/al/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

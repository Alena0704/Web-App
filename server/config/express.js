const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const tableRoutes = require('../routes/table')
const navFormRoutes = require('../routes/navform')
const homeRoutes = require('../routes/home')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());




app.use('/api/form', navFormRoutes);
app.use('/api/table', tableRoutes);


app.use(express.static(__dirname + '../../../dist/al'));
app.use('/*', homeRoutes);

module.exports = app

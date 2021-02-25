const express = require('express');

const app = express();

app.use(express.static('../Web-App'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: '../Web-App/src'}),
);

app.listen(process.env.PORT || 8080);

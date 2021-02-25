const express = require('express');

const app = express();

app.use(express.static('./dist/Web-App'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/Web-App/'}),
);

app.listen(process.env.PORT || 8080);

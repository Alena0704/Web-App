const app = require('./config/express')

const port = process.env.PORT || 8080;

app.listen(process.env.PORT || port);

const path = require('path')
module.exports.home = function (req, res) {
  res.sendFile(path.join(__dirname + '../../../dist/al/index.html'));
}

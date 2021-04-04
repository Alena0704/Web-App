const mysql = require('mysql');
const pool = require('../config/mysqlDB')

module.exports.formData = function (req, res) {
  const cmd = 'Select subject, name as matType\n' +
    'from materials, disciplins\n' +
    'where disciplins.id_disc = materials.id_disc'
  pool.query(cmd, (err, rows, fields) => {
    res.send(rows);
  })
}

module.exports.formUpload = function (req, res) {
  let subject = req.body.subject;
  let matType = req.body.matType;
  let taskTitle = req.body.taskTitle;
  let taskType = req.body.taskType;
  let comment = req.body.comment;

  const cmd = 'select id_material from materials where name=?'
  let insertion = [matType];
  pool.query(mysql.format(cmd, insertion), (err, rows, fields) => {
    console.log(JSON.stringify(rows));
  })
  /*
  console.log("subject: " + subject);
  console.log("matType: " + matType);
  console.log("taskTitle: " + taskTitle);
  console.log("taskType: " + taskType);
  console.log("comment: " + comment);
  console.log("server: " + JSON.stringify(req.body));
  */

  res.end();
}

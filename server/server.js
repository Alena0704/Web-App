//Install express server
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');


const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'us-cdbr-east-03.cleardb.com',
  user: 'b0a4da6ce0854d',
  password: 'fd5828d2',
  database: 'heroku_21e880135017970',
  port: '3306'
});


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/api/table-data', (req, res) => {
  const cmd = 'select disciplins.subject as subject, materials.name as material, materials.type as matType, tasks.name as task,t1.mark as avgScore\n' +
    'from tasks, materials, disciplins,\n' +
    '(select tasks.id_task, avg(results.mark) as mark\n' +
    'from tasks, results\n' +
    'where tasks.id_task=results.id_task\n' +
    'group by tasks.id_task) as t1\n' +
    'where disciplins.id_disc=materials.id_disc and\n' +
    'materials.id_material=tasks.id_material and t1.id_task=tasks.id_task;'

  const data = pool.query(cmd, (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  })
})


app.post('/api/form-upload', (req, res) => {
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
  */

  console.log("server: " + JSON.stringify(req.body));


  res.end();
})


app.get('/api/form-data', (req, res) => {

  const cmd = 'Select subject, name as matType\n' +
    'from materials, disciplins\n' +
    'where disciplins.id_disc = materials.id_disc'

  pool.query(cmd, (err, rows, fields) => {
    res.send(rows);
  })
})


app.use(express.static(__dirname + '../../dist/al'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '../../dist/al/index.html'));
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || port);




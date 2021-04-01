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


// Serve only the static files form the dist directory
const ELEMENT_DATA = [
  {
    subject: 'Предмет 1',
    material: 'Материал 1',
    matType: 'Тип материала 1',
    task: 'Задание 1',
    avgScore: '4.2'
  },
  {
    subject: 'Предмет 2',
    material: 'Материал 2',
    matType: 'Тип материала 2',
    task: 'Задание 2',
    avgScore: '4.1'
  },
  {
    subject: 'Предмет 3',
    material: 'Материал 3',
    matType: 'Тип материала 3',
    task: 'Задание 3',
    avgScore: '4.5'
  },
  {
    subject: 'Предмет 4',
    material: 'Материал 4',
    matType: 'Тип материала 4',
    task: 'Задание 4',
    avgScore: '4.9'
  },
];


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());




app.get('/api/data', (req, res) => {
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


app.post('/api/upload', (req, res) => {
  let subject = req.body.subject;
  let matType = req.body.matType;
  let taskTitle = req.body.taskTitle;
  let taskType = req.body.taskType;
  let comment = req.body.comment;

  /*
  console.log("subject: " + subject);
  console.log("matType: " + matType);
  console.log("taskTitle: " + taskTitle);
  console.log("taskType: " + taskType);
  console.log("comment: " + comment);

  console.log("server: " + JSON.stringify(req.body));
  */

  res.end();
})


app.use(express.static(__dirname + '/dist/al'));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname + '/dist/al/index.html'));
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || port);


/*
mysql://
b0a4da6ce0854d
:
fd5828d2
@
us-cdbr-east-03.cleardb.com
/heroku_21e880135017970?reconnect=true
*/

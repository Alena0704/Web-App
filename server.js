//Install express server
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

/*
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
*/

// Serve only the static files form the dist directory
const ELEMENT_DATA = [
  {
    id: 1,
    workTitle: 'Я',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '1Pizdec',
    source_: 'source',
    recommends: '3'
  },
  {
    id: 2,
    workTitle: 'СЕЙЧАС',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '2Pizdec',
    source_: 'source',
    recommends: '4'
  },
  {
    id: 3,
    workTitle: 'ВЫПИЛЮСЬ',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '3Pizdec',
    source_: 'source',
    recommends: '5'
  },
  {
    id: 4,
    workTitle: 'А',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '4Pizdec',
    source_: 'source',
    recommends: '2'
  },
  {
    id: 5,
    workTitle: 'НЕТ',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '5Pizdec',
    source_: 'source',
    recommends: '1'
  },
  {
    id: 6,
    workTitle: 'Я',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '6Pizdec',
    source_: 'source',
    recommends: '0'
  },
  {
    id: 7,
    workTitle: 'ВСКРОЮ',
    endDate: 'EPTODAY',
    classType: 'lecture',
    studyLink: 'https://achika.herokuapp.com/',
    result: '7Pizdec',
    source_: 'source',
    recommends: '6'
  },
  {
    id: 8,
    workTitle: 'Чикадрило',
    endDate: 'Тупой',
    classType: 'Бездарный',
    studyLink: 'Хуесос',
    result: 'И',
    source_: 'Гнилой',
    recommends: 'Аутист'
  }
];


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/api/data', (req, res) => {
  res.send(ELEMENT_DATA);
})


app.post('/api/upload', (req, res) => {
  let subject = req.body.subject;
  let matType = req.body.matType;
  let taskTitle = req.body.taskTitle;
  let taskType = req.body.taskType;
  let comment = req.body.comment;

  console.log("subject: " + subject);
  console.log("matType: " + matType);
  console.log("taskTitle: " + taskTitle);
  console.log("taskType: " + taskType);
  console.log("comment: " + comment);

  console.log("server (not json): " + JSON.stringify(req.body));
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

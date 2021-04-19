const mysql = require('mysql');
const pool = require('../config/mysqlDB')
const bcrypt = require('bcrypt')


module.exports.register = async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const registerDate = Date.now().toString();

    console.log("our password: " + req.body.password);
    console.log("hashed password: " + hashedPassword);

    res.status(201).send();


    const user = {
      name: req.body.name,
      surname: req.body.surname,
      patronymic: req.body.patronymic,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      registerDate: Date.now().toString(),
      address: req.body.address,
      password: hashedPassword,
      //social networks
      website: req.body.website,
      github: req.body.github,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      facebook: req.body.facebook
    }


    const cmd = "INSERT INTO students (name,surname, patronymic, email, phoneNumber, registerDate,\n" +
      "address, password, website, github, twitter, instagram, facebook)\n" +
      "VALUES (?, ?, ?, ?, ?, ?, ?, ?,\n" +
      "?, ?, ?, ?, ?);"

    const inserts = [req.body.name, req.body.surname, req.body.patronymic, req.body.email,
      req.body.phoneNumber, registerDate, req.body.address,
      hashedPassword, req.body.website, req.body.github,
      req.body.twitter, req.body.instagram, req.body.facebook];

    pool.query(mysql.format(cmd, inserts), (err, result) => {
      if (err) throw err
      console.log("Student " + user.name + " inserted.")
    })

  } catch {
    res.status(500).send();
  }
}

let userEmail;

module.exports.login = function (req, res) {

  const cmd = 'select password from students where email = ?';

  const inserts = [req.body.email];
  pool.query(mysql.format(cmd, inserts), (err, rows, field) => {
    if (err) throw err
    if (rows.length === 0) {
      return res.status(400).send("User doesn't exist");
    }
    bcrypt.compare(req.body.password, rows[0].password, function (err, result) {
      if (err) throw err;

      if (result) {
        userEmail = req.body.email
        res.send("Success")
      } else {
        return res.json({success: false, message: 'incorrect password'})
      }
    })
  })
}


module.exports.user = function (req, res) {

  const cmd = 'select name, surname, patronymic, email, phoneNumber, registerDate,\n' +
    'address, website, github, twitter, instagram, facebook from students where email = ?';

  //console.log("User email after login: " + userEmail)
  const inserts = [userEmail];

  pool.query(mysql.format(cmd, inserts), (err, rows, field) => {
    if (err) throw err
    res.send(rows);

  })
}

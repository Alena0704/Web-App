const pool = require('../config/mysqlDB')


module.exports.tableData = function (req, res) {
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
}

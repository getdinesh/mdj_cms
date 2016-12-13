/**
 * Created by dinesh on 11/20/16.
 */
var express = require('express');
var logger = require('morgan');

var router = express.Router();


var dbConn = require('../dbaccess/dbconn');
var objStudent = require('../model/student');

/* post users listing. */
router.get('/', function(req, res, next) {
  var studentName = req.query.name;
  var conn = dbConn.getConnection();
  if (conn !== null) {
    var result = objStudent.setStudent(studentName, conn);
    res.send('welcome to student ' + result);
  }
  else {
      res.send("Not able to connect database");
  }

});

module.exports = router;







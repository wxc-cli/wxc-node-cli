const mysql = require('mysql');

const pool = mysql.createPool({
  host: '0.0.0.0', //这是数据库的地址
  user: 'wxc', //需要用户的名字
  password: '159874', //用户密码 ，如果你没有密码，直接双引号就是
  database: 'mockdata', //数据库名字
});

function query(sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release();
    });
  });
} //对数据库进行增删改查操作的基础

exports.query = query;

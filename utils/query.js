const db = require('./db');

// 查询
/*
 * 参数data：
 *     tableName: 表名
 *     cols: 搜索的列
 *     query: 搜索条件
 *     order: 排序条件
 * */
let find = function (data) {
  let tableName = data.tableName || '';
  let cols = data.cols || '*';
  let query = data.query ? ' AND ' + data.query : '';
  let limit = data.limit ? `LIMIT ${data.limit}` : '';
  let order = data.order ? `ORDER BY ${data.order}` : '';
  let sql = `SELECT ${cols} FROM ${tableName} WHERE 1 = 1 ${query} ${order}  ${limit} `;
  console.log(sql);

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

// 新增
/*
 * 参数data：
 *     tableName: 表名
 *     cols: 插入的列
 *     values: 新增的值
 * */
let insert = function (data) {
  let tableName = data.tableName || '';
  let cols = data.cols || '';
  let values = data.values || '';
  let sql = `INSERT INTO ${tableName} (${cols}) VALUES (${values})`;
  console.log(sql);

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      console.log(err, rows);
      resolve(rows);
    });
  });
};

// 新增多条
/*
 * 参数data：
 *     tableName: 表名
 *     cols: 插入的列
 *     values: 新增的值
 * */
let insertMuti = function (data) {
  let tableName = data.tableName || '';
  let cols = data.cols || '';
  let values = data.values || '';
  let sql = `INSERT INTO ${tableName} (${cols}) VALUES ${values}`;
  console.log(sql);

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      console.log(err, rows);
      resolve(rows);
    });
  });
};

// 获取新增多条sql
/*
 * 参数data：
 *     tableName: 表名
 *     cols: 插入的列
 *     values: 新增的值
 * */
let getInsertMutiSql = function (data) {
  let tableName = data.tableName || '';
  let cols = data.cols || '';
  let values = data.values || '';
  let sql = `INSERT INTO ${tableName} (${cols}) VALUES ${values}`;
  console.log(sql);

  return sql;
};

// 编辑
/*
 * 参数data：
 *     tableName: 表名
 *     cols: 修改的列，以键值对的方式 {name: 1}
 *     query: 修改条件
 * */
let update = function (data) {
  let tableName = data.tableName || '';
  let cols = '';
  if (data.cols) {
    let arr = [];
    for (let i in data.cols) {
      arr.push(
        data.cols[i] === null || (!isNaN(data.cols[i]) && data.cols[i] !== '')
          ? ` ${i} = ${data.cols[i]} `
          : ` ${i} = '${data.cols[i]}' `
      );
    }
    cols = arr.join(',');
  }
  let query = data.query || '1=1';
  let sql = `UPDATE ${tableName} SET ${cols} WHERE ${query}`;
  console.log(sql);

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

// 获取编辑sql
/*
 * 参数data：
 *     tableName: 表名
 *     cols: 修改的列，以键值对的方式 {name: 1}
 *     query: 修改条件
 * */
let updateSql = function (data) {
  let tableName = data.tableName || '';
  let cols = '';
  if (data.cols) {
    let arr = [];
    for (let i in data.cols) {
      arr.push(
        data.cols[i] === null || (!isNaN(data.cols[i]) && data.cols[i] !== '')
          ? ` ${i} = ${data.cols[i]} `
          : ` ${i} = '${data.cols[i]}' `
      );
    }
    cols = arr.join(',');
  }
  let query = data.query || '1=1';
  let sql = `UPDATE ${tableName} SET ${cols} WHERE ${query}`;
  console.log(sql);

  return sql;
};

// 删除
/*
 * 参数data：
 *     tableName: 表名
 *     query: 删除条件
 * */
let del = function (data) {
  let tableName = data.tableName || '';
  let query = data.query || '1=1';
  let sql = `DELETE FROM ${tableName} WHERE ${query}`;
  console.log(sql);

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

// 删除
/*
 * 参数data：
 *     tableName: 表名
 *     query: 删除条件
 * */
let getDelSql = function (data) {
  let tableName = data.tableName || '';
  let query = data.query || '1=1';
  let sql = `DELETE FROM ${tableName} WHERE ${query}`;
  console.log(sql);

  return sql;
};

// 自定义操作数据库
/*
 * 参数data：
 *     sql: sql
 * */
let query = function (data) {
  let sql = data.sql || '';
  console.log(11111, sql);

  return new Promise((resolve, reject) => {
    db.query(sql, (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

exports.find = find;
exports.insert = insert;
exports.insertMuti = insertMuti;
exports.getInsertMutiSql = getInsertMutiSql;
exports.update = update;
exports.updateSql = updateSql;
exports.del = del;
exports.getDelSql = getDelSql;
exports.query = query;

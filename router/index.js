// router 引入的是一个方法
const router = require('koa-router')();

require('./test')(router);

module.exports = router;

const Koa = require('koa');
const path = require('path');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const router = require('./router');
const { verifyTokenMiddleware } = require('./middleware');
const app = new Koa();
const static = serve(path.join(__dirname) + '/static/');

app.use(static);
app.use(cors());
app.use(bodyParser());
app.use(verifyTokenMiddleware);
// 通过app.use启用路由,其他中间件也由app.use启用
app.use(router.routes(), router.allowedMethods());

app.listen(3000);

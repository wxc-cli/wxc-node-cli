const { successResult, failResult } = require('../../utils/callbackResult');
module.exports = (router) => {
  router.get('/test', async (ctx) => {
    const { id } = ctx.request.query;
    successResult(ctx.response, id || '没有参数id');
    return;
  });
  router.post('/test', async (ctx) => {
    const { id } = ctx.request.body;
    successResult(ctx.response, id || '没有参数id');
    return;
  });
};

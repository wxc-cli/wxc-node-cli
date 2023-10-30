const { verifyToken } = require('../utils/token');
const { expiredResult } = require('../utils/callbackResult');
const noTokenUrls = ['/login'];

// 校验 Token 的中间件
const verifyTokenMiddleware = async (ctx, next) => {
  // 获取请求路径
  const path = ctx.path;
  // 如果请求路径为 /public，则跳过校验
  if (noTokenUrls.includes(path)) {
    await next(); // 执行下一个中间件
    return;
  }
  // 从请求头获取 token
  const token = ctx.header.authorization?.replace(/^Bearer\s/, '');
  if (!token) {
    expiredResult(ctx.response);
    return;
  }
  try {
    // 解密和验证 token
    const decoded = verifyToken(token);
    console.log(decoded); // 输出解密后的数据对象
    if (!decoded) {
      expiredResult(ctx.response);
      return;
    }
    ctx.state.userInfo = decoded;
    await next(); // 执行下一个中间件
  } catch (err) {
    expiredResult(ctx.response);
  }
};

exports.verifyTokenMiddleware = verifyTokenMiddleware;

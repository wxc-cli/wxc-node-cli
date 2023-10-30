const jwt = require('jsonwebtoken');

const secretKey = 'REST_HOUSE_TOKEN_KEY'; // 可替换为自己的密钥

/**
 * 根据用户信息生成token
 * @param {*} user
 */
exports.getToken = (userData) => {
  console.log(userData);
  const token = jwt.sign({ ...userData }, secretKey, { expiresIn: '8h' }); // 生成 token，8h有效
  return token;
};

/**
 * 判断token是否存在或者是否在有效期内
 * 如果在，返回用户信息
 * @param {*} token
 */
exports.verifyToken = (token) => {
  if (!token) return false;

  const decoded = jwt.verify(token, secretKey);
  const exp = decoded.exp;
  const now = Math.floor(Date.now() / 1000);
  if (exp && now > exp) {
    return false;
  } else {
    return decoded;
  }
};

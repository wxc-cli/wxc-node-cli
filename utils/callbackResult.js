exports.successResult = (response, data) => {
  response.body = {
    code: 0,
    data: data,
    succeed: true,
    msg: null,
  };
};

exports.failResult = (response, msg) => {
  response.body = {
    code: 10000,
    result: null,
    succeed: false,
    msg: msg || '请求失败,请联系管理员',
  };
};

exports.expiredResult = (response) => {
  response.body = {
    code: 10104,
    result: null,
    succeed: false,
    msg: '登录过期，请重新登录',
  };
};

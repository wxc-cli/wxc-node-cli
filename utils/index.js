/**
 * 将左链接查询到的一对多转化成一对多形式
 * @author wxc
 * @param {any} arr // sql查询结果
 * @param {any} key // 不重复的主键
 * @param {any} oneKeys // 一对多的1所有的键值
 * @param {any} moreKey // 生成的多表的key值
 * @returns {any}
 */
exports.getOneToMoreList = function getOneToMoreList(
  arr,
  key,
  oneKeys,
  moreKey
) {
  const res = [];
  arr.forEach((item) => {
    let rObj = res.find((r) => r[key] === item[key]);
    if (!rObj) {
      let obj = {
        [moreKey]: [],
      };
      oneKeys.forEach((one) => {
        obj[one] = item[one];
      });
      let moreObj = {};
      for (let i in item) {
        if (oneKeys.includes(i)) {
          obj[i] = item[i];
        } else {
          moreObj[i] = item[i];
        }
      }
      if (Object.values(moreObj).find((value) => !!value)) {
        obj[moreKey].push(moreObj);
      }
      res.push(obj);
    } else {
      let moreObj = {};
      for (let i in item) {
        if (!oneKeys.includes(i)) {
          moreObj[i] = item[i];
        }
      }
      rObj[moreKey].push(moreObj);
    }
  });

  return res;
};

function getComplate0(num) {
  return num < 10 ? '0' + num : num;
}

exports.getDateStr = function getDateStr(d) {
  let date = d || new Date();
  return (
    date.getFullYear() +
    '-' +
    getComplate0(date.getMonth() + 1) +
    '-' +
    getComplate0(date.getDate())
  );
};

exports.getDateDetailStr = function getDateDetailStr(d) {
  let date = d || new Date();
  return (
    date.getFullYear() +
    '-' +
    getComplate0(date.getMonth() + 1) +
    '-' +
    getComplate0(date.getDate()) +
    ' ' +
    getComplate0(date.getHours()) +
    ':' +
    getComplate0(date.getMinutes()) +
    ':' +
    getComplate0(date.getSeconds())
  );
};

exports.getComplate0 = getComplate0;

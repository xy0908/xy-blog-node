const jwt = require('jsonwebtoken');
const privateKey = "XIAO_YANG_TOKEN";

// 设置token
exports.createToken = (value) => {
  return "Bearer " + jwt.sign(value, privateKey, { expiresIn: "3days" });
}

// 解析token
exports.verToken = (token) => {
  return new Promise((res) => {
    jwt.verify(token, privateKey, (err, data) => {
      if (!data) {
        res(false)
      } else {
        res(data)
      }
    })
  })
};

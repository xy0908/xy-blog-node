const mongoose = require("mongoose");
// 用户信息表
module.exports = mongoose.model(
  "mongoRoot",
  new mongoose.Schema(
    {
      rootName: String, // 账号名称
      rootPass: String, // 账号密码
    },
    {
      versionKey: false
    }
  )
)

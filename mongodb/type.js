const mongoose = require("mongoose");
// 用户信息表
module.exports = mongoose.model(
  "mongoType",
  new mongoose.Schema(
    {
      type: String,     // 文章类型
    },
    {
      versionKey: false
    }
  )
)

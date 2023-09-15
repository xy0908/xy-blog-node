const mongoose = require("mongoose");
// 用户信息表
module.exports = mongoose.model(
  "mongoRecommendBooks",
  new mongoose.Schema(
    {
      bookName: String,
      img: String,
      time: String
    },
    {
      versionKey: false
    }
  )
)

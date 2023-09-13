const mongoose = require("mongoose");

// 最近动态
module.exports = mongoose.model(
  "mongoNewTrends",
  new mongoose.Schema(
    {
      trends: String,
      time: String,
    },
    {
      versionKey: false
    }
  )
)

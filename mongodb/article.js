const mongoose = require("mongoose");
// 用户信息表
module.exports = mongoose.model(
  "mongoArticle",
  new mongoose.Schema(
    {
      type: String,     // 文章类型
      title: String,    // 文章标题
      describe: String,  // 文章描述
      author: String,  // 文章作者
      img: String,   // 文章封面
      file: String,  // 文章源文件
      time: String,  // 文章发布时间
      browse: Number // 浏览量
    },
    {
      versionKey: false
    }
  )
)

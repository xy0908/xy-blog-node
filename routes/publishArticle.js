const express = require("express");
const router = express.Router();
const {
  publishArticleBackground
} = require("../module/publishArticle");

// 发布文章的背景图片
router.get("/publishArticleBackground", publishArticleBackground)

module.exports = router

const express = require("express");
const router = express.Router();
const {
  adminBackground,
  logon,
  automaticLogon,
  storeImg,
  storeFile,
  submitToDataBank,
  getArticle,
  deleteArticle,
  publishType,
  getType,
  deleteType,
  recommendArticle
} = require("../module/admin");

// 发布文章的背景图片
router.get("/adminBackground", adminBackground);

// 登录
router.post("/logon", logon);

// 自动登录
router.post("/automaticLogon", automaticLogon);

// 上传图片
router.post("/storeImg", storeImg);

// 上传文件
router.post("/storeFile", storeFile);

// 提交数据到数据库中
router.post("/submitToDataBank", submitToDataBank);

// 获取所有文章
router.get("/getArticle", getArticle);

// 删除类型
router.post("/deleteArticle", deleteArticle)

// 发布文章类型
router.post("/publishType", publishType);

// 获取文章类型
router.get("/getType", getType);

// 删除文章类型
router.post("/deleteType", deleteType)

// 推荐文章
router.post("/recommendArticle", recommendArticle)

module.exports = router

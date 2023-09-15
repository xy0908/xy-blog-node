const express = require("express");
const router = express.Router();
const { storeImg, submitToDataBank, getBooks, deleteBook } = require("../module/recommendBooks");


// 上传图片
router.post("/storeImg", storeImg);

// 把推荐的书籍数据 提交到 数据库中
router.post("/submitToDataBank", submitToDataBank)

// 获取所有的推荐书籍
router.get("/getBooks", getBooks)

// 删除书籍
router.post("/deleteBook", deleteBook)


module.exports = router

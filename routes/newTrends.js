const express = require("express");
const router = express.Router();
const { setNewTrends, getNewTrends, deleteNewTrends } = require("../module/newTrends");

// 设置新的动态
router.post("/setNewTrends", setNewTrends);

// 获取最新动态
router.get("/getNewTrends", getNewTrends)

// 删除最新动态
router.post("/deleteNewTrends", deleteNewTrends)


module.exports = router

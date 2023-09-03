const express = require("express");
const router = express.Router();
const { getMusic } = require("../module/music");

// 获取音乐
router.get("/getMusic",getMusic)

module.exports = router

const express = require("express");
const router = express.Router();
const {
    email,
    bg
} = require("../module/contact");

// 背景图片
router.get("/bg",bg)

// 发送邮件
router.post("/email",email)

module.exports = router


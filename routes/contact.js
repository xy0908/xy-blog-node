const express = require("express");
const router = express.Router();
const {
    email,
} = require("../module/contact");

// 发送邮件
router.post("/email",email)

module.exports = router


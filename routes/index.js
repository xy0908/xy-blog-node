const express = require("express");
const router = express.Router();
const {
    wellKnownSaying,
    carousel,
    picture,
    bolgInfo
} = require("../module/index")

// 首页名言
router.get("/wellKnownSaying",wellKnownSaying)

// 首页轮播图
router.get("/carousel",carousel)

// 首页图片区
router.get("/picture",picture)

// 博客信息
router.get("/bolgInfo",bolgInfo)


module.exports = router

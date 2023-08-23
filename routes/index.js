const express = require("express");
const router = express.Router();
const {
    wellKnownSaying,
    carousel
} = require("../module/index")

// 首页名言
router.get("/wellKnownSaying",wellKnownSaying)

// 首页轮播图
router.get("/carousel",carousel)

module.exports = router

const express = require("express")
const router = express.Router()
const {
    table,
    seekArticle
} = require("../module/teaParty")

// 标签
router.get("/table", table)

// 查找文章
router.post("/seekArticle", seekArticle)


module.exports = router

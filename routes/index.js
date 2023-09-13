const express = require("express");
const router = express.Router();
const {
    wellKnownSaying,
    carousel,
    picture,
    bolgInfo,
    newTrends,
    recommendedBooks,
    loginDisplay,
    indexArticle,
    seeArticle
} = require("../module/index")

// 首页名言
router.get("/wellKnownSaying", wellKnownSaying);

// 首页轮播图
router.get("/carousel", carousel);

// 首页图片区
router.get("/picture", picture);

// 博客信息
router.get("/bolgInfo", bolgInfo);

// 最新动态
router.get("/newTrends", newTrends);

// 推荐书籍
router.get("/recommendedBooks", recommendedBooks);

// 登录页面显示
router.get("/loginDisplay", loginDisplay);

// 首页文章
router.get("/indexArticle", indexArticle);

// 查看文章
router.post("/seeArticle", seeArticle)

module.exports = router

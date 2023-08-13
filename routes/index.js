const express = require("express");
const router = express.Router();
const { wellKnownSaying } = require("../module/index")

// 首页名言
router.get("/wellKnownSaying",wellKnownSaying)




module.exports = router

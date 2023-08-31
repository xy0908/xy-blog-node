const  express = require("express");
const router = express.Router();
const  {
    aboutInfo
} = require("../module/about");

router.get("/aboutInfo",aboutInfo)

module.exports = router

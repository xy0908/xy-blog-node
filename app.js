const express = require('express');
const app = express();

app.use(express.static("./public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// 用户路由
app.use("/index", require("./routes/index"))


app.listen("1212", () => {
    console.log("1212端口执行");
})

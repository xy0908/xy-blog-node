const express = require('express');
const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/index", require("./routes/index"));
app.use("/teaParty", require("./routes/teaParty"));
app.use("/about", require("./routes/about"));
app.use("/contact", require("./routes/contact"));
app.use("/music", require("./routes/music"))
app.use("/publishArticle", require("./routes/publishArticle"))

// 

app.listen("1212", () => {
    console.log("1212端口执行");
})

const fs = require("fs");
const path = require("path");

//静态文章资源目录
let url = path.resolve(__dirname, "../public/article");

// 获取文章标签目录名称
let directory = fs.readdirSync(url);


// 标签
exports.table = async (req, res) => {
    let table = [];
    directory.forEach(item => {
        table.push({
            text: item,
            isActivation: false
        })
    })
    table.unshift({
        text: "全部",
        isActivation: true
    })
    res.send(table)
}

// 查找文章
exports.seekArticle = async (req, res) => {
    let url = "http://localhost:1212/images/loginDisplay/";

    // 获取所有目录下的目录;
    // let directory = fs.readdirSync(url);
    // let a = fs.readdirSync(url);
    // console.log(a);
    // console.log(directory);
    // directory.forEach(item => {
    //     // let a = fs.readdirSync(url + "/" + item);
    //     console.log(url + "/" + item);
    // })


    res.send([
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        },
        {
            backgroundImages: url + "background.jpg",
            table: ["前端"],
            title: "Vue3混合组件库搭建",
            message: "手把手教你搭建组件库",
            time: {
                icon: "iconfont icon-rili",
                text: "2022.09.08"
            },
            author: {
                icon: "iconfont icon-denglu-copy",
                text: "白给崽小羊"
            }
        }
    ])
}

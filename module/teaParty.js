const fs = require("fs");
const path = require("path");
const mongoType = require("../mongodb/type")

//静态文章资源目录
let url = path.resolve(__dirname, "../public/article");

// 获取文章标签目录名称
let directory = fs.readdirSync(url);


/**
 * @function
 * @description 前端标签
 * 
 * @param { Array<string> } databaseType 数据库的文章类型
 * @param { Array<string> } filterData 过滤后的数据 返回给前端的数据
*/
exports.table = async (req, res) => {
    let databaseType = await mongoType.find();
    let filterData = [];

    databaseType.forEach(i => {
        filterData.push({
            text: i.type,
            isActivation: false
        })
    })

    filterData.unshift({
        text: "全部",
        isActivation: true
    })

    res.send(filterData)
}

// 查找文章
exports.seekArticle = async (req, res) => {
    let url = "http://localhost:1212/images/loginDisplay/";


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

const mongoType = require("../mongodb/type");
const mongoArticle = require("../mongodb/article");


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
/**
 * @function
 * @description 获取文章 
 * 
 * @param { string } key 前端传递的key值 跟key值查询数据
 * @param { any } filterData 过滤后的数据
*/
exports.seekArticle = async (req, res) => {
    let { key } = req.body;
    let filterData = [];

    if (key === "全部") {
        let mongoData = await mongoArticle.find();
        mongoData.forEach(i => {
            filterData.push({
                backgroundImages: `http://localhost:1212${i.img.replace(/\\/g, '/')}`,
                table: [`${i.type}`],
                title: i.title,
                message: i.describe,
                time: {
                    icon: "iconfont icon-rili",
                    text: i.time
                },
                author: {
                    icon: "iconfont icon-denglu-copy",
                    text: i.author
                },
                browse: {
                    icon: "iconfont icon-liulan",
                    text: i.browse
                },
                file: i.file,
                _id: i._id
            })
        })
    } else {
        let data = await mongoArticle.find({ type: key });
        data.forEach(i => {
            filterData.push({
                backgroundImages: `http://localhost:1212${i.img.replace(/\\/g, '/')}`,
                table: [`${i.type}`],
                title: i.title,
                message: i.describe,
                time: {
                    icon: "iconfont icon-rili",
                    text: i.time
                },
                author: {
                    icon: "iconfont icon-denglu-copy",
                    text: i.author
                },
                browse: {
                    icon: "iconfont icon-liulan",
                    text: i.browse
                },
                file: i.file,
                _id: i._id
            })
        })
    }

    res.send({ code: 1, value: "获取成功", data: filterData })
}

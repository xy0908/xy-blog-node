const fs = require("fs");
const multer = require('multer');
const mongoRecommendBooks = require("../mongodb/recommendBooks");
const { uploadBooksImg } = require("./plugin/handlerArticle");


/**
 * @function
 * @description 过滤数据
 * 
 * @param { string } handlerTarget 需要处理的目标
 * @param { string } url 操作目标的地址
 * 
 * @param { mongoArticle } mongoData 获取的数据库数据
 * @param { Array<string> } filterMongoData 获取数据库需要的目标数据
 * @param { Array<string> } localityAllData 本地文件数据
 * @param { Array<string> } deleteData 过滤出本地 需要删除的数据
 * 
*/

async function filterData(handlerTarget, url) {
  let mongoData = await mongoRecommendBooks.find()
  let filterMongoData = [];

  mongoData.forEach(item => {
    filterMongoData.push(item[handlerTarget].split("\\")[2])
  })

  let localityAllData = fs.readdirSync(`${url}`)

  let deleteData = localityAllData.concat(filterMongoData).filter((v, i, arr) => {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  })

  // 删除本地不存在的数据
  deleteData.forEach(item => {
    console.log(url + item);
    fs.unlinkSync(`${url}/` + item)
  })
}


/**
 * @function
 * @description 接受上传的文章封面 保存到数据库
*/
exports.storeImg = async (req, res) => {
  uploadBooksImg(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.send({ code: 0, value: "上传错误", data: "" })
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.send({ code: 0, value: "未知错误", data: "" })
    }
    let url = req.file.path.split("public")[1];
    res.send({ data: url });
  })
}


/**
 * @function
 * @description 提交数据到数据库中
*/
exports.submitToDataBank = async (req, res) => {
  let { bookName, img, time } = req.body;
  let result = await mongoRecommendBooks.create({ bookName, img, time });
  if (result) {
    filterData("img", "./public/recommendBooks");
    return res.send({ code: 1, value: "文章提交成功", data: result });
  }
  else return res.send({ code: 0, value: "文章提交失败", data: result });
}

/**
 * @function
 * @description 获取所有的推荐书籍
*/
exports.getBooks = async (req, res) => {
  let mongoData = await mongoRecommendBooks.find();
  let filterData = [];

  mongoData.forEach(i => {
    filterData.push({
      bookName: i.bookName,
      time: i.time,
      img: `http://localhost:1212${i.img.replace(/\\/g, '/')}`,
      _id: i._id,
    })
  })

  res.send({ code: 1, value: "推荐书籍获取成功", data: filterData })
}


/**
 * @function
 * @description 删除书籍
*/
exports.deleteBook = async (req, res) => {
  let { _id } = req.body;
  await mongoRecommendBooks.deleteOne({ _id })
  res.send({ code: 1, value: "删除成功" })
}

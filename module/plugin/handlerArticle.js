const multer = require("multer");
const path = require('path');

/**
 * @param { string } imgUrl 存储文章封面图片的路径
 * @param { string } fileUrl 存储文章文件的路径
*/
// eslint-disable-next-line no-undef
const imgUrl = path.resolve(__dirname, "../../public/article/img");
// eslint-disable-next-line no-undef
const fileUrl = path.resolve(__dirname, "../../public/article/file");

/**
 * @function
 * @description 上传图片
*/
const storageImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imgUrl)
  },
  filename: function (req, file, cb) {
    // console.log(Date.now() + file.originalname);
    cb(null, Date.now() + file.originalname)
  }
})

/**
 * @function
 * @description 上传文件
*/
const storageFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, fileUrl)
  },
  filename: function (req, file, cb) {
    // console.log(Date.now() + file.originalname);
    cb(null, Date.now() + file.originalname)
  }
})

exports.uploadImg = multer({ storage: storageImg }).single("file")
exports.uploadFile = multer({ storage: storageFile }).single("file")


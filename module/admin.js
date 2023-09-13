const multer = require('multer');
const fs = require("fs")
const mongoRoot = require("../mongodb/root");
const mongoArticle = require("../mongodb/article");
const mongoType = require("../mongodb/type")
const { createToken, verToken } = require("./plugin/token");
const { uploadImg, uploadFile } = require("../module/plugin/handlerArticle");

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
  let mongoData = await mongoArticle.find()
  let filterMongoData = [];

  mongoData.forEach(item => {
    filterMongoData.push(item[handlerTarget].split("\\")[3])
  })

  let localityAllData = fs.readdirSync(`${url}`)

  let deleteData = localityAllData.concat(filterMongoData).filter((v, i, arr) => {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  })

  // 删除本地不存在的数据
  deleteData.forEach(item => fs.unlinkSync(`${url}/` + item))
}



/**
 * @function
 * @description 发布文章的背景图片
*/
exports.adminBackground = async (req, res) => {
  res.send("http://localhost:1212/images/publishArticle/index.png");
}

/**
 * @function
 * 
 * @description 登录请求
 * 
 * @param { string } rootName 管理员账号 默认:admin
 * @param { string } rootPass 管理员密码 默认:xy123
 * 
 * @returns { code:number,value:string } 返回code值 和 加密后的token值
*/
exports.logon = async (req, res) => {
  let { rootName, rootPass } = req.body;

  /**
   * @param { boolean } bol true:数据库存在账号名称为admin的账号 false:数据库不存在
  */
  let bol = await mongoRoot.findOne({ rootName: "admin" });

  if (!bol) {
    await mongoRoot.create({
      rootName: "admin",
      rootPass: "xy123"
    })
    console.log("初始化写入成功");
  }


  /**
   * @param { boolean } result 根据前端传递的账号名称,查询账号是否存在数据库
  */
  let result = await mongoRoot.findOne({ rootName });
  if (!result) return res.send({ code: 0, value: "账号不存在" });
  if (result.rootPass !== rootPass) return res.send({ code: 0, value: "密码错误" });

  /**
   * @param { string } token 加密后的token值
  */
  let token = createToken({ token: result });
  res.send({ code: 1, value: "登录成功", token });
}

/**
 * @function
 * @description 处理自动登录
*/
exports.automaticLogon = async (req, res) => {
  /**
   * @param { string } token 前端传入的加密token
  */
  let { token } = req.body;

  if (token) {
    /**
     * @param { any } decryptToken 解密的token
     * @param { string } rootName 解密后的账号名称
     * @param { string } rootPass 解密后的账号密码
    */
    let decryptToken = await verToken(token.split(" ")[1]);
    if (decryptToken) {
      let { rootName, rootPass } = decryptToken.token;
      if (rootName === "admin" && rootPass === "xy123") res.send({ code: 1, value: "欢迎回来" })
      else res.send({ code: 0, value: "登录失败" })
    } else {
      res.send({ code: 0, value: "登录过期", data: "" })
    }
  } else {
    res.send({ code: 0, value: "登录过期", data: "" })
  }
}

/**
 * @function
 * @description 接受上传的文章封面 保存到数据库
*/
exports.storeImg = async (req, res) => {
  uploadImg(req, res, async function (err) {
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
 * @description 接受上传的文章 保存到数据库
*/
exports.storeFile = async (req, res) => {
  uploadFile(req, res, async function (err) {
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
  let { type, title, describe, author, img, file, time, browse } = req.body;
  let result = await mongoArticle.create({ type, title, describe, author, img, file, time, browse });
  if (result) {
    filterData("img", "./public/article/img")
    filterData("file", "./public/article/file")
    return res.send({ code: 1, value: "文章提交成功", data: result });
  }
  else return res.send({ code: 0, value: "文章提交失败", data: result });
}

/**
 * @function
 * @description 获取所有文章
 * 
 * @param { any } data 所有文章的数据 返回给前端
*/
exports.getArticle = async (req, res) => {
  let data = await mongoArticle.find();

  res.send({ code: 1, value: "文章获取成功", data })
}

/**
 * @function
 * @description 删除文章
*/
exports.deleteArticle = async (req, res) => {
  let { _id } = req.body;
  await mongoArticle.deleteOne({ _id })
  res.send({ code: 1, value: "删除成功" })
}


/**
 * @function
 * @description 发布文章类型
 * 
 * @param { string } type 前端传入的文章类型
 * @param { boolean } isExist 前端传入的文章类型是否存在
 * @param { Array<string> } databaseType 数据库的文章类型
*/
exports.publishType = async (req, res) => {
  let { type } = req.body;
  let isExist = false;
  let databaseType = await mongoType.find();

  databaseType.forEach(i => {
    if (isExist === false) {
      if (i.type === type) isExist = true
    }
  })

  // 不存在 保存到数据库
  if (!isExist) {
    {
      let result = await mongoType.create({ type });
      if (result) return res.send({ code: 1, value: "文章类型提交成功", data: result });
      else return res.send({ code: 0, value: "文章类型提交失败", data: result });
    }
  } else {
    return res.send({ code: 0, value: "提交失败,数据存在" });
  }
}


/**
 * @function
 * @description 获取文章类型
 * 
 * @param { Array<string> } databaseType 数据库的文章类型
*/
exports.getType = async (req, res) => {
  let databaseType = await mongoType.find();
  res.send({ code: 1, value: "文章类型获取成功", data: databaseType })
}


/**
 * @function 
 * @description 删除文章类型
*/
exports.deleteType = async (req, res) => {
  let { _id } = req.body;
  await mongoType.deleteOne({ _id })
  res.send({ code: 1, value: "删除成功" })
}

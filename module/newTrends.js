const mongoNewTrends = require("../mongodb/newTrends");


/**
 * @function
 * @description 设置新的动态
*/
exports.setNewTrends = async (req, res) => {
  let { trends, time } = req.body;
  let result = await mongoNewTrends.create({ trends, time });
  if (result) return res.send({ code: 1, value: "动态发布成功", data: result });
  else return res.send({ code: 0, value: "动态发布失败", data: result });
}

/**
 * @function
 * @description 获取最新动态
*/
exports.getNewTrends = async (req, res) => {
  let mongoData = await mongoNewTrends.find();
  res.send({ code: 1, value: "最新动态获取成功", data: mongoData })
}

exports.deleteNewTrends = async (req, res) => {
  let { _id } = req.body;
  await mongoNewTrends.deleteOne({ _id })
  res.send({ code: 1, value: "删除成功" })
}

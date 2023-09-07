
const nodemailer = require("nodemailer");

// 发送邮件
function sendingEmailer({userName,email,theme,emailInfo},callback){
    // 创建邮件程序
    let transporter = nodemailer.createTransport({
        // 设置qq发送
        host: "smtp.qq.com",
        auth: {
            user: "2650628380@qq.com", // 发送邮件账号
            pass: "hswovxvbfudbeaha", // 邮件账号授权码
        },
    });
    //配置信息对象
    let info =[
        {   // 发送给自己看
            from: '"XiaoYang"<2650628380@qq.com>',          //  邮件发送人名称加地址
            to: "2650628380@qq.com",                    // 发送给谁
            subject: theme,                             //  主题
            text:  userName +"先生(女士):"+ emailInfo,  // 正文
        },
        {   // 发送给申请人看
            from: '"XiaoYang"<2650628380@qq.com>',    //  邮件发送人名称加地址
            to: email, // 发送给谁
            subject: "自动回复邮件", //  主题
            text: "已经接收你发送的邮件,我会在看到邮件事件立即联系你", // 正文
        }
    ]
    // 邮件发送
    info.forEach((item,index)=>{
        transporter.sendMail(item,(err,info)=>{
            if(err){
                return  callback({
                    code:0,value:'发送邮件失败'
                })
            }
            if(index==1){
                return callback({
                    code:1,value:'发送邮件成功'
                })
            }
        });
    })
}
exports.email = async (req,res)=>{
    let {userName,email,theme,emailInfo} = req.body
    // 传递数据,并传递回调函数
    sendingEmailer({userName,email,theme,emailInfo},callFun)
    function callFun(value){
        res.send(value)
    }
}

// 背景图片
exports.bg = async (req,res)=>{
    res.send("http://localhost:1212/images/contact/bg.png")
}

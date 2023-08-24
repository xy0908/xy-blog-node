// 首页名言
exports.wellKnownSaying = async  (req,res)=>{
    const arr = [
        "见微知著，识人心志",
        "星辰虽小,难掩其明",
        "不过星霭云雾,岂可挡我七窍清明",
        "君以国士待吾,吾自以国士报之",
        "观滴水而知沧海,窥一举察人心",
        "策谋本天成妙手偶得",
        "公此行欲何为，吾自有量度。",
        "唯望此生，不负仕节",
        "杀身有地，报国有时",
        "七尺之身，既已许国难在许公",
        "或忠信而死节兮，或疑謾而不宜",
        "生食汉禄，死为汉臣",
        "秉忠贞之志，守谦退之节",
        "荡尘涤污，重整河山，便在今日!",
        "效伊尹霍光，以返天下清明",
        "我自冷眼看世界，不问天下是与非",
        "麒麟子孙，终将执掌中原大地",
        "事公须就谨，未敢回顾，唯恐曾母之思",
        "乌伤北望，断我愁肠",
        "治疾及其未笃，除患贵其未",
        "夫国之有民，犹水之有舟，停则以安，扰则以危",
        "据疆土为强富，智威福为尊贵。曜德义为荣显，永世胤为风祚",
        "苟所闻见，夕不待旦，岂能因私废公乎",
        "人亦如心，或居空而渺然，或为晦而明夜",
        "不要因为暂时的得失而胆怯",
        "诸君唤我为贼，然我所窃何物",
        "避其锋芒权且忍让",
        "汝若包藏祸心，顷刻昭于清明",
    ];
    res.send(arr[Math.floor(Math.random() * arr.length )])
}

// 首页轮播图片
exports.carousel = async  (req,res)=>{
    let url = "http://localhost:1212/carousel/";
    res.send([
        {
            img:url+"1.jpg",
            title:"Vue3混合组件库搭建实战篇"
        },
        {
            img:url+"222.png",
            title:"Vue3混合组件库搭建实战篇"
        },
        {
            img:url+"777.png",
            title:"Vue3混合组件库搭建实战篇"
        }
    ])
}

// 首页图片区
exports.picture = async (req,res)=>{
    let url = "http://localhost:1212/picture/index";
    res.send([
        url+"/1.jpg",
        url+"/2.jpg"
    ])
}

// 博客信息
exports.bolgInfo = async (req,res)=>{
    // 1.图片  2.文章  3.留言
    res.send({
        backgroundImg:"http://localhost:1212/bolgInfo/bg.jpg",
        article:11,
        message:20
    })
}

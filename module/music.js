const axios = require("axios")

// 获取榜单id
// async function getSongSheetId(){
//     let {data} = await axios("http://localhost:3000/toplist")
//     return data.list[3].id
// }

// 获取音乐的id 我的歌单
async function getAllMusicId() {
    let arr = []
    let { data } = await axios.get(`http://localhost:3000/playlist/detail?id=8710410919`)

    data.playlist.tracks.forEach(item => {
        arr.push({
            name: item.name,
            id: item.id,
            picUrl: item.al.picUrl
        })
    })

    return arr
}

// 获取音乐url.
async function getAllMusicUrl(allMusicId) {
    let arr = []
    for (const key of allMusicId) {
        let { data } = await axios.get(`http://localhost:3000/song/url?id=${key.id}`);
        arr.push({
            name: key.name,
            url: data.data[0].url,
            picUrl: key.picUrl
        })
    }
    return arr
}

// 获取音乐歌词
// async function getAllMusicLyric(allMusic) {
//     for (const key of allMusic) {
//         let {data} = await axios(`http://localhost:3000/lyric?id=${key.id}`)
//         key.lrc = data.lrc.lyric
//     }
//     return allMusic
// }

// 获取音乐
exports.getMusic = async (req, res) => {
    // 获取热歌榜单前30首音乐id
    let allMusicId = await getAllMusicId();
    // 获取音乐的url地址
    let allMusicUrl = await getAllMusicUrl(allMusicId)
    res.send(allMusicUrl)
}

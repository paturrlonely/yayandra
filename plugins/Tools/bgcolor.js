const axios = require('axios')
const uploadImage = require('../../lib/uploadImage')

     

let handler = async (m, { hanz, text, args, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar Dengan Caption .bgcolor blue'
m.reply(mess.wait)
let media = await q.download()
let url = await uploadImage(media)

let cap = `*Result from* : ${usedPrefix + command} `+ text

const payload = {
  "image_file_b64": "",
  "image_url": `${url}`,
  "size": "preview",
  "type": "auto",
  "type_level": "1",
  "format": "jpg",
  "roi": "0% 0% 100% 100%",
  "crop": false,
  "crop_margin": "0",
  "scale": "original",
  "position": "original",
  "channels": "rgba",
  "add_shadow": false,
  "semitransparency": true,
  "bg_color": `${text}`,
  "bg_image_url": ""
}

axios({
  method: "POST", 
  url: "https://api.remove.bg/v1.0/removebg",
  data: payload,
  headers: {
    "accept": "application/json",
    "X-API-Key": "QteAJBpdL4oeNXebAde2WqCb",
    "Content-Type": "application/json"
  }
})
.then(( res ) => {

  const buffer = Buffer.from(res.data.data.result_b64, "base64")
hanz.sendFile(m.chat, buffer, 'result.jpg', cap, m)
})
.catch((error) => {
  console.log(error)
})

}
handler.help = ['bgcolor']
handler.tags = ['tools']
handler.command = /^(backgroundcolor|bgcolor)$/i
handler.limit = true 

module.exports = handler
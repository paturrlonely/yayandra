const fetch = require('node-fetch');
const FormData = require('form-data');
const fileType = require('file-type'); // Menggunakan impor yang benar

let handler = async (m, { hanz, args, text, usedPrefix, command }) => {
  var out;

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/webp|image|viewOnce/g.test(mime)) return m.reply(`Reply Media Dengan Perintah\n\n${usedPrefix + command}`);
  let img = await q.download();

  if (/image/g.test(mime)) {
    out = await tourl(img);
  }
  await m.reply(mess.wait);
  try {
    let res = await fetch("https://api.ocr.space/parse/imageurl?apikey=helloworld&url=" + out).then(res => res.json());
    let result = res.ParsedResults[0].ParsedText;
    await m.reply(result);
  } catch (e) {
    throw e;
  }
};

handler.help = ['ocr'];
handler.tags = ['tools'];
handler.command = /^(ocr)$/i;
handler.premium = false;

module.exports = handler;

async function tourl(buffer) {
  let { ext } = await fileType.fromBuffer(buffer); // Menggunakan fromBuffer dari fileType
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");

  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });

  let data = await res.text();
  return data;
}

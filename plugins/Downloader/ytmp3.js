const { youtube } = require('btch-downloader')

let handler = async (m, { conn, text, setReply, usedPrefix, command }) => {
  if (!text) throw (`*Contoh:* ${usedPrefix + command} https://www.youtube.com/watch?`);
  setReply(mess.wait);
  try {
    const data = await youtube(text);
    await conn.sendMessage(m.chat, {
      audio: { url: data.mp3 },
      mimetype: 'audio/mpeg'
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

handler.help = handler.command = ['ytmp3'];
handler.tags = ['downloader'];
handler.limit = true;

module.exports = handler;
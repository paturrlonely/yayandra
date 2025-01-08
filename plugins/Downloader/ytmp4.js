const { youtube } = require('btch-downloader')

const handler = async (m, { conn, text, setReply, usedPrefix, command }) => {
  if (!text) throw (`*Example:* ${usedPrefix + command} https://www.youtube.com/watch?`);
  setReply("_Tunggu sebentar kak..._");
  try {
    const data = await youtube(text);
    await conn.sendMessage(m.chat, { 
      video: { url: data.mp4 }, 
      mimetype: 'video/mp4' 
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    throw error
  }
};

handler.help = handler.command = ['ytmp4','ytdl'];
handler.tags = ['downloader'];
handler.limit = true;

module.exports = handler;
let handler = async (m, { conn }) => {
  if (!m.quoted) throw "Balas pesan dari channel untuk mendapatkan ID.";
  
  try {
    let quotedMsg = await m.getQuotedObj();
    if (!quotedMsg || !quotedMsg.msg || !quotedMsg.msg.contextInfo) {
      throw "Pesan yang dibalas tidak berasal dari channel.";
    }
    
    let contextInfo = quotedMsg.msg.contextInfo;
    let forwardedNewsletterMessageInfo = contextInfo.forwardedNewsletterMessageInfo;
    
    if (!forwardedNewsletterMessageInfo) {
      throw "Pesan yang dibalas tidak berasal dari channel.";
    }
    
    let teks = "Channel Name: `" + forwardedNewsletterMessageInfo.newsletterName + "`\n";
    teks += "Channel Id: `" + forwardedNewsletterMessageInfo.newsletterJid + "`";
    
    await conn.reply(m.chat, teks.trim(), m);
  } catch (e) {
    console.error(e);
    throw "Gagal mendapatkan ID channel. Pastikan Anda membalas pesan yang benar dari channel.";
  }
};

handler.help = handler.command = ["ci"];
handler.tags = ["main"];
module.exports = handler;

let handler = async (m, { hanz }) => {
  let user = global.db.data.users[m.sender];
  let past = `
╭━━━━「 *BIO* 」   
┊ *💌 Name :* ${user.registered ? user.name : hanz.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *✨ Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Kepiting: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${
    user.kepiting +
    user.lobster +
    user.udang +
    user.cumi +
    user.gurita +
    user.buntal +
    user.dory +
    user.orca +
    user.lumba +
    user.paus +
    user.hiu
  }* Jenis`;
  m.reply(past);
};
handler.help = ["kolam"];
handler.tags = ["rpg"];
handler.command = /^(kotak(ikan)?|kolam(ikan)?)$/i;
handler.register = true;
handler.group = true;
handler.rpg = true;
module.exports = handler;

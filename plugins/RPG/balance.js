let handler = async (m, {hanz, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hanz.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ Pengguna hilang dari database saya`
    hanz.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌Nama* : _@${who.split('@')[0]}_
▢ *💎Diamonds* : _${user.diamond}_
▢ *⬆️XP* : _Total ${user.exp}_
▢ *MONEY* : _Total ${user.money}_
└──────────────

*NOTA :* 
Anda dapat membeli 💎 berlian menggunakan perintah
❏ *${usedPrefix}buydm <jumlah dm>*
❏ *${usedPrefix}buyalldm*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['rpg']
handler.command = ['bal', 'balance'] 
handler.onlyGroup = true
module.exports = handler;

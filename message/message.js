

module.exports = async (senderNumber, prefix,command, replyDoc) => {


global.mess = {
wait:  'ᴘᴇʀɪɴᴛᴀʜ ᴀɴᴅᴀ sᴇᴅᴀɴɢ ᴅɪᴘʀᴏsᴇs.........',      //'▰▰▰▰▰▱▱▱',
game : "ғɪᴛᴜʀ ᴘᴇʀᴍᴀɪɴᴀɴ ʙᴇʟᴜᴍ ᴅɪᴀᴋᴛɪғᴋᴀɴ ᴅɪ ɢʀᴜᴘ ɪɴɪ. sɪʟᴀᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴀᴅᴍɪɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ ɢᴀᴍᴇ sᴇʀᴜ ᴅᴀɴ ɴɪᴋᴍᴀᴛɪ ᴋᴇsᴇʀᴜᴀɴɴʏᴀ! ᴋᴇᴛɪᴋ .ɢᴀᴍᴇ ᴏɴ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ.",
nsfw :"ғɪᴛᴜʀ ɴsғᴡ sᴀᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴛᴇʀsᴇᴅɪᴀ ᴅɪ ᴄʜᴀᴛ ɪɴɪ. ɪɴɢɪɴ ᴍᴇɴɢᴀᴋsᴇs ᴋᴏɴᴛᴇɴ ᴋʜᴜsᴜs? ᴍɪɴᴛᴀ ᴀᴅᴍɪɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴɴʏᴀ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ.",
resPanel: '🚫 *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ!* \ɴ\ɴᴍᴀᴀғ, ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀɴɢɢᴏᴛᴀ *ʀᴇsᴇʟʟᴇʀ ᴘᴀɴᴇʟ*. \ɴ\ɴ✨ *ʙᴇʀɢᴀʙᴜɴɢʟᴀʜ ᴅᴇɴɢᴀɴ ᴋᴀᴍɪ ᴜɴᴛᴜᴋ ᴍᴇɴɪᴋᴍᴀᴛɪ ғɪᴛᴜʀ ᴇᴋsᴋʟᴜsɪғ ɪɴɪ!*',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
limit: `[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit`,
claimOn: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam `,
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'ɪᴛᴜ ʙᴜᴋᴀɴ sᴛɪᴄᴋᴇʀ ʙʟᴏᴋ:ᴠ',
api: 'ᴇʀʀᴏʀ ᴀᴘɪ ᴀᴛᴀᴜ ʟɪɴᴋʏᴀ ᴍᴜɴɢᴋɪɴ',
Iv: 'ʟɪɴᴋɴʏᴀ ᴇʀʀᴏʀ ʙᴀɴɢ:v',
link : "ʟɪɴᴋ ᴇʀʀᴏʀ ʙʟᴏᴋ!!!"
},

block:{
Bowner: `Maaf kak command 「 *${command}* 」 telah di block oleh owner`,
Bsystem: `Command 「 *${command}* 」telah di block oleh system karena terjadi error`
},

 only: {
prem : '「💎」ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ʙᴜʏᴘʀᴇᴍ ᴜɴᴛᴜᴋ ʙᴇʟɪ',
group: '「👥」ғɪᴛᴜʀ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴘ!',
ownerB: '「👑」ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ʙᴏᴛ!',
owner: '「👑」ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ʙᴏᴛ!',
admin: '「🤴」ғɪᴛᴜʀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ!',
Badmin: '「🤴」ғɪᴛᴜʀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ sᴇᴛᴇʟᴀʜ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ!'
 }
    }
  
global.dfail = (type) => {
let msg = {
    
rowner: "「👑」*ᴏᴡɴᴇʀ ᴏɴʟʏ* - ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ!",
owner: "「👑」*ᴏᴡɴᴇʀ ᴏɴʟʏ* - ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ!",
mods: "「🤴🏻」*ᴏᴡɴᴇʀ ᴏɴʟʏ* - ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ!",
premium: "「💎」*ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ* - ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʀ ᴘʀᴇᴍɪᴜᴍ!",
group: "「👥」*ɢʀᴏᴜᴘ ᴏɴʟʏ* - ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ɢʀᴜᴘ!",
private: "*ᴘʀɪᴠᴀᴛᴇ ᴏɴʟʏ* - ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅɪ ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ!",
admin: "「👑」*ᴀᴅᴍɪɴ ᴏɴʟʏ* - ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴜᴘ!",
selerpanel: '🚫 *ᴀᴋsᴇs ᴅɪᴛᴏʟᴀᴋ!* \ɴ\ɴᴍᴀᴀғ, ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀɴɢɢᴏᴛᴀ *ʀᴇsᴇʟʟᴇʀ ᴘᴀɴᴇʟ*. \ɴ\ɴ✨ *ʙᴇʀɢᴀʙᴜɴɢʟᴀʜ ᴅᴇɴɢᴀɴ ᴋᴀᴍɪ ᴜɴᴛᴜᴋ ᴍᴇɴɪᴋᴍᴀᴛɪ ғɪᴛᴜʀ ᴇᴋsᴋʟᴜsɪғ ɪɴɪ!*',
botAdmin: "「🚩」ᴊᴀᴅɪᴋᴀɴ ʙᴏᴛ sᴇʙᴀɢᴀɪ ᴀᴅᴍɪɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ",
onlyprem: "「💰」ʜᴀɴʏᴀ ᴜsᴇʀ *ᴘʀᴇᴍɪᴜᴍ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ ᴅɪ *ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ*!!",
nsfw: "「🤤」ᴀᴅᴍɪɴ ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ *ɴsғᴡ* ᴅɪ ɢʀᴜᴘ ɪɴɪ!",
rpg: "「🎭」ᴀᴅᴍɪɴ ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ *ʀᴘɢ ɢᴀᴍᴇ* ᴅɪ ɢʀᴜᴘ ɪɴɪ!",
game: "「🎮」ᴀᴅᴍɪɴ ᴍᴇɴᴏɴᴀᴋᴛɪғᴋᴀɴ ғɪᴛᴜʀ *ɢᴀᴍᴇ* ᴅɪ ɢʀᴜᴘ ɪɴɪ!",
limitExp: "「🏆」ʟɪᴍɪᴛ ᴋᴀᴍᴜ ʜᴀʙɪs! ʙᴇʙᴇʀᴀᴘᴀ ᴄᴏᴍᴍᴀɴᴅ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪᴀᴋsᴇs!\ɴ\ɴᴋᴀᴍᴜ ʙɪsᴀ ʙᴇʟɪ ʟɪᴍɪᴛ ᴄᴀʀᴀɴʏᴀ ᴅᴇɴɢᴀɴ ᴍᴇɴɢᴇᴛɪᴋ *.ʙᴜʏ ʟɪᴍɪᴛ 𝟻*",
restrict: "「💫」ғɪᴛᴜʀ ɪɴɪ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ!!",
unreg: "「🍟」sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴋᴇ *ᴅᴀᴛᴀʙᴀsᴇ* ʙᴏᴛ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ ᴊɪᴋᴀ ɪɴɢɪɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ!\ɴ\ɴᴋᴇᴛɪᴋ:\ɴ#ᴅᴀғᴛᴀʀ ɴᴀᴍᴀᴍᴜ.ᴜᴍᴜʀᴍᴜ\ɴᴄᴏɴᴛᴏʜ: #ᴅᴀғᴛᴀʀ ᴛᴇɢᴜʜ.𝟷𝟻\ɴ",

}[type];

if (msg)
return replyDoc(msg)
};
 

}





const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
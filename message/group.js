
const moment = require("moment-timezone")
const chalk = require("chalk")
const fs = require('fs-extra')
const util = require("util")
const { getBuffer, getRandom, getGroupAdmins,sleep} = require("../lib/myfunc");
const bg = "https://tinyurl.com/y23xrfhu";


//Function update member
module.exports = async  (conn, anu) => {
var jeda = false;
if (jeda) return console.log("spam welcome aktif");
jeda = true;
try {
const { id, participants, action } = anu;


if(action === "demote"){
let members = conn.chats[id].metadata.participants
await members.forEach(participant => {
if (participant.id === participants[0]) {
participant.admin = null;
}
});
let nana = members.filter(v => v.id === participants[0])
console.log(nana)
} else if(action === "promote") {
let members = conn.chats[id].metadata.participants
await members.forEach(participant => {
if (participant.id === participants[0]) {
participant.admin = 'admin'
}
});    
let nana = members.filter(v => v.id === participants[0])
console.log(nana)    
} 
    


if(anu.participants[0].includes('@lid')) return console.log(chalk.magenta('log 1'))
if ((action == "remove" || action == "promote" || action == "demote") &&
anu.participants[0].split("@")[0].includes(conn.user.id.split(":")[0])
)
return console.log(chalk.magenta('log 2'))
const myGroup = Object.keys(db.data.chats);
const from = anu.id
const botNumber = conn.user.jid;
const groupMetadata = ((conn.chats[from] || {}).metadata || await conn.groupMetadata(from).catch(_ => null))  || {}
//(await conn.groupMetadata(from)).metadata; //((conn.chats[from] || await conn.groupMetadata(from)) ||  {}).metadata;
const groupName = groupMetadata.subject || [];
const groupLength = groupMetadata.participants.length;
const sender = conn.decodeJid(anu.participants[0])//132345273258041_1@s.whatsapp.net
if(sender.includes('_')) return log('log 3')
const senderNumber = sender.split("@")[0];
const groupMembers = groupMetadata.participants || [];
const groupAdmins = getGroupAdmins(groupMembers) || [];
const groupDesc = groupMetadata.desc || [];
const groupOwner = groupMetadata.owner || [];
const user =
groupMembers.find((u) => conn.decodeJid(u.id) === sender) || {};
const bot =
groupMembers.find((u) => conn.decodeJid(u.id) == conn.user.jid) || {};
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const isRAdmin = (user && user.admin == "superadmin") || false;
const isAdmin = isRAdmin || (user && user.admin == "admin") || false;
const isBotAdmin = (bot && bot.admin == "admin") || false; // Are you Admin?
const pushname = await conn.getName(sender);
const oneMem = anu.participants.length === 1;
const itsMe = sender === botNumber;
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const chat = global.db.data.chats[id];
const add = action == "add";
const remove = action == "remove";
const memb = groupMetadata.participants.length
const isBanchat = myGroup.includes(from)
? db.data.chats[from].banchat
: false;
if (isBanchat) {
return console.log(chalk.magenta('log 4'))
}
let m = {
chat: from,
pushname: pushname,
sender: sender,
};

if (!chat) return console.log(chalk.magenta('log 5'))
//if (!chat.welcome) return log('log 6')
let sBye = chat.sBye;
let sWelcome = chat.sWelcome;

//Import allfake.js
// await (await import("../plugins/Case/allfake.js")).default(m);

//Group Update Console.log
if (add && oneMem)
console.log(
chalk.magenta("[GRUP UPDATE]"),
chalk.green(`${pushname} telah bergabung dari gc`),
chalk.magenta(`${groupName}`)
);
if (remove && oneMem)
console.log(
chalk.magenta("[GRUP UPDATE]"),
chalk.green(`${pushname} telah keluar di gc`),
chalk.magenta(`${groupName}`)
);

//Auto kick jika itu user yang sudah di tandai
let kickon = db.data.kickon[from];
if (add && kickon && kickon.includes(senderNumber)) {
let teks = `@user tidak di izinkan masuk
karena dia telah keluar dari group ini sebelumnya,
dan juga sudah di tandai sebagai user biadap`;
let text = teks.replace("user", await conn.getName(sender));

await conn.sendMessage(
from,
{ text,
mentions: [sender],
contextInfo: { mentionedJid: [sender] }
},

);
if (!isBotAdmin)
return conn.sendMessage(
from,
{
text: `Gagal  mengeluarkan @${senderNumber} dari group karena bot bukan admin`,
contextInfo: { mentionedJid: [sender] },
},

);
if (isBotAdmin)
return conn.groupParticipantsUpdate(from, [sender], "remove");
}



try { //To get photo of user
var pp = await conn.profilePictureUrl(sender, 'image')
} catch (e) {
var pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

try { // To get photo of group
var ppgc = await conn.profilePictureUrl(from, 'image')
} catch (e) {
var ppgc = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}

/*var bg = `https://telegra.ph/file/b245d7b37296efa60d0e4.jpg`
          let ppuser2 = `https://telegra.ph/file/24fa902ead26340f3df2c.png`
 let welcome = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=WELCOME&text2=${sender}&text3=Member+${memb}&avatar=${pp}`
          let goodbye = `https://api.popcat.xyz/welcomecard?background=${bg}&text1=GOODBYE&text2=+${sender}&text3=Member+${memb}&avatar=${pp}`*/
//let welcome ='https://telegra.ph/file/2de376e1b42c03eb404aa.png'// "https://telegra.ph/file/5bedca1f745b1649ecf0b.jpg";
let welcome = 'https://telegra.ph/file/73f94a8445385e0b671cf.jpg'
//let goodbye = 'https://telegra.ph/file/84100a2c1d96108e3c7f5.png' //"https://telegra.ph/file/8c2a3e26e3e7f0a15a784.jpg";
 let goodbye = 'https://telegra.ph/file/8b6904d784c8f6b47b619.jpg'

if (action == "add") {
var link = welcome;
} else {
var link = goodbye;
}

const botRun = global.db.data.others['runtime']
const botTime = botRun? (new Date - botRun.runtime) :  "Tidak terdeteksi"
const runTime = clockString(botTime)
//let jpegThumbnail = fs.readFileSync("./media/thumbnaildokumen.jpg");
let mimetype = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let contextInfo = {
forwardingScore: 1,
isForwarded: true,
mentionedJid: [sender],

externalAdReply:{
showAdAttribution: false,
title: `${action == "add"? 'W E L C O M E': 'G O O D  B Y E'}`,
body:`Runtime ${runTime} `,
sourceUrl:global.sgc,
mediaType: 1,
renderLargerThumbnail : true,
thumbnailUrl: pp,
}
}







switch (action) {

case "add":{
if (!chat.welcome) return   
let teks = `Halo @user
welcome to group ${groupName}
Member ke ${memb}
Deskripsi : 
${readmore}
@desc
${sWelcome}`;
const welcomeText = (chat.sWelcome || teks)
.replace("user", await conn.getName(sender))
.replace("@desc", groupDesc.toString() || "unknow")
.replace("@subject", groupName);
if (chat.welcome && !itsMe && oneMem) conn.sendMessage(from, { contextInfo, text: welcomeText })


}
break;

case "remove":
{
if (!chat.welcome) return 
let teks = `Selamat tinggal @user
${sBye}`;
const byeText = (chat.sBye || teks)
.replace("user", await conn.getName(sender))
.replace("@desc", groupDesc.toString() || "unknow")
.replace("@subject", groupName);
if (chat.welcome && !itsMe && oneMem) conn.sendMessage(from, { contextInfo, text: byeText })
}
break






} // Akhir dari swith action

await sleep(5000);
jeda = false;
} catch (err) {

jeda = false;
console.log(err);
let e = String(err);
if (e.includes("this.isZero")) {
return;
}
if (e.includes("rate-overlimit")) {
return;
}
if (e.includes("Connection Closed")) {
return;
}
if (e.includes("Timed Out")) {
return;
}
console.log(chalk.white("GROUP :"), chalk.green(e));

let text =`${util.format(anu)}

${util.format(groupMetadata)}

${util.format(err)}`
conn.sendMessage(ownerBot,{text})

}
};



//----------------BATAS--------------\\




/*/Function Update group
export async function groupsUpdate(conn, anu) {
try {
console.log(anu);

const from = anu[0].id
const botNumber = conn.user.jid
const groupMetadata = await conn.groupMetadata(from) || (conn.chats[from] || {}).metadata
const groupName =  groupMetadata.subject || []
const groupLength = groupMetadata.participants.length
const groupMembers =  groupMetadata.participants || []
const groupDesc =  groupMetadata.desc || []
const groupOwner =  groupMetadata.owner || []
const bot = groupMembers.find(u => conn.decodeJid(u.id) == conn.user.jid) || {} // Your Data
const isBotAdmin = bot && bot.admin == 'admin' || false // Are you Admin?

let chats = global.db.data.chats[id], text = ''


try { // To get photo of group
var ppgroup = await conn.profilePictureUrl(from, 'image')
} catch (e) {
var ppgroup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}

const contextInfo = {
forwardingScore: 50,
isForwarded: true,
externalAdReply:{
title: copyright,
mediaType: 1,
renderLargerThumbnail : true,
thumbnailUrl: ppgroup,
}
}


for (let i of anu) {
if (!from) continue
if (!chats?.detect) continue
if (i.desc) text = (chats.sDesc || 'Description has been changed to\n@desc').replace('@desc', groupUpdate.desc)
if (i.subject) text = (chats.sSubject || 'Subject has been changed to\n@subject').replace('@subject', groupUpdate.subject)
if (i.icon) text = (chats.sIcon || 'Icon has been changed to').replace('@icon', groupUpdate.icon)
if (i.revoke) text = (chats.sRevoke ||  'Group link has been changed to\n@revoke').replace('@revoke', groupUpdate.revoke)
if (announce ) text = (chats.sAnnounceOn ||  '*Group has been closed!*')
if (!i.announce) text = (chats.sAnnounceOff ||  '*Group has been open!*')
if (i.restrict ) text = (chats.sRestrictOn || '*Group has been all participants!*')
if (!i.restrict ) text = (chats.sRestrictOff || '*Group has been only admin!*')
if (!text) continue
conn.sendMessage(from,{contextInfo,text})
}

} catch (err) {
console.log(err);
}
}*/



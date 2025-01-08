//Yang Jual Panel Jangan Culik Sc Gua Anjing

"use strict";
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios");
const yts = require("yt-search");
const gtts = require( 'node-gtts')
const ggs = require('google-it')
const canvacard = require("canvacard");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const xyz = require("@xyzteams/scapers")
const os = require('os');
const { join,dirname } = require('path');
const path = require('path');
const { removeBackgroundFromImageFile } = require('remove.bg')
const { performance } = require('perf_hooks')
const QRCode = require('qrcode');
const fetch = require('node-fetch');
const cheerio = require( 'cheerio')
const request = require("request")
const anonfile = require('anonfile-lib')
const { Primbon } = require('scrape-primbon')

const primbon = new Primbon()
const { youtubeSearch, pinterest, mediafiredl,  lyricsv2,  lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2, chord, googleImage,  jadwalTVNow,  gempa,  stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusnajson, alquran, listJadwalSholat, gempaNow, instagramdl, instagramdlv3, instagramdlv2, instagramStory, savefrom, snapsave } = require('@bochilteam/scraper')

//----------------- LIB FILE ------------------\\
const { userXp, userLeveling, } = require("../lib/user");
const TicTacToe = require("../lib/tictactoe")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { color } = require('../lib/color')
const { addSaldo, minSaldo, cekSaldo } = require("../lib/deposit");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/addlist');
const { addResponTesti, delResponTesti, isAlreadyResponTesti, sendResponTesti, updateResponTesti, getDataResponTesti } = require('../lib/respon-testi');
const { addResponProduk, delResponProduk, resetProdukAll, isAlreadyResponProduk, sendResponProduk, updateResponProduk, getDataResponProduk } = require('../lib/respon-produk');

const {toFirstCase,isNumber,formatp,parseMention, resize,pickRandom, getRandom,generateProfilePicture, getCase,addCase,delCase,listCase,runtime,FileSize,h2k,GIFBufferToVideoBuffer,makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson, sleep,getBuffer,} = require("../lib/myfunc");
const {floNime, UploadFileUgu, TelegraPh, uploadFile} = require('../lib/uploader')
const {  toAudio,  toPTT,  toVideo,  ffmpeg} = require('../lib/convert')
const { instagram4, capcutdl, mediafiredll, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3,igdl, kodepos, mediafire, ffstalk,textpro, mlstalk, Tiktok,surah,getSurah,listsurah,tafsirsurah, ephoto, emoji} = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("../lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("../lib/badword.js")
const {bad,thanks,ken,dosa,katamalem,katasiang,katasore,katalopyu,ohayo,devoloper1,teksspam,tekssalah,katara,katabot,katakawai,kataaii,ppTolak,ppLimit,badword} = require('../message/messages')
const { jadibot, stopjadibot, listjadibot } = require('../lib/jadibot.js')
const {vnToxic,vnMenu,vnSalam,vnAra, vnBot,vnSpam,vnPagi,vnSiang,vnMalam,vnOwner, vnKawai, vnLove} = require('../message/autovn.js')

const { stikOtw,stikSpam,stikAdmin,stikTagOwn } = require('../temp/sticker/autosticker.js')
const imagenya = JSON.parse(fs.readFileSync('./json/image.json'))
const videonya = JSON.parse(fs.readFileSync('./json/video.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
const db_respon_testi = JSON.parse(fs.readFileSync('./database/list-testi.json'));
const db_respon_produk = JSON.parse(fs.readFileSync('./database/list-produk.json'));

let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
//----------------- MESSAGE FILE ------------------\\
//const {payment, apikeyAtlantic } = require("../setting")
let depositPath = "./database/deposit/"
let topupPath = "./database/topup/"
let { dada } = require("../message/sewabot.js")
const {register} = require("./register.js")

// VIRTEX BY TSUKASA
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('../virtex/virtex.js')
const { virtex6 } = require('../virtex/virtex6.js')
const { virtex7 } = require('../virtex/virtex7.js')
//database 
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const _toxic =  db.data.toxic 
const spammer = []


let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))

var publik = global.public

//=================================================//
module.exports = async(conn, dev, chatUpdate,quotedMsg, store) => {
//console.log(chatUpdate.messages)
var multi = db.data.settings['settingbot'].multi
var prefa = db.data.settings['settingbot'].prefix
const m = dev
var Ownerin ="6281316643491@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net`,`6281717271462@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
try {

const { type, now, args, sender, fromMe,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = dev

  ///_&-

if (multi){
var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
var thePrefix = "Multi Prefix"
} /*else {
var prefix = prefa
var thePrefix = prefa
}*/                      

const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const command = ( _prem || isOwner)? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = dev.quoted ? dev.quoted : dev
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = (mentionByTag && mentionByTag[0]) ? mentionByTag[0] : (mentionByReply || q ? numberQuery : false);
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false
//const isSimi = isGroup ? siminya.includes(m.chat) : false 
const kickon = global.db.data.kickon[m.chat]
const botRun = global.db.data.others['runtime']
const botTime = botRun? (new Date - botRun.runtime) :  "Tidak terdeteksi"
const runTime = clockString(botTime)
const toJSON = j => JSON.stringify(j, null,'\t')
if(thePrefix){
await conn.readMessages([m.key])
}
if (isCommand){
conn.sendPresenceUpdate('composing', from)
} else {
conn.sendPresenceUpdate('recording', from)
}

//Waktu
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})


  function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
return time
}
// Register
register(m,makeid,isCmd,isOwner,groupName)
    if (m.isGroup) {
      if (chat) {
        if (!('name' in chat)) chat.name = groupName;
        if (!isNumber(chat.hit)) chat.hit = 0;
        if (!isNumber(chat.add)) chat.add = 0;
        if (!('welcome' in chat)) chat.welcome = true;
        if (!('detect' in chat)) chat.detect = true;
        if (!('sWelcome' in chat)) chat.sWelcome = '';
        if (!('sBye' in chat)) chat.sBye = '';
        if (!('sPromote' in chat)) chat.sPromote = '';
        if (!('sDemote' in chat)) chat.sDemote = '';
        if (!('desc' in chat)) chat.desc = true;
        if (!('descUpdate' in chat)) chat.descUpdate = true;
        if (!('stiker' in chat)) chat.stiker = false;
        if (!("antibot" in chat)) chat.antibot = false;
        if (!('antiimage' in chat)) chat.antiimage = false;
        if (!('antisticker' in chat)) chat.antisticker = false;
        if (!('antivideo' in chat)) chat.antivideo = false;
        if (!('antiaudio' in chat)) chat.antiaudio = false;
        if (!('antiLink' in chat)) chat.antiLink = true;
        if (!isNumber(chat.expired)) chat.expired = 0;
        if (!('antiBadword' in chat)) chat.antiBadword = true;
        if (!('antispam' in chat)) chat.antispam = true;
        if (!('antitroli' in chat)) chat.antitroli = false;
        if (!('antivirtex' in chat)) chat.antivirtex = false;
        if (!('antiwame' in chat)) chat.antiwame = false;
        if (!('antitoxic' in chat)) chat.antitoxic = false;
        if (!('viewonce' in chat)) chat.viewonce = false;
        if (!('nsfw' in chat)) chat.nsfw = false;
        if (!("rpg" in chat)) chat.rpg = false;
        
        if (!('clear' in chat)) chat.clear = false;
        if (!isNumber(chat.clearTime)) chat.clearTime = 0;
      } else if (m.isGroup) {
        global.db.data.chats[m.chat] = {
          name: groupName,
          hit: 0,
          add: 0,
          welcome: true,
          detect: true,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          desc: true,
          descUpdate: true,
          antibot: false,
          antiimage: false,
          antisticker: false,
          antiaudio: false,
          antivideo: false,
          autostiker: false,
          antilink: false,
          antilinkgc: true,
          antidelete: false,
          antiasing: false,
          banchat: false,
          expired: 0,
          antibadword: true,
          antispam: true,
          antitroli: false,
          antivirtex: false,
          antitoxic: false,
          antipromosi: false,
          antihidetag: false,
          viewonce: false,
          nsfw: false,
          rpg: false,
          
          clear: false,
          clearTime: 0,
        };
      }
    }
const settings = global.db.data.settings['settingbot']
if(settings){
//Auto set
if (!isNumber(settings.status)) setting.status = new Date() * 1
if (!('setmenu' in settings)) settings.setmenu = "document"
if (!('docType' in settings)) settings.docType = "docx"
if (!('Qoted' in settings)) settings.Qoted = "ftoko"
if (!('autoBio' in settings)) settings.autoBio = true
if (!('multi' in settings)) settings.multi = true
if (!('prefix' in settings)) settings.prefix = "!"
if (!('fake' in settings)) settings.fake = botName
if (!('autoblockcmd' in settings)) settings.autoblockcmd = false
if (!('fake1' in settings)) settings.fake1 = "EhzStore"
if (!('replyType' in settings)) settings.replyType = "web"
if (!('setwelcome' in settings)) settings.setwelcome = "type11"
if (!('autoReport' in settings)) settings.autoReport = true
if (!('autoLevel' in settings)) settings.autoLevel = true
if (!('autoSticker' in settings)) settings.autoSticker = false
if (!('publik' in settings)) settings.publik = true
 
} else { global.db.data.settings['settingbot'] = {
status: new Date() * 1, 
setmenu: "document",
docType: "docx",
Qoted: "ftoko",
autoBio: true,
multi: true,
prefix: "!",
fake: botName,
autoblockcmd: false,
replyType: "web",
setwelcome: "type11",
autoReport: true,
autoLevel: true,
autoSticker: false,
publik : true
}
}

//Security / Keamanan
const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isGroupOwner = isGroup ? groupMetadata.owner : ''
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isWelcome = isGroup ? db.data.chats[from].welcome : true
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : true
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntiWame = isGroup ? db.data.chats[from].antiwame : false
const isAntiBadword = isGroup ? db.data.chats[from].antibadword : false
const isBanned = sender? cekBannedUser (senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
const isAntiImage = isGroup ? db.data.chats[from].antiimage : false
const isAntiVideo = isGroup ? db.data.chats[from].antivideo : false
const isAntiAudio = isGroup ? db.data.chats[from].antiaudio : false
const isAntiSticker = isGroup ? db.data.chats[from].antisticker : false
const isAntiBot = isGroup ? db.data.chats[from].antibot : false
const isAntiNsfw = isGroup ? db.data.chats[from].nsfw : false
const isAntiPromosi= isGroup ? db.data.chats[from].antipromosi : false
const isGame = isGroup ? db.data.chats[from].game : false

const thumb = fs.readFileSync('./stik/thumb.jpeg')
//const isHit = db.data.users[sender].hit > 1? true : false 
  
 //User 
const userLevel = user? db.data.users[m.sender].level : true
const userExp = user? db.data.users[m.sender].exp : true
const userId = user? db.data.users[m.sender].id : true
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : true

  //Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam 🌃' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam 🌃'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore 🌇'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang 🏙️'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi 🌅'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi 🌅'  }      
// Presence Online



let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isReaction = (type == 'reactionMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessageV')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isHanMedia = m.mtype
const pesilit = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
const messagesD = pesilit.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pesilit.slice(0).trim()
var chats = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type === 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type === 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type === 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && dev.message.buttonsResponseMessage.selectedButtonId ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && dev.message.templateButtonReplyMessage.selectedId ? dev.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (dev.message.buttonsResponseMessage?.selectedButtonId || dev.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && dev.message.listResponseMessage.singleSelectReply.selectedRowId ? dev.message.listResponseMessage.singleSelectReply.selectedRowId : ""
var dataGroup = (type === 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
var dataPrivate = (type === "messageContextInfo") ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
var dataListG = (type === "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var dataList = (type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
const isListMessage = dataListG.length !== 0 ? dataListG : dataList
/*/Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length > 40000
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup && isBotGroupAdmins) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == isBotGroupAdmins,timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}*/
    

if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
 
 // Pengubah teks
  const Ehztext = (text, style = 1) => {
    var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
    var ehz = {
      1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
    };
    var replacer = [];
    abc.map((v, i) =>
      replacer.push({
        original: v,
        convert: ehz[style].split('')[i]
      })
    );
    var str = text.toLowerCase().split('');
    var output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join('');
  };
//×××××××××××××××××××××××××//
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
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
 // RESPON STIKER 
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
//respon teks
let listRespon = global.db.data.respon[body]
if(listRespon) m.reply(listRespon.respon)
//Teks Spam
const JanSpam = teksspam
const Teksspam = JanSpam[Math.floor(Math.random() * JanSpam.length)]
//FAKE REPLY  
require("./alfake.js")(m,pushname,sender,ucapanWaktu,body)

 //SetReply
const setReply = async(teks,member = []) =>{
let gambar = [
"https://telegra.ph/file/51a70874f193c66ded5e1.jpg",
"https://telegra.ph/file/6e28588c987db0ea4ef33.jpg",
"https://telegra.ph/file/bccaedbff01a994692111.jpg"
]
let photo = pickRandom(gambar)

let contextInfo = {
forwardingScore: 99999,
isForwarded: true,
mentionedJid: member,
forwardedNewsletterMessageInfo: {
          newsletterJid,
          serverMessageId: 100,
          newsletterName
          },
externalAdReply:{
showAdAttribution: true,
title: botName,
body:`Runtime ${runTime}`,
previewType:"PHOTO",
thumbnailUrl: photo,
sourceUrl: `${web}`
}
}

  if(replyType === "web"){
  conn.sendMessage(from, {contextInfo, text: teks}, { quoted: m})
  } else if(replyType === "web2"){
  conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, mediaType: 3,  renderLargerThumbnail : false,thumbnailUrl: photo,sourceUrl: `https://wa.me/${nomerOwner}?text=Hallo+kak`}}, text: teks},{quoted: m})
  } else if(replyType === "mess"){
  conn.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m});
  } else if(replyType === "katalog"){
const { generateWAMessageFromContent } = require("baileys")
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: 20000, 
status: 50000,
surface: 999,
message: Ehztext(teks),
description: '^^',
orderTitle: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
token: '91B0793EDA208DDF0BF0882227662F3A',
mediaType: 1,
curreyCode: 'IDR',
totalCurrencyCode: 20.000,
totalAmount1000: '50000',
sellerJid: '6285795718659@s.whatsapp.net',
thumbnail: thumb, 
sourceUrl: `${web}`
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)		
  } else if(replyType === "document"){conn.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: '© Rangelofficial',
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
  conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
  }
  }
//Message

const reply = (teks) => {
conn.sendMessage(from, { contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m})
}
const sendvn = (teks) => {
conn.sendMessage(from, {audio: {url: teks},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0],mimetype: 'audio/mpeg'},{quoted:m})		
} 
const sendSticker = (teks) => {
conn.sendMessage(from, {sticker: {url: teks}},{quoted: m})
}
const sendMusic = (teks) => {
let img = { url : pickRandom(fotoRandom), type : "image/jpeg" }
let url = `https://www.youtube.com/@rangelbot`

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
	
conn.sendMessage(from, { contextInfo, mimetype: 'audio/mp4', audio: teks}, { quoted: m })
}
//××××××××× MEEAAGE ××××××××//

require("./listmenu.js")
require("./message.js")(senderNumber, prefix,command,setReply)
 
// Date Islamic
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)
////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}
// Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) return 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}
 // Mute Chat grub
if(isGroup){
let mut = db.data.chats[m.chat].mute
if (mut && !isGroupAdmins && !isOwner && !isGroupOwner) {
return
}      
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  conn.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  conn.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: dev})
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
conn.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: dev})
};        

//FUNCTION ONLY
//onlyOwner
const onlyOwner = async() =>{
 // sendvn(gakmau)
  let teks = Ehztext(`Hai kak ${pushname}\nCommand Hanya Untuk Owner Bot`)
    let contextInfo = {
      forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid,
          serverMessageId: 100,
          newsletterName
          },
    externalAdReply: {
    showAdAttribution: true,
    title: '_꩜ 𝘈𝘒𝘚𝘌𝘚 𝘋𝘐 𝘛𝘖𝘓𝘈𝘒 ꩜_ ⚠️',
    body: '',
    previewType:"PHOTO",
    thumbnailUrl: ppTolak,
    sourceUrl: ''
    }
    }

    conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: ftoko })
    }
  //onlyAdmin
  const onlyAdmin = async() =>{
  let teks = Ehztext(` Hai ${pushname}\nCommand Hanya Untuk Admin Group`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName
            },
      externalAdReply: {
      showAdAttribution: true,
     title:'_꩜ 𝘈𝘒𝘚𝘌𝘚 𝘋𝘐 𝘛𝘖𝘓𝘈𝘒 ꩜_ ⚠️',
      body: '',
      previewType:"PHOTO",
      thumbnailUrl: ppTolak,
      sourceUrl: ''
      }
      }

      conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: ftoko })
      }
  //onlyAdmin
  const onlyBadmin = async() =>{
  let teks = Ehztext(` Hai ${pushname}\nJadikan ${botName} Sebagai Admin Terlebih Dahulu`)
      let contextInfo = {
        forwardingScore: 999,
          isForwarded: true,
           mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName
            },
      externalAdReply: {
      showAdAttribution: true,
     title:'_꩜ 𝘈𝘒𝘚𝘌𝘚 𝘋𝘐 𝘛𝘖𝘓𝘈𝘒 ꩜_ ⚠️',
      body: '',
      previewType:"PHOTO",
      thumbnailUrl: ppTolak,
      sourceUrl: ''
      }
      }

      conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: ftoko })
  }
  //onlyPremium
  const onlyPremium = async() =>{
    let teks = Ehztext(`Hallo ${pushname}\nCommand Hanya Untuk User Premium Silahkan Upgrade ke Premium Untuk Menggunakan Command Ini` )
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid,
          serverMessageId: 100,
          newsletterName
          },
      externalAdReply: {
      showAdAttribution: true,
    title: '_꩜ 𝘈𝘒𝘚𝘌𝘚 𝘋𝘐 𝘛𝘖𝘓𝘈𝘒 ꩜_ ⚠️',
      body: '',
      previewType:"PHOTO",
      thumbnailUrl: ppTolak,
      sourceUrl: ''
      }
      } 

      conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: ftoko })
      }
  //onlyGroup
  let teks = Ehztext(`Hallo ${pushname}\nFitur Tersebut Hanya Bisa Di Lakukan Didalam Group\nFitur Privat Hanya Diperbolehkan Berikut Ini\n\n • menfess\n • confes`)
  const onlyGroup = async() =>{
      let contextInfo = {
          forwardingScore: 999,
        isForwarded: true,
         mentionedJid: [m.sender],
          forwardedNewsletterMessageInfo: {
          newsletterJid,
          serverMessageId: 100,
          newsletterName
          },
      externalAdReply: {
      showAdAttribution: true,
    title: '_꩜ 𝘈𝘒𝘚𝘌𝘚 𝘋𝘐 𝘛𝘖𝘓𝘈𝘒 ꩜_ ⚠️',
      body:'',
      previewType:"PHOTO",
      thumbnailUrl: ppTolak,
      sourceUrl:''
      }
      }

      conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: ftoko })
      }
  const onlyLimit = async() => {
//let image = fs.readFileSync("stik/bot.jpg")
let yameteh = `*乂 Limit - Expired*

Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!\nSilakan .ceklimit\nAtau *.claim* \n untuk buylimit ketik *.shopc*`
let contextInfo = {
externalAdReply : {
showAdAttribution: false,
mediaType: 1,
title: '乂 Limit - Expired',
thumbnailUrl: ppLimit,
renderLargerThumbnail: true,
mediaUrl: '',
sourceId: botName,
sourceUrl: web
}
}

      conn.sendMessage(from, { contextInfo, text: `${yameteh}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: ftoko })
      }

const onlyGlimit = async() => {
//let image = fs.readFileSync("stik/bot.jpg") // Sementara tar gw ganti image nya
let kyahh = `*乂 Limit - Expired*
Maaf kak @${sender.split('@')[0]} limit game kamu sudah habis! silakan cek limit`
let contextInfo = {
externalAdReply : {
showAdAttribution: false,
mediaType: 1,
title: '乂 Limit - Expired',
thumbnailUrl: ppLimit,
renderLargerThumbnail: true,
mediaUrl: '',
sourceId: botName,
sourceUrl: web
}
}

      conn.sendMessage(from, { contextInfo, text: `${kyahh}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: m })
      }

const onlyToko = async() => {
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("baileys")
let wek = Ehztext(`
👥 Info :
Nama ${pushname}
Saldo : Rp${toRupiah(cekSaldo(sender, db_saldo))}

🕒 *Date & Time :*
⬪ ${week}, ${calender}
⬪ ${timeWib} WIB
⬪ ${dateIslamic}

${gris}Selamat Datang Ini Adalah Akun Kami officialEhz Yang Akan Memperkenalkan Layanan Kami Kepada Anda Melalui WhatsApp,[ Fitur Ini Hanya Bisa Di Akses Di Private Saja ] Akses Lebih Hanya Di Group Bot Kami [ .gcrangel ]${gris}
`)



const caption = `${wek}`;
let sections = [
{
title: '🍱All Menu',
highlight_label: 'All Menu List',
rows: [{
title: 'Menu All',
description: `Menampilkan Semua Produk`, 
id: `${prefix}menu allproduk`
}]},
{
title: 'List Menu',
rows: [{
title: '👕pakaian',
description: `Menampilkan List Produk Pakaian`, 
id: `${prefix}menu pakaian`
},
{
title: '📡Panel Pterodactyl',
description: `Menampilkan fitur/harga Panel`, 
id: `${prefix}menu panel`
},
       {
title: '💸Top Up Payment',
description: `Menampilkan fitur top up payment `, 
id: `${prefix}menu topup`
},
{
title: '🧑‍💻Tentang Kami', 
description: "Memperkenal kan Toko Kami Ehz", 
id: `${prefix}menu tkami`
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid:'120363284148189014@newsletter',
  serverMessageId: 100,
  newsletterName:nameToko
  },
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${nameToko} 2023™`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "ehanzdhoanx",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : {url : 'https://telegra.ph/file/0142859040b98a5d1b2d4.jpg'}}, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
  "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me//6281316643491\",\"merchant_url\":\"https://wa.me//6281316643491\"}"
     },
 ],
 })
 })
 }
 }
}, {})

if (!q) await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363284148189014@newsletter',
serverMessageId: 100,
newsletterName },
externalAdReply:{
showAdAttribution: true,
renderLargerThumbnail : true,
title: `乂 ${nameToko}`,
body:`${baileysVersion}`,
sourceUrl: `${web}`,
mediaType: 1, 
containsAutoReply: true,
thumbnailUrl: 'https://telegra.ph/file/0142859040b98a5d1b2d4.jpg'
}
}
if (args[0] === "allproduk") {
 const caption = `${wek}\n\n${readmore}\n\n${menutoko(prefix)}\n\n${menupanel(prefix)}\n\n${menutopup(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'pakaian') {
await sleep(1000) 
const caption = `${menutoko(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'panel') {
await sleep(1000) 
const caption = `${menupanel(prefix)}`;
conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: '乂 Panel Pterodactyl', 
    body: `${baileysVersion}`,
thumbnailUrl:'https://telegra.ph/file/e70e8fe24b00b683da77f.png',
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: m})
} else if (args[0] === 'topup') {
await sleep(1000) 
const caption = `${menutopup(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'tkami') {
await sleep(1000)
 const caption = Ehztext(`Kami Adalah Anu`)
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 }
    }
    
// SendAnti
  const sendAnti = (teks) => {
  let contextInfo = {
  mentionedJid: [sender],
  externalAdReply: {
  showAdAttribution: true,
  title: `${botName}`,
  body: `${baileysVersion}`,
  previewType:"PHOTO",
  thumbnailUrl: pickRandom(fotoRandom),
  sourceUrl: `${sgc}`
  }
  }

  conn.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: fkontak })
  }
/*/Bot tidak bisa di akses di pc kecuali premium
if(!isGroup && !isPremium && isCmd) {
let teks = `Kamu bukan user premium
silahkan upgrade ke premium agar bisa menggunakan 
bot secara private chat\n\n${sgc}
`
return conn.sendMessage(from,{text: teks})
}*/

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
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
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
if(!isPremium) {
db.data.users[sender].limit -= 1
conn.sendMessage(from,{text:`🎐 Limit kamu tersisa ${db.data.users[sender].limit}`}, {quoted: dev})
}
  
}
}
//Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}
//××××××××××××××××{××××//
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
setReply(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}
//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 
//autoClearChat(conn,clearchat)
  
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
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "5s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
} 

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "10s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply(Teksspam)
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

//Auto level users
if(user && isCmd && userExp >= requiredExp){
//const { userXp, userLeveling, } = (await import("../lib/user.js"))
let link = 'https://telegra.ph/file/9528a0b81d1b46bdb5507.jpg'
let level = userLevel+1
let uang = 1000*level

db.data.users[m,sender].exp = userExp - requiredExp
db.data.users[m.sender].level += 1
db.data.users[m.sender].money += 1000*level
//db.data,user[m.sender].grade = userLeveling(`${db.data.users[sender].level + 1}`)

let contextInfo = {
externalAdReply : {
showAdAttribution: false,
mediaType: 1,
title: 'Exp',
thumbnailUrl: link,
renderLargerThumbnail: true,
mediaUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi',
sourceId: botName,
sourceUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi'
}
}
let mentions = [sender]

let text = Ehztext( `*「 LEVEL UP 」*

^-^ Omedatou *${pushname}*
Kamu telah naik level menjadi level *${userLevel} ➠ ${userLevel + 1}*
Bonus Saldo : Rp *${uang.toLocaleString()}*
Pangkat Saat Ini : *${userLeveling(`${db.data.users[sender].level + 1}`)}*

*Note:* ↓
Gunakan saldo untuk membeli limit tambahan
dengan fitur ${prefix}buylimit`)
//conn.sendMessage(from,{contextInfo, text,mentions})
  setReply(text)
}
//USER AFK
if (user && user.afk > -1) {
  
setReply(`${pushname}, Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
const nama = await conn.getName(jid)
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 setReply(`
Jangan tag dia!
*${nama}* sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
} 
// AUTO RESPON VIDEO
if (videonya.includes(messagesC)) {
  let namastc = messagesC;
  let buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`); // Ubah ekstensi dan jalur ke video
  conn.sendMessage(from, { video: buffer }, { quoted: dev });
}

//AUTO RESPON IMAGE
if(imagenya.includes(messagesC)){
let namastc = messagesC
let buffer = fs.readFileSync(`./temp/image/${namastc}.jpg`)
conn.sendMessage(from, {image: buffer}, {quoted:dev })
}
//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}}, {quoted: dev})
}
//Auto VN Online  
if(db.data.audio[budy]) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
 let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
addSpam("NotCase",senderNumber, "5s", AntiSpam)
}
// Response Addlist
if (isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
var get_data_respon = getDataResponList(from, chats, db_respon_list)
if (get_data_respon.isImage === false) {
conn.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
quoted: m
})
} else {
conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {quoted: m})
}
}
if (!isGroup && isAlreadyResponTesti(chats, db_respon_testi)) {
var get_data_respon = getDataResponTesti(chats, db_respon_testi)
conn.sendMessage(from, { image: { url: get_data_respon.image_url }, caption: get_data_respon.response }, { quoted: m })
}
if (!isGroup && isAlreadyResponProduk(chats, db_respon_produk)) {
var get_data_respon = getDataResponProduk(chats, db_respon_produk)
conn.sendMessage(from, { image: { url: get_data_respon.image_url }, caption: get_data_respon.response }, { quoted: m})
}

//ANTI STICKER Banstik
let antiSticker = db.data.others["antiSticker"]
if(antiSticker) {
} else db.data.others["antiSticker"]  = []
let iniSticker = (type == 'stickerMessage') ? m.message.stickerMessage.fileSha256.toString('base64') : ""
if(isGroup && isBotGroupAdmins  && antiSticker.includes(iniSticker)) conn.sendMessage(from, { delete: m.key})

//AUTO BIO BOT
if(settings){
} else global.db.data.settings['settingbot'] = { status: new Date() * 1, }
if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime)  
let bio = `Im ${botName} 🤖 || ⏰ Runtime ${clockString(time)} || 🌎 Mode: ${publik? 'Public' : 'self'} || 🎨 Create By ${ownerName}`
await conn.updateProfileStatus(bio).catch(_ => _)
settings.status = new Date() * 1
}
 // Function Loading 
async function loading () {
let emotLoad = ["🕞"]
 await conn.sendMessage(from, { react: { text: emotLoad, key: m.key } })
}
async function loadingerror () {
let emotLoaderr = ["❌"]
 await conn.sendMessage(from, { react: { text: emotLoaderr, key: m.key } })
}
//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
conn.sendMessage(from, { react: { text: emot, key: dev.key } })	
}
}
// AUTO SHOLAT 
conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
	let id = m.chat 
    if(id in conn.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '08:00',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = Ehztext(`Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Jakarta dan sekitarnya._`)
    conn.autoshalat[id] = [
    setReply(caption),
    setTimeout(async () => {
    delete conn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

//FUNCTION AREA ===============

//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
}


  
//-------------------- 》SECURITY《 ------------------\\
//ANTI VIEWONCE 
if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce")))  {
const { downloadContentFromMessage } = (await import('baileys')).default
if(isQuotedViewOnce){
var view = m.quoted.message
} else {
var view = m.message.viewOnceMessage.message
} 

let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
} else if (/image/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
}
}
// ANTI BOT
    if (isGroup && isAntiBot) {
    if (m.isBaileys && m.fromMe == false){
        if (!isBotGroupAdmins){		  
        } else {
          sendAnti(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
  }
// ANTI IMAGE
          if (isGroup && isAntiImage && isHanMedia) {
    if(isHanMedia === "imageMessage"){
      if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
        if (!isBotGroupAdmins){		  
        } else {
          sendAnti(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Image Pada Groip Ini`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
          }
  // ANTI VIDEO
          if (isGroup && isAntiVideo && isHanMedia) {
    if(isHanMedia === "videoMessage"){
        if (!isBotGroupAdmins){		  
        } else {
          sendAnti(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Video Pada Groip Ini`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  // ANTI STICKER 
        if (isGroup && isAntiSticker && isHanMedia) {
    if(isHanMedia === "stickerMessage"){
        if (!isBotGroupAdmins){		  
        } else {
          sendAnti(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Sticker Pada Groip Ini`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  // ANTI AUDIO
        if (isGroup && isAntiAudio && isHanMedia) {
    if(isHanMedia === "audioMessage"){
        if (!isBotGroupAdmins){		  
        } else {
          sendAnti(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Audio Pada Groip Ini`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
        }
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(!isBotGroupAdmins) return reply ('Bot bukan admin jadi gbisa hapus pesan nya :(')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf saya hapus karena antilink grub aktif`)
await sleep(2000)
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
  conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   


  
  //Auto kick jika itu user yang sudah di tandai
if(kickon){
if(isGroup && kickon.includes(sender)){
	
let teks = `${senderNumber} tidak di izinkan masuk
karena dia telah keluar dari group ini sebelumnya,
dan juga sudah di tandai sebagai user biadap`       
await conn.sendMessage(from, {text: teks,contextInfo: {mentionedJid: [sender]}},{quoted: dev})
if (!isBotGroupAdmins) return conn.sendMessage(from, {text: `Gagal  mengeluarkan @${sender} dari group karena bot bukan admin`,contextInfo: {mentionedJid: [sender]}},{quoted: dev}) 
if(isBotGroupAdmins) conn.groupParticipantsUpdate(from, [sender], 'remove')
} 
}

  
 
  
 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
  conn.sendMessage(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
conn.sendMessage(from, { delete: m.key })
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }
 }
 
 
 //ANTI WA.ME
if (isGroup && isAntiWame) {
if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
if (!isBotGroupAdmins) {return}
setReply (`*LINK WA ME TERDETEKSI*\n\nMaaf bot akan menghapus link tersebut!!,\n\nhubungi Admin  untuk mematikan fitur anti wame`)
conn.sendMessage(from, { delete: m.key })
 }
 }
  
//ANTI BADWORD 
if (isGroup ){ 
if (badword.includes(budy)) {
if (isCountKasar(sender, _toxic)){
if (!isBotGroupAdmins) return sendAnti(`Kamu beruntung karena bot bukan admin`)
sendAnti(`Sepertinya kamu sudah berkata kasar lebih dari 5x maaf kamu akan di kick`)
setReply('Hitungan mundur dalam waktu')
await sleep(1000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `3` })
await sleep(2000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `2` })
await sleep(3000)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `1` })
await sleep(4500)
conn.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `Sayonaraa 👋` })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`Bakaa aku bukan admin gimana mau kick`) })
delCountKasar(sender, _toxic)
} else {
addCountKasar(sender, _toxic)
reply(`Kamu terdeteksi berkata kasar! jangan ulangi lagi atau kamu akan dikick oleh bot`)
}
}
}
 
// Anti promosi HAPUS
if (isGroup && isAntiPromosi) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yang mau buy panel pm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|jual |Jual|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|DANA|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotGroupAdmins) {return} setReply(` lagi promosi awokawok`)
if (isGroupAdmins) { return } //setReply(`Admin Mah Bebas Yakan?`)
if (isOwner) { return } //setReply(`Gw Mah Bebas Yakan?`)
await
conn.sendMessage(m.chat, { delete: m.key })
conn.sendMessage(m.chat, { delete: m.key })

}
}

/*/Detec random bae
if(isGroup){
if (budy.includes('alo') || budy.includes('mek') || 
budy.includes('hi') ||
budy.includes('cau') |
budy.includes('bot') || budy.includes('jir') || 
budy.includes('ntai') || 
budy.includes('urut') || 
budy.includes('utus') || 
budy.includes('napa') || budy.includes('bang')){
const tox = ['kamu kenapa,lagi galau yah','iya kenapa sayang','apa cuy ehan pacar angel loh','haha iya si darwin jomok emang','iya halo kiw kiw muach 👄🥰','ah Yamateh ku dasai','kenapa si suka inget vyna','Kenapa Sayang 🫣','Sabar Ini Ujian -_-']
const toxc = tox[Math.floor(Math.random() * tox.length)]
conn.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: false,
groupMentions: [
{
groupJid: m.chat,
groupSubject: toxc,
}
]
}
},{quoted:m}
)
}
}*/
    
 //ANTI DELETE
if(type == 'protocolMessage' && isAntidelete){
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
}
}
         // Secreto
              if(!isGroup){
                if (!dev.key.fromMe && secreto.find(i => i.sender === sender)) {
                   var dbx = secreto.find(i => i.sender === sender)
                   if (dbx.status === 'ENTER-MESSAGE') {
                     if (['conversation', 'extendedTextMessage'].includes(dev.type)) {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya:\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       conn.sendMessage(dbx.pengirim, { text: teks_balasan })
                       reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     } else {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya :\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       var pes = await conn.sendMessage(dbx.pengirim, { text: teks_balasan })
                       conn.sendMessage(dbx.pengirim, { forward: dev }, { quoted: pes })
                       reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     }
                     var pos = secreto.indexOf(dbx)
                     secreto.splice(pos, 1)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
                   }
                }
              }

  

  


//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
//console.log(conn.math)
try{
let id = from
//let but9 = [{"buttonId": `${prefix + command} ${q}`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('Soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
  let mat = Ehztext(`*MATH*

Jawaban Kamu Benar!
Bonus Saldo : +${math.bonus}
Exp : +999`)
  setReply(mat)
} else {    
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
let habis = Ehztext(`*Kesempatan habis!*\nJawabannya adalah *${math.result}*`)
setReply(habis)
} else setReply(`*Jawaban salah!*\nMasih ada ${conn.math[id][2]} kesempatan`)
}
}catch(err){
console.log(err)
}
}
/*conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
if(!isGroup) {return} 
//console.log(conn.math)
try{
let id = from
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else { 
  
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}

}
}catch(err){
console.log(err)
}
}*/
//GAME Tebak Bendera Function
conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}  
if(isGroup && from in conn.tebakbendera){
const similarity = require('similarity')
const threshold = 0.72
let id = from

// let but8 = [{"buttonId": `${prefix}tebakbendera`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
 let json = JSON.parse(JSON.stringify(conn.tebakbendera[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
user.balance += conn.tebakbendera[id][2]
setReply(`*TEBAK BENDERA*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tebakbendera[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebakbendera[id][3])
 delete conn.tebakbendera[id]
 } else if(similarity(budy.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}

//GAME  teka teki Function
conn.tekateki = conn.tekateki ? conn.tekateki : {}  
if(isGroup && from in conn.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tekateki[id][2]
 var teks1 = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`
 reply(teks1)
 clearTimeout(conn.tekateki[id][3])
 delete conn.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}


  //GAME Susunkata Function
conn.susunkata = conn.susunkata ? conn.susunkata : {}  
if(isGroup && from in conn.susunkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.susunkata[id][2]
   var teks2 = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.susunkata[id][2]} Money 💸`
reply(teks2)
 clearTimeout(conn.susunkata[id][3])
 delete conn.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kimia Function
conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}  
if(isGroup && from in conn.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += conn.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks3 = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`
   reply (teks3)
 clearTimeout(conn.tebakkimia[id][3])
 delete conn.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

  
  
//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak Lagu Function
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}  
if(isGroup && from in conn.tebaklagu){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))
 
 if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
user.balance += conn.tebaklagu[id][2]
 var teks4 = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklagu[id][2]} Money 💸`
   reply (teks4)
 clearTimeout(conn.tebaklagu[id][3])
 delete conn.tebaklagu[id]
 } else if(similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  
//GAME tebaktebak Function
conn.tebaktebak = conn.tebaktebak ? conn.tebaktebak : {}  
if(isGroup && from in conn.tebaktebak){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebaktebak[id][1]))
 
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaktebak[id][2]
 global.db.data.users[m.sender].exp += 50
var teks5 = `*TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaktebak[id][2]} Money 💸\n EXP: +50`
// global.db.data.users[m.sender].tiketcoin += 1
reply (teks5)
   clearTimeout(conn.tebaktebak[id][3])
 delete conn.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kata Function
conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
if(isGroup && from in conn.tebakkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakkata[id][2]
 var teks6 = `*GAME TEBAK KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkata[id][2]} Money 💸`
   reply (teks6)
 clearTimeout(conn.tebakkata[id][3])
 delete conn.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  
//GAME tebak lirik Function
conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
if(isGroup && from in conn.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks7 = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklirik[id][2]} Money 💸\n EXP: +10`
   reply (teks7)
 clearTimeout(conn.tebaklirik[id][3])
 delete conn.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

       
//GAME siapa aku Function
conn.siapaaku = conn.siapaaku ? conn.siapaaku : {}
//conn.siapaaku = JSON.parse(fs.readFileSync('./database/siapaaku.json'))
if(isGroup && from in conn.siapaaku){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.siapaaku[id][2]
var teks8 = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.siapaaku[id][2]} Money 💸`
   reply (teks8)
 clearTimeout(conn.siapaaku[id][3])
 delete conn.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`) 
}


  //GAME tebak gambar
conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
if(isGroup && from in conn.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += conn.tebakgambar[id][2]
 var teks9 = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakgambar[id][2]} Money 💸`
   reply (teks9)
 clearTimeout(conn.tebakgambar[id][3])
 delete conn.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}

  
//Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = conn.family[id]
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

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
conn.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted: dev}).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}
 //GAME tebak Lagu Function
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}  
if(isGroup && from in conn.tebaklagu){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))
 
 if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
user.balance += conn.tebaklagu[id][2]
 var teksL = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklagu[id][2]} Money 💸`
   reply (teksL)
 clearTimeout(conn.tebaklagu[id][3])
 delete conn.tebaklagu[id]
 } else if(similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}
//sendFileUrl
const sendFileFromUrl = async (from, url, caption, dev, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return conn.sendMessage(from, {
					video: await convertGif(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime.split("/")[0] === "image") {
				return conn.sendMessage(from, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			} else if (mime.split("/")[0] === "video") {
				return conn.sendMessage(from, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			} else if (mime.split("/")[0] === "audio") {
				return conn.sendMessage(from, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: dev
				})
			} else {
				return conn.sendMessage(from, {
					document: await getBuffer(url),
					mimetype: mime,
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: dev
				})
			}
		}


	        //Suit PvP
	    conn.suit = conn.suit ? conn.suit : {}
	    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete conn.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete conn.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete conn.suit[roof.id]
	    }
	    }
	

  
	
	        //TicTacToei

	    conn.tictac = conn.tictac ? conn.tictac : {}
	    let roomf = Object.values(conn.tictac).find(roomf => roomf.id && roomf.tictac && roomf.state && roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender) && roomf.state == 'PLAYING')
	    if (roomf) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return
	    isSurrender = !/^[1-9]$/.test(budy)
	    if (sender !== roomf.tictac.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = roomf.tictac.turn(sender === roomf.tictac.playerO, parseInt(budy) - 1))) {
	    setReply ({
	    '-3': '*TICTACTOE TELAH BERAKHIR*',
	    '-2': '*INVALID*',
	    '-1': '*POSISI INVALID*',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (sender === roomf.tictac.winner) isWin = true
	    else if (roomf.tictac.board === 511) isTie = true
	    let arr = roomf.tictac.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    roomf.tictac._currentTurn = sender === roomf.tictac.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? roomf.tictac.currentTurn : roomf.tictac.winner
	    let str = `*TICTACTOE*

 ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *MENANG!*` : isTie ? `*HASIL SERI*` : `Giliran ${['❌', '⭕'][1 * roomf.tictac._currentTurn]} (@${roomf.tictac.currentTurn.split('@')[0]})`}
❌: @${roomf.tictac.playerX.split('@')[0]}
⭕: @${roomf.tictac.playerO.split('@')[0]}

`
	    if ((roomf.tictac._currentTurn ^ isSurrender ? roomf.x : roomf.o) !== m.chat)
	    roomf[roomf.tictac._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (roomf.x !== roomf.o)  conn.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
	     conn.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete conn.tictac[roomf.id]
	    }
      }
	async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const { default: { Image }} = await import('node-webpmux')
	const img = new Image()
	const json = { 'sticker-pack-id': 'parel-kntll', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	 img.exif = exif
	return await img.save(null)
}
//---------Top Up Payment-----//
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
    
if (chats === "payment_ovo") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "OVO",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke banh mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (isListMessage === "payqris") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "QRIS",
data: {
iddepo: "",
qr: "",
amount_deposit: "",
nominal: "",
pajak: "",
exp: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke banh mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (isListMessage === "paydana") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "DANA",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke banh mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
}

if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
if (!m.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
if (data_deposit.session === "amount") {
if (isNaN(chats)) return reply("Masukan hanya angka ya")
data_deposit.data.amount_deposit = Number(chats)
if (data_deposit.data.amount_deposit < 2000) return reply(`Deposit Minimal Rp2000`)
if (data_deposit.data.amount_deposit > 5000000) return reply(`Nominal Deposit terlalu tinggi`)
data_deposit.session = "konfirmasi_deposit";
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
if (data_deposit.payment === "QRIS") {
	let pajakny = await toJSON(0.01 * data_deposit.data.amount_deposit)
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("reff_id", data_deposit.ID);
key.append("nominal", data_deposit.data.amount_deposit+Number(pajakny));
key.append("type", "ewallet")
key.append("metode", "qrisfast")
fetch("https://atlantich2h.com/deposit/create", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
	QRCode.toFile("./depoqris.jpg", res.data.qr_string, { margin: 2, scale: 10 })
if (!res.status) return reply(res.message)
data_deposit.result = res.status
data_deposit.data.iddepo = res.data.id
data_deposit.data.qr = "./depoqris.jpg"
data_deposit.data.pajak = res.data.nominal - data_deposit.data.amount_deposit
data_deposit.data.nominal = res.data.nominal
data_deposit.data.exp = res.data.expired_at
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
conn.sendMessage(from, { text: `「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

▪ ID: ${data_deposit.ID}
▪ Number: ${data_deposit.number.split('@')[0]}
▪ Payment: ${data_deposit.payment}
▪ Jumlah Deposit: Rp${toRupiah(data_deposit.data.amount_deposit)}
▪ Pajak Admin: Rp${toRupiah(res.data.nominal - data_deposit.data.amount_deposit)}
▪ Total Pembayaran: Rp${toRupiah(res.data.nominal)}

_Ketik *lanjut* untuk melanjutkan_
_Ketik *batal* untuk membatalkan_` }, { quoted: m })
})
} else {
conn.sendMessage(from, {text: `「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

▪ ID : ${data_deposit.ID}
▪ Nomer : ${data_deposit.number.split('@')[0]}
▪ Payment : E WALLET
▪ Jumlah Deposit : Rp${toRupiah(data_deposit.data.amount_deposit)}
▪ Pajak Admin : Rp0
▪ Total Pembayaran : Rp${toRupiah(data_deposit.data.amount_deposit)}

_Ketik Lanjut untuk melanjutkan_
_Ketik Batal untuk membatalkan_`}, { quoted: m })
}
} else if (data_deposit.session === "konfirmasi_deposit") {
if (chats.toLowerCase() === "lanjut") {
 if (data_deposit.payment === "QRIS") {
var qr_fexf =`༆━━[ *PAYMENT QRIS* ]━━࿐

*▪ID:* ${data_deposit.ID}
*▪Nomer:* ${data_deposit.number.split("@")[0]}
*▪Jumlah Deposit:* Rp${toRupiah(data_deposit.data.amount_deposit)}
*▪Pajak Admin:* Rp${toRupiah(data_deposit.data.pajak)}
*▪Total Pembayaran:* Rp${toRupiah(data_deposit.data.nominal)}
*▪Expired:* ${data_deposit.data.exp}

_Silahkan scan QRIS diatas, ketik batal untuk membatalkan_`
conn.sendMessage(from, { image: fs.readFileSync(data_deposit.data.qr), caption: qr_fexf }, { quoted: m })
} else if (data_deposit.payment === "DANA") {
var py_dana =`༆━━[ *PAYMENT E WALLET* ]━━࿐
 
*DANA :* ${payment.dana.nomer}
*AN :* ${payment.dana.atas_nama}

*GOPAY :* 089518377899
*AN :* W***T**

*SHOPEEPAY :* 082351231702
*AN :* P***** I*****

*OVO :* 0895327999292
*AN :* W**n

*MANDIRI :* Not Found
*AN :* Not Found
_Silahkan transfer dengan nomor yang sudah tertera, Jika sudah harap kirim bukti foto dengan caption .bukti untuk di acc oleh admin_`
reply(py_dana)
}} else if (chats.toLowerCase() === "batal") {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("id", data_deposit.data.iddepo);
fetch("https://atlantich2h.com/deposit/cancel", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
reply(`Baik banh, deposit dengan ID: ${data_deposit.ID} dibatalkan`)
fs.unlinkSync(depositPath + sender.split('@')[0] + '.json')
})
}}}}


if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
if (data_deposit.payment === "QRIS") {
var intervals = setInterval(function() {
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("id", data_deposit.data.iddepo);
fetch("https://atlantich2h.com/deposit/status", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
console.log(res); // For Debugging
console.log(color("[DEPOSIT QRIS]", "green"), `-> ${sender}`) // For Debugging
if (res.status == false) {
	clearInterval(intervals);
} else if (res.data.status === "success") {
reply(`*DEPOSIT SUKSES*\n*Status:* success\n*ID:* ${data_deposit.ID}\n*Nomer:* ${data_deposit.number.split("@")[0]}\n*Jumlah Deposit:* Rp${toRupiah(data_deposit.data.amount_deposit)}\n*Pajak Admin:* Rp${toRupiah(data_deposit.data.pajak)}\n*Total Pembayaran:* Rp${toRupiah(data_deposit.data.nominal)}\n\n_Terimakasih banh sudah deposit._`)
addSaldo(sender, Number(data_deposit.data.amount_deposit), db_saldo)
fs.unlinkSync(depositPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (res.data.status === "expired") {
console.log(res)
reply(`Deposit anda telah *Expired*`)
fs.unlinkSync(depositPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (res.data.status === "cancel") {
if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) return fs.unlinkSync(depositPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
}, 3000)
}
}


if (fs.existsSync(topupPath + sender.split("@")[0] + ".json")) {
	if (!m.key.fromMe) {
let data_topup = JSON.parse(fs.readFileSync(topupPath + sender.split("@")[0] + ".json"))
if (data_topup.session === "target") {
if (isNaN(chats)) return reply("Hanya Masukan Nomor/Id Tidak boleh ada karakter lain")
data_topup.data.target = chats
data_topup.session = "konfirmasi_topup";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3));
conn.sendMessage(from,
{text: `*TARGET:* ${data_topup.data.target}\nPastikan ID/Nomor yg anda masukan benar`,
buttonText: "Tekan Disini",
sections: [{title: "Pilih Lanjut/Batal",
rows: [
{title: "Lanjut", rowId: "lanjut", description: "Lanjut untuk Melanjutkan Transaksi"},
{title: "Batal", rowId: "batal", description: "Batal Untuk membatalkan Transaksi"}]}
]})
} else if (data_topup.session === "konfirmasi_topup") {
	if (isListMessage === "lanjut") {
	let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("code", data_topup.data.code)
key.append("reff_id", require("crypto").randomBytes(5).toString("hex").toUpperCase())
key.append("target", data_topup.data.target)
fetch("https://atlantich2h.com/transaksi/create", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
	if (!res.status) return reply('Server maintenance.')
	let persen = (untung / 100) * res.data.price
	data_topup.result = res.status
	data_topup.data.idtopup = res.data.id
	data_topup.data.id = res.data.reff_id
	data_topup.data.price = res.data.price + Number(Math.ceil(persen))
	data_topup.data.layanan =  res.data.layanan
	fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3));
	reply(`*「 ${res.message.toUpperCase()} 」*\n\n*PESAN:* _Tunggu sejenak, Bot sedang memproses pesanan anda✅_`)	
})
await sleep(5000)
var intervals = setInterval(function() {
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("id", data_topup.data.idtopup)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/transaksi/status", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(responsep => responsep.json())
.then(resss => {
console.log(resss); // For Debugging
console.log(color("[TRANSAKSI]", "green"), `-> ${sender}`) // For Debugging
if (resss.status == false) {
	clearInterval(intervals);
	} else
if (resss.data.status === "success") {
	let persen = (untung / 100) * resss.data.price
reply(`*「  TOPUP SUKSES  」*\n*⌬ Status:* Suksess\n*⌬ ID Order:* ${resss.data.reff_id}\n*⌬ Layanan:* ${resss.data.layanan}\n*⌬ Nomor Tujuan:* ${resss.data.target}\n*⌬ Price:* Rp${toRupiah(Number(resss.data.price) + Number(Math.ceil(persen)))}\n\n*⌬ SN:*\n${resss.data.sn}\n\n_Terimakasih banh sudah order.️_`)
minSaldo(sender, (Number(resss.data.price) + Number(Math.ceil(persen))), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (resss.data.status === 'failed') {
console.log(resss)
reply(`❌Pesanan dibatalkan!\nAlasan : Kesalahan oleh bot atau ID tidak valid`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (resss.data.status === 'cansel') {
console.log(resss)
reply(`❌Pesanan dibatalkan!\nAlasan : ${resss.data.message}`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} 
})
}, 3000)
	} else if (isListMessage === "batal") {
		reply(`Pesanan dibatalkan!`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
	}}}}
//--------PLUGINS-------\\
var usedPrefix
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
await plugin.all.call(conn, m, {
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
if (await plugin.before.call(conn, m, {
thePrefix,
store,
isAccept,
command,
q,
match,
conn,
prefix,
setReply,
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
fail('owner')
break
}
if (plugin.owner && !isOwner) {
fail('owner')
break
}  
if (plugin.premium && !isPremium) {
fail('premium')
break
}

if (plugin.group && !m.isGroup) {
fail('group')
break
} else if (plugin.botAdmin && !m.isBotAdmin) {
fail('botAdmin')
break
} else if (plugin.admin && !m.isAdmin) {
fail('admin')
break
}

if (plugin.private && m.isGroup) {
fail('private')
break
}
if (plugin.register && !_user.registered) {
fail('unreg')
break
}
if (plugin.onlyprem && !m.isGroup && !isPremium) {
fail('onlyprem')
break
}
if (plugin.rpg && m.isGroup && !global.db.data.chats[m.chat].rpg) {
fail('rpg')
break
}
if (plugin.game && m.isGroup && !global.db.data.chats[m.chat].game) {
fail('game')
break
}

if (user && plugin.level > _user.level) {
conn.reply(m.chat, `[💬] Mohon maaf level yang di perlukan untuk menggunakan fitur ini ${plugin.level}\n*Level mu:* ${_user.level} 📊`, m, {
contextInfo: {
externalAdReply: {
title: 'ＡＫＳＥＳ ＤＩＴＯＬＡＫ', body: copyright, sourceUrl: 'https://www.youtube.com/watch?v=bfXPiy4um5k', thumbnailUrl:ppTolak
}
}
})
break
}


if (user && plugin.age > _user.age) {
conn.reply(m.chat, `[💬] Umurmu harus diatas ${plugin.age} Tahun untuk menggunakan fitur ini...`, m, {
contextInfo: {
externalAdReply: {
title: 'ＡＫＳＥＳ ＤＩＴＯＬＡＫ', body: botName, sourceUrl: web, thumbnailUrl:ppTolk
}
}
})
break
}



let extra = {
setReply,
store,
isAccept,
q,
prefix,
usedPrefix,
noPrefix,
args,
command,
text,
conn,
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
isprems: isPremium,
chatUpdate,
__dirname: ___dirname,
__filename
}

try {
await plugin.call(conn, m, extra)
} catch (err) {

if(err.message !== undefined){
  let e = util.format(err);
  setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`);

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
await plugin.after.call(conn, m, extra)
} catch (e) {
console.error(e)
}
}

}
break
}


}//akhir dari name in global plugins


// ==========================================================\\
try{
switch(command) {


case 'pricelist':{
 if (isGroup) return reply('husus private chat')
const sections = [
{title: "-",
rows: [
{title: "Top up game", rowId: prefix+"pricelistgame", description: "list Produk Game"},
{title: "Saldo eWallet", rowId: prefix+"pricelistwallet", description: "list Produk Wallet"},
{title: "Isi Kuota", rowId: prefix+"pubg", description: "list Peoduk Kuota"},
{title: "Isi Pulsa", rowId: prefix+"pubg1", description: "list Produk Pulsa"},
{title: "Kembali", rowId: prefix+"menu", description: "Kembali Menu Utama"},
]},
{title: "𝗧𝗼𝗸𝗲𝗻 𝗹𝗶𝘀𝘁𝗿𝗶𝗸",
rows: [
{title: "PLN", rowId: prefix+"pln", description: "list produk Token Pln"},
]}
]
let isian = `*${ucapanWaktu} ${pushname}*                        \nList Layanan Produk Yang Tersedia.`
const listMessage = {
text: isian,
buttonText: 'Tekan Disini',
sections
}
conn.sendMessage(from, listMessage)
}
break
case 'pricelistwallet':{
	if (isGroup) return reply('husus private chat')
const sections = [
{title: "𝗦𝗮𝗹𝗱𝗼 𝗘-𝘄𝗮𝗹𝗹𝗲𝘁",
rows: [
{title: "Dana", rowId: prefix+"dana", description: "list produk Saldo Dana"},
{title: "Gopay", rowId: prefix+"gopay", description: "list harga Saldo Gopay"},
{title: "Ovo", rowId: prefix+"ovo", description: "list harga Saldo Ovo"},
{title: "Shopeepay", rowId: prefix+"shopeepay", description: "list harga Saldo Shopeepay"},
{title: "LinkAja", rowId: prefix+"linkaja", description: "list harga Saldo LinkAja"},
]},
]
let isian = `*${ucapanWaktu} ${pushname}*                        \nList Layanan Produk Yang Tersedia.`
const listMessage = {
text: isian,
buttonText: 'Tekan Disini',
sections
}
conn.sendMessage(from, listMessage)
}
break
case 'pricelistpulsa':{
	if (isGroup) return reply('husus private chat')
const sections = [
{title: "𝗣𝘂𝗹𝘀𝗮 𝘁𝗿𝗮𝗻𝘀𝗳𝗲𝗿",
rows: [
{title: "Smartfren", rowId: prefix+"pul_martfren", description: "list produk Pulsa Smartfren"},
{title: "Telkomsel", rowId: prefix+"pul_telkomsel", description: "list produk Pulsa Telkomsel"},
{title: "Indosat", rowId: prefix+"pul_indosat", description: "list produk Pulsa Indosat"},
{title: "Axis", rowId: prefix+"pul_axis", description: "list produk Pulsa Axis"},
{title: "Three", rowId: prefix+"pul_three", description: "list produk Pulsa Three"},
{title: "XL", rowId: prefix+"pul_xl", description: "list produk Pulsa XL"},
{title: "By.u", rowId: prefix+"pul_byu", description: "list produk Pulsa By.u"},
]},
]
let isian = `*${ucapanWaktu} ${pushname}*                        \nList Layanan Produk Yang Tersedia.`
const listMessage = {
text: isian,
buttonText: 'Tekan Disini',
sections
}
conn.sendMessage(from, listMessage)
}
break

case 'pricelistkuota':{
	if (isGroup) return reply('husus private chat')
const sections = [
{title: "𝗞𝘂𝗼𝘁𝗮 𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁",
rows: [
{title: "Smartfren", rowId: prefix+"Smartfren", description: "list produk Kuota Smartfren"},
{title: "Telkomsel", rowId: prefix+"Telkomsel", description: "list produk Kouta Telkomsel"},
{title: "Indosat", rowId: prefix+"Indosat", description: "list produk Kouta Indosat"},
{title: "Axis", rowId: prefix+"Axis", description: "list produk Kouta Axis"},
{title: "Three", rowId: prefix+"Three", description: "list produk Kouta Three"},
{title: "XL", rowId: prefix+"xl", description: "list produk Kouta XL"},
{title: "By.u", rowId: prefix+"byu", description: "list produk Kouta By.u"},
]},
]
let isian = `*${ucapanWaktu} ${pushname}*                        \nList Layanan Produk Yang Tersedia.`
const listMessage = {
text: isian,
buttonText: 'Tekan Disini',
sections
}
conn.sendMessage(from, listMessage)
}
break

case 'pricelistgame': {
    if (isGroup) return setReply('husus private chat');

    const sections = [
        {
            title: "𝗧𝗼𝗽𝘂𝗽 𝗚𝗮𝗺𝗲𝘀",
            rows: [
                {title: "Free Fire", rowId: prefix + "ff", description: "List harga Topup Free Fire Murah"},
                {title: "PUBG Mobile", rowId: prefix + "pubg", description: "List harga Topup PUBG Mobile Murah"},
                {title: "PUBG New State Mobile", rowId: prefix + "topup pubg1", description: "List harga Topup PUBG New State Mobile Murah"},
                {title: "Mobile Legends", rowId: prefix + "ml", description: "List harga Topup Mobile Legends Murah"},
                {title: "Call of Duty Mobile", rowId: prefix + "cod", description: "List harga Topup Call of Duty Mobile Murah"},
                {title: "Genshin Impact", rowId: prefix + "genshin", description: "List harga Topup Genshin Impact Murah"},
                {title: "Stumble Guys", rowId: prefix + "stumble", description: "List harga Topup Stumble Guys Murah"},
                {title: "Point Blank", rowId: prefix + "pb", description: "List harga Topup Point Blank Murah"},
                {title: "Growtopia", rowId: prefix + "growtopia", description: "List harga Topup Growtopia Murah"},
                {title: "Garena", rowId: prefix + "garena", description: "List harga Topup Garena Murah"},
                {title: "Arena of Valor", rowId: prefix + "aov", description: "List harga Topup Arena of Valor Murah"},
                {title: "Super Sus", rowId: prefix + "sps", description: "List harga Topup Super Sus Murah"},
                {title: "Lita", rowId: prefix + "lita", description: "List harga Topup Lita Murah"},
                {title: "Hago", rowId: prefix + "hago", description: "List harga Topup Hago Murah"},
                {title: "Lokapala", rowId: prefix + "lokapala", description: "List harga Topup Lokapala Murah"},
                {title: "8 Ball Pool", rowId: prefix + "8ballpool", description: "List harga Topup 8 Ball Pool Murah"},
                {title: "Zepeto", rowId: prefix + "zepeto", description: "List harga Topup Zepeto Murah"},
                {title: "Sausage Man", rowId: prefix + "sausageman", description: "List harga Topup Sausage Man Murah"},
                {title: "Clash of Clans", rowId: prefix + "coc", description: "List harga Topup Clash of Clans Murah"},
                {title: "Honor of Kings", rowId: prefix + "hok", description: "List harga Topup Honor of Kings Murah"}
            ]
        }
    ];

    let messageContent = `*${ucapanWaktu} ${pushname}*\n\nList Layanan Produk Topup Yang Tersedia:`;
    
    const listMessage = {
        text: messageContent,
        buttonText: 'Tekan Disini',
        sections: sections
    };

    conn.sendMessage(from, listMessage);
}
break;
case 'tutortopup':{
 let linktutor = `Nih Kak Tutor Nya Disini\nhttps://youtu.be/lKfgv1-3Ty4?si=y4SDeBGhifxKwXMC`
 setReply(linktutor)
 }
break
case 'tutordepo':{
 let linktutor = `Nih Kak Tutor Nya Disini\nhttps://youtu.be/lKfgv1-3Ty4?si=y4SDeBGhifxKwXMC`
 setReply(linktutor)
}
break
case 'topup':{

if (cekSaldo(sender, db_saldo) < 1) return setReply(`Maaf *${pushname}*, sepertinya saldo kamu Rp${toRupiah(cekSaldo(sender, db_saldo))}, silahkan melakukan deposit terlebih dahulu sebelum melakukan topup.`)
if (!q) return reply(`Ingin Topup? silahkan ketik .cekharga`)
if (!fs.existsSync(topupPath + sender.split("@")[0] + ".json")) {
let cekhar = new URLSearchParams()
cekhar.append("api_key", apikeyAtlantic)
cekhar.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: cekhar,
redirect: 'follow'
})
.then(responsee => responsee.json())
.then(ress => {
let listproduk
for (let x of ress.data) {
if (x.code == q.split(",")[0]) {
listproduk = x ? x : false
}
}
if (!listproduk) return reply(`_Code produk *${q.split(",")[0]}* Tidak sesuai_`)
let kntungan = (untung / 100) * listproduk.price.replace(/[^0-9]/g, '')
if (cekSaldo(sender, db_saldo) < Number(listproduk.price.replace(/[^0-9]/g, '')) + Number(Math.ceil(kntungan))) return reply(`Maaf *${pushname},*\n🍁saldo anda kurang dari Rp${toRupiah(Number(listproduk.price.replace(/[^0-9]/g, '')) + Number(Math.ceil(kntungan)))}, Silahkan Ketik .deposit Untuk melakukan deposit`)
var object_buy = {
	session: "target",
number: sender,
result: "",
data: {
target: "",
code: q,
idtopup: "",
id: "",
price: "",
layanan: ""
}
}
fs.writeFile(topupPath + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
	setReply(`_Masukan Id/nomor Target_\n\nNOTE: [Untuk layanan Mobile legends, id & zone digabung tanpa ada karakter lain.\ncontoh yg salah: 733383273(8294)❌\ncontoh yg benar: 7333832738294]✅`)
})

})
} else {
reply(`Kamu sedang melakukan topup, mohong tunggu sampai proses topup selesai.`)
}
}
break
case 'saldo':{
if (isGroup) return reply('husus private chat')
let cnah = Ehztext(`*━━ CHECK YOUR INFO ━━* 

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
${gris}Saldo hanya bisa untuk topup
Tidak bisa ditarik atau transfer!${gris} `)
setReply(cnah)
}
break
case 'addsaldo':
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`)
if (!q.split("|")[0]) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`)
if (!q.split("|")[1]) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`)
addSaldo(q.split("|")[0]+"@s.whatsapp.net", Number(q.split("|")[1]), db_saldo)
await sleep(50)
conn.sendTextMentions(from, `「 *SALDO USER* 」
⭔ID: ${q.split("|")[0]}
⭔Nomer: @${q.split("|")[0]}
⭔Tanggal: ${tanggal}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo))}`, [q.split("|")[0]+"@s.whatsapp.net"])
conn.sendTextMentions(q.split("|")[0]+"@s.whatsapp.net", `「 *SALDO USER* 」
⭔ID: ${q.split("|")[0]}
⭔Nomer: @${q.split("|")[0]}
⭔Tanggal: ${week},${calender}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo))}`, [q.split("|")[0]+"@s.whatsapp.net"])
break
case 'minsaldo':
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`)
if (!q.split("|")[0]) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`)
if (!q.split("|")[1]) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`)
if (cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo) == 0) return reply("Dia belum terdaftar di database saldo.")
if (cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo) < q.split("|")[1] && cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo) !== 0) return reply(`Dia saldonya ${cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo)} yah banh??`)
minSaldo(q.split("|")[0]+"@s.whatsapp.net", Number(q.split("|")[1]), db_saldo)
await sleep(50)
conn.sendTextMentions(from, `「 *SALDO USER* 」
⭔ID: ${q.split("|")[0]}
⭔Nomer: @${q.split("|")[0]}
⭔Tanggal: ${week},${calender}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split("|")[0]+"@s.whatsapp.net", db_saldo))}`, [q.split("|")[0]+"@s.whatsapp.net"])
break
case 'ceksaldo':{
if (!isOwner) return onlyOwner()
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
fetch("https://atlantich2h.com/get_profile", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) return reply('Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider')
setReply(`*ATLANTIC PEDIA PROFILE*\n*Name:* ${res.data.name}\n*Username:* ${res.data.username}\n*Email:* ${res.data.email}\n*Sisa Saldo:* Rp${toRupiah(res.data.balance)}`)
})
}
break
case 'cekip':{
if (!isOwner) return onlyOwner()
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
fetch("https://atlantich2h.com/get_profile", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) return reply('Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider')
reply('IP sudah tersambung ke server.')
})
}
break
case 'setprofit':{
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Gunakan dengan kata command: ${prefix+command} 20%\n\n_Text 20% bisa kalian ganti dengan seberapa besar Keuntungan Yg Akan anda Peroleh_`)
if (q.replace(/[^0-9]/g, '') < 1) return reply('Minimal 1%')
if (q.replace(/[^0-9]/g, '') > 99) return reply('Maksimal 99%')
untung = q.replace(/[^0-9]/g, '')
await reply(`Profit Anda telah distel menjadi ${q.replace(/[^0-9]/g, '')}%`)
}
break
case 'deposit': case 'depo':{
	if (isGroup) return setReply('husus private chat')
var rows = [
{
title: "QRIS",
rowId: "payqris",
description: "Sistem: Otomatis"
},
{
title: "E WALLET",
rowId: "paydana",
description: "Sistem: manual"
}
]
var dep_but = {
text: Ehztext(`*| 𝗠𝗘𝗡𝗨 𝗗𝗘𝗣𝗢𝗦𝗜𝗧 |*
-----------------------------------------------------
𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝗉𝗂𝗅𝗂𝗁 𝗉𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝗂𝗌𝗂 𝗌𝖺𝗅𝖽𝗈 𝗒𝖺𝗇𝗀 𝗄𝖺𝗆𝗎 𝗂𝗇𝗀𝗂𝗇𝗄𝖺𝗇, 𝗁𝖺𝗇𝗒𝖺 𝗍𝗂𝗇𝗀𝗀𝖺𝗅 klik 𝗉𝗂𝗅𝗂𝗁𝖺𝗇 𝗉𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝗂𝗌𝗂 𝗌𝖺𝗅𝖽𝗈 𝗒𝖺𝗇𝗀 𝗍𝖾𝗅𝖺𝗁 𝖽𝗂𝗌𝖾𝖽𝗂𝖺𝗄𝖺𝗇
-----------------------------------------------------
𝖲𝖺𝗅𝖽𝗈 𝗁𝖺𝗇𝗒𝖺 𝖻𝗂𝗌𝖺 𝖽𝗂𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝗎𝗇𝗍𝗎𝗄 𝗍𝗈𝗉𝗎𝗉 𝗌𝖺𝗃𝖺, 𝗍𝗂𝖽𝖺𝗄 𝖻𝗂𝗌𝖺 𝖽𝗂𝗋𝖾𝖿𝗎𝗇𝖽 𝖺𝗍𝖺𝗎 𝖽𝗂𝖺𝗆𝖻𝗂𝗅 𝗄𝖾𝗆𝖻𝖺𝗅𝗂, 𝗆𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝖿𝗂𝗍𝗎𝗋 𝗂𝗇𝗂 𝖻𝖾𝗋𝖺𝗋𝗍𝗂 𝗄𝖺𝗆𝗎 𝗌𝖾𝗍𝗎𝗃𝗎 𝖽𝖾𝗇𝗀𝖺𝗇 𝗌𝗒𝖺𝗋𝖺𝗍 𝖽𝖺𝗇 𝗄𝖾𝗍𝖾𝗇𝗍𝗎𝖺𝗇 𝗒𝖺𝗇𝗀 𝖻𝖾𝗋𝗅𝖺𝗄𝗎
-----------------------------------------------------`),
buttonText: "Pilih disini",
sections: [ { title: "PAYMENT DEPOSIT", rows } ]
}
conn.sendMessage(from, dep_but)
}
break
 case 'bukti':
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) return reply(`Maaf *@${sender.split('@')[0]}* sepertinya kamu belum pernah melakukan deposit`)
if (isImage && isQuotedImage) return setReply(`Kirim gambar dengan caption *.bukti* atau reply gambar yang sudah dikirim dengan caption *.bukti*`)
await conn.downloadAndSaveMediaMessage(quoted,"image", `./database/deposit/${sender.split('@')[0]}.jpg`)

let oke_bang = fs.readFileSync(`./database/deposit/${sender.split('@')[0]}.jpg`)
let data_depo = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))

let caption_bukti = Ehztext(`「 *DEPOSIT USER* 」
⭔ID: ${data_depo.ID}
⭔Nomer: @${data_depo.number.split('@')[0]}
⭔Payment: ${data_depo.payment}
⭔Tanggal: ${data_depo.date.split(' ')[0]}
⭔Jumlah Deposit: Rp${toRupiah(data_depo.data.amount_deposit)}
⭔Pajak Admin : Rp0
⭔Total Pembayaran : Rp${toRupiah(data_depo.data.amount_deposit)}

Ada yang deposit nih banh, coba dicek saldonya, jika sudah masuk konfirmasi

Jika sudah masuk konfirmasi dengan cara klik *.accdepo*
Jika belum masuk batalkan dengan cara ketik *.rejectdepo*`)

let bukti_bayar = {
image: oke_bang,
caption: caption_bukti,
mentions: [data_depo.number],
title: 'Bukti pembayaran',
footer: 'Press The Button Below',
headerType: 5 
}
conn.sendMessage(`${global.ownerNumber}`, bukti_bayar)
reply(`Mohon tunggu ya banh, sampai di Konfirmasi oleh owner 🔥`)
fs.unlinkSync(`./database/deposit/${sender.split('@')[0]}.jpg`)
break
case 'accdepo':{
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Contoh: ${prefix+command} 628xxx`)
let orang = q.split(",")[0].replace(/[^0-9]/g, '')
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
addSaldo(data_deposit.number, Number(data_deposit.data.amount_deposit), db_saldo)
var text_sukses = Ehztext(`「 *DEPOSIT SUKSES* 」
⭔ID : ${data_deposit.ID}
⭔Nomer: @${data_deposit.number.split('@')[0]}
⭔Nomer: ${data_deposit.number.split('@')[0]}
⭔Payment: ${data_deposit.payment}
⭔Tanggal: ${data_deposit.date.split(' ')[0]}
⭔Jumlah Deposit: Rp${toRupiah(data_deposit.data.amount_deposit)}`)
reply(`${text_sukses}\n`)
conn.sendMessage(data_deposit.number, { text: `${text_sukses}\n\n_Deposit kamu telah dikonfirmasi oleh admin, silahkan cek saldo dengan cara ketik #saldo_`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break
case 'rejectdepo':{
if (!isOwner) return onlyOwner()
if (!q) return reply(`Contoh: ${prefix+command} 628xxx`)
let orang = q.split(",")[0].replace(/[^0-9]/g, '')
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
reply(`Sukses Reject  Deposit `)
conn.sendMessage(data_deposit.number, { text: `Maaf Deposit Dengan ID : *${data_deposit.ID}* Ditolak, Jika ada kendala hubungin Owner Bot.\nwa.me/${global.ownerNumber}`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break
 case 'payment':{
let tekssss = Ehztext(`───「  *PAYMENT*  」────

- *Dana :* ${global.dana}
- *Gopay :*  Scan qr di atas
- *Ovo :* Scan qr di atas
- *Qris :* Scan qr di atas

OK, thanks udah order di \n*${global.nameToko}*
`)
conn.sendMessage(from, { image: fs.readFileSync(`./stik/qris.jpg`),
 caption: tekssss, 
footer: `${global.ownerName} © 2022`},
{quoted: m})
}
break
case 'sendqr':{
	if (!isOwner) return onlyOwner()
	if (!q) return reply('*Contoh:*\n.add 628xxx')
	var number = q.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
let tekssss = Ehztext(`───「  *PAYMENT*  」────

- *Dana :* ${global.dana}
- *Gopay :*  Scan qr di atas
- *Ovo :* Scan qr di atas
- *Qris :* Scan qr di atas

_Pembayaran ini Telah di kirim oleh Admin_
_Melalui bot ini🙏_


OK, thanks udah order di \n*${global.nameToko}*
`)
conn.sendMessage(number, { image: fs.readFileSync(`./stik/qris.jpg`),
 caption: tekssss, 
footer: `${global.ownerName} © 2022`},
{quoted: m})
reply (`Suksess Owner ku tercinta 😘🙏`)
}
break
case 'proses':{
if (isGroup) return reply('husus private chat')
let tek = Ehztext(`「 *TRANSAKSI PENDING* 」\n\n\`\`\`🎀 PRODUK : ${q}\n📆 TANGGAL : ${calender}\n⌚ JAM     : ${timeWib}\n✨ STATUS  : Pending\`\`\`\n\n*--------------------------*\n\n*Pesanan ini akan diproses manual oleh admin,* *Tunggu admin memprosesnya??*\n*Atau Chat : Wa.me//${global.nomerOwner}*`)
let btn_menu = [
{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE SAYA TUNGGU👍' }, type: 1 },
]
conn.sendMessage(from,
{text: tek})
conn.sendMessage(`${global.ownerNumber}`, {text: `*👋HALLO OWNER KU, ADA YANG ORDER PRODUK ${q} NIH*\n\n*DARI* : ${sender.split('@')[0]}`})
}
break
case 'done':{
if (isGroup) return reply('husus private chat')
let tek = Ehztext(`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${calender}\n⌚ JAM     : ${timeWib}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih Telah order di *${global.nameToko}*\nNext Order ya🙏`)
let btn_menu = [
{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE THENKS👍' }, type: 1 },
]
conn.sendMessage(from,
{text: tek})
}
break
case 'ff':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP FF*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "FREE FIRE") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik .deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break
case 'ml':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP ML*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "MOBILE LEGENDS" && i.category !== "Membership") {
	let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List diamond Mobile Legends",
buttonText: "tekan disini",
sections: [
{
title: "Diamond Mobile Legends",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'fcmobile':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "FC Mobile") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'coc':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Clash of Clans") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'hok':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Honor of Kings") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pubg1':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "PUBG New State Mobile") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'sausageman':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Sausage Man") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case '8ballpool':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP FF*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "8 Ball Pool") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'zepeto':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP ZEPETO*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Zepeto") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'lokapala':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP FF*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Lokapala") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'garena':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP GARENA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "GARENA") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'lita':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP HONKAI IMPACT 3*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Lita") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'aov':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP AOV*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "ARENA OF VALOR") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'sps':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP SUPER SUS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Super Sus") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'hago':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP SUPER SUS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "HAGO") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'growtopia':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP GROWTOPIA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Growtopia") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pubg':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP PUBG*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "PUBG MOBILE" && i.category !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break
case 'cod':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP PUBG*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Call of Duty MOBILE") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break
case 'stumble':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP PUBG*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Stumble Guys") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break
case 'genshin':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP PUBG*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Genshin Impact") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break
case 'hi3':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP HONKAI IMPACT 3*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Honkai Impac 3t") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break
case 'pb':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOPUP PUBG*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "POINT BLANK") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break
case 'pln':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA TOKEN PLN*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "PLN") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'netflix':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM NETFLIX*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Netflix") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'spotify':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM SPOTIFY*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "SPOTIFY") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'yt1':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM YOUTUBE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Youtube Premium") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'canva':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM CANVA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "canva") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'am':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM ALIGHT MOTION*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Alight Motion") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'disney':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM DISNEY*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Disney") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pv':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM Prime Video*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Prime Video") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'viu':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PREMIUM VIU*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Viu") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'dana':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA SALDO DANA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "DANA") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'vgarena': {
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");

    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            conn.sendMessage(`${global.ownerNumber}`, { 
                text: 'Silahkan sambungkan IP (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' 
            });
        } else {
            const comparePrices = (a, b) => {
                return Number(a.price.replace(/[^0-9.-]+/g, "")) - Number(b.price.replace(/[^0-9.-]+/g, ""));
            };

            let teks = `*LIST HARGA VOUCHER GARENA*\n\nIngin membeli voucher? ketik *${prefix}beli <kode_voucher>*\n\n`;
            let listny = [];

            res.data
                .filter(item => item.provider === "voucher garena")
                .sort(comparePrices)
                .forEach(item => {
                    let profit = (untung / 100) * Number(item.price);
                    listny.push({
                        title: `${item.name}`,
                        rowId: `.beli ${item.code}`,
                        description: `Harga: Rp${toRupiah(Number(item.price) + Math.ceil(profit))} | Status ${item.status === "available" ? "✅" : "❎"}`
                    });
                });

            var listMessage = {
                text: "Berikut daftar voucher Garena yang tersedia:\nIngin membeli? bisa ketik #deposit. Selamat berbelanja 🛍️",
                buttonText: "Klik di sini",
                sections: [
                    {
                        title: "Pilih voucher yang tersedia",
                        rows: listny
                    }
                ]
            };

 conn.sendMessage(from, listMessage);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        reply('Terjadi kesalahan, coba lagi nanti.');
    });
}
break;

break

case 'mandiri':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA SALDO MANDIRI*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Mandiri E-Toll") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'grab':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA SALDO MANDIRI*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "Grab penumpang") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'gopay':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA SALDO GOPAY*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "GO PAY") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'ovo':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA SALDO OVO*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "OVO") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'shopeepay':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA SALDO SHOPEEPAY*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "SHOPEE PAY") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'linkaja': {
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA SALDO LINKAJA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "LinkAja") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'smartfren':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA KUOTA SMARTFREN*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "SMARTFREN" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'telkomsel':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA KUOTA TELKOMSEL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "TELKOMSEL" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'axis':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA KUOTA AXIS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "AXIS" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'indosat':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA KUOTA INDOSAT*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "INDOSAT" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'three':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA KUOTA THREE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "TRI" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'byu':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA KUOTA BYU*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "by.U" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'xl':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA KUOTA XL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "XL" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pul_smartfren':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PULSA SMARTFREN*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "SMARTFREN" && i.category == "Pulsa Reguler") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pul_telkomsel':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PULSA TELKOMSEL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "TELKOMSEL" && i.category == "Pulsa Reguler") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pul_axis':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PULSA AXIS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "AXIS" && i.category == "Pulsa Reguler") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pul_indosat':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PULSA INDOSAT*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "INDOSAT" && i.category == "Pulsa Reguler") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pul_xl':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PULSA XL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "XL" && i.category == "Pulsa Reguler") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pul_byu':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = `*LIST HARGA PULSA BYU*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "by.U" && i.category == "Pulsa Reguler") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

case 'pul_three':{
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) {
reply('Server maintenance.')
conn.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider' })
} else {
var regeXcomp = (a, b) => {
var aPrice = Number(a.price.replace(/[^0-9.-]+/g,""));
var bPrice = Number(b.price.replace(/[^0-9.-]+/g,""));
return aPrice - bPrice
};
let teks = Ehztext(`*LIST HARGA PULSA THREE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`)
res.data.sort(regeXcomp)
let listny = [];
for (let i of res.data) {
if (i.provider == "THREE" && i.category == "Pulsa Reguler") {
let prof = (untung / 100) * i.price
listny.push({
title: `${i.name}`,
rowId: `.topup ${i.code}`,
description: `Harga: Rp${toRupiah(Number(i.price)  + Number(Math.ceil(prof)))} | Status ${i.status == "available" ? "✅" : "❎"}`
})
}
}
var listMessage = {
text: "Berikut List Yg Kami sediakan\nIsi saldo? bisa ketik #deposit. Selamat berbelanja 🛍️",
buttonText: "tekan disini",
sections: [
{
title: "Pilih list yang tersedia",
rows: listny
}]}
conn.sendMessage(from, listMessage)
}
})
}
break

// ××××××××× Toko ×××××××{××//
case 'pakaian': {
const { downloadContentFromMessage,generateWAMessageFromContent,proto,prepareWAMessageMedia,generateWAMessageContent } = require("baileys")
let name = m.pushName || conn.getName(m.sender);
let pan = `
> Berikut List Pakaian Yang Tersedia Saat Ini
`;
const url = thumb
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: pickRandom(fotoPakaian) } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `Distro\nTersedia Ukuran m,l,xl,xxl`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"👤 Chat Owner ( ${global.nomerOwner} )","url":"https://wa.me/${global.nomerOwner}","merchant_url":"https://wa.me//${global.nomerOwner}"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: pickRandom(fotoPakaian) } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `
Distro2\nBahan Cutton Tersedia Ukuran s,m,l,xl,xxl\nTersisa 4 Pcs`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"   ( ${botName} )","url":"https://wa.me/${global.nomerOwner}","merchant_url":"https://wa.me//${global.nomerOwner}"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break
//××××××××××× panel ×××××××××//
case 'listpanel':{
let pnel = Ehztext(`🎐 ${gris}「 List Harga Panel 」${gris} 🎐

${gris}📡 UNLIMITED${gris}
⤷ _Unlimited Ram/Cpu_
⤷ _Masa Aktip 1 Bulan_
⤷ _Dengan Harga 10k_

${gris}📡 1GB${gris}
⤷ _1GB Ram/50 Cpu_
⤷ _Masa Aktip 10 Hari_
⤷ _Dengan Harga 1k_

${gris}📡 2GB${gris}
⤷ _2GB Ram/70 Cpu_
⤷ _Masa Aktip 15 Hari_
⤷ _Dengan Harga 2k_

${gris}📡 3GB${gris}
⤷ _3GB Ram/100 Cpu_
⤷ _Masa Aktip 20 Hari_
⤷ _Dengan Harga 3k_

${gris}📡 4GB${gris}
⤷ _4GB Ram/125 Cpu_
⤷ _Masa Aktip 25 Hari_
⤷ _Dengan Harga 4k_

${gris}📡 5GB${gris}
⤷ _5GB Ram/150 Cpu_
⤷ _Masa Aktip 30 Hari_
⤷ _Dengan Harga 5k_

${gris}📡 6GB${gris}
⤷ _6GB Ram/175 Cpu_
⤷ _Masa Aktip 30 Hari_
⤷ _Dengan Harga 6k_

${gris}📡 7GB${gris}
⤷ _7GB Ram/175 Cpu_
⤷ _Masa Aktip 30 Hari_
⤷ _Dengan Harga 7k_

${gris}📡 8GB${gris}
⤷ _8GB Ram/200 Cpu_
⤷ _Masa Aktip 30 Hari_
⤷ _Dengan Harga 8k_

*NOTE* :
${readmore}
${gris}🎐 Keuntungan 🎐${gris}

• Ga Boros Kuota
• Server Masih Aktif Meski Anda Keluar Dari Situs
• Script Anda Aman ( no culik sc )
• Jika Situs Mati, Hubungi Admin Dengan Jaminan Uang Anda Kami Kembalikan Kembali

`)
reply(pnel)
}
break
case 'panel': {
 let { generateWAMessageFromContent, prepareWAMessageMedia,proto } = require("baileys")
let t = q.split(',');
if (t.length < 2) return setReply(`Example: ${prefix + command} user,nomer
Use: .panel rangel,6285795718659`)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: 'List Disk dan Cpu Panel',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'Click For List', 
    sections
};

let msghhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: false, 
 forwardedNewsletterMessageInfo: {
 newsletterJid,
 newsletterName,
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: `> Pilih Ukuran Disk Untuk Server `
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*${gris}[ Hallo Kak ${pushname} ]${gris}*`,
 subtitle: "Create",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/93ef8c1c98b44f3486207.png" } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await conn.relayMessage(msghhhhhhh.key.remoteJid, msghhhhhhh.message, {
 messageId: msghhhhhhh.key.id
})}
break
case 'unli': {
    if (!isPremium) return onlyPremium()
    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
    
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username + "Unli";
    let egg = global.eggs;
    let loc = global.location;
    let memo = "0";
    let cpu = "0";
    let disk = "0";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png";
    if (!u) return;
    
    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "001";
    
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    
    let user = data.attributes;
    
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });
    
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;
    
    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta,
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    
    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
    
    let server = res.attributes;
    
    let message = `*Halo kak Ada Panel*

*Data Akun Panel Anda:*
• USERNAME: ${user.username}
• PASSWORD: ${password}
• LOGIN: ${domain}

*Note:*
1. OWNER HANYA MENGIRIM 1X DATA AKUN ANDA.
MOHON DI SIMPAN BAIK-BAIK. KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI.
2. GARANSI CUMA 1X. KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN.
3. JANGAN RUN SC DDOS DI PANEL ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF.`;

    await conn.sendMessage(u, { image: { url: akunlo }, caption: message });
let successMessage = "Success Unlimited";
    await conn.sendMessage(m.chat, { text: successMessage });
    
    break;
}
case '1gb': {
    if (!isPremium) return onlyPremium();
    
    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username + "1GB";
    let egg = global.eggs;
    let loc = global.location;
    let memo = "1024";
    let cpu = "50";
    let disk = "0";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png";
    if (!u) return;
    
    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "001";
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;
    
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta,
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;

    // Prepare the combined message with text and image
    let ctf = `*[ Halo kak Ada Panel ]*\n\n*- ⎙ Data Akun Panel Anda  -*\n\n*• USERNAME* : ${user.username}\n*• PASSWORD* : ${password}\n*• LOGIN* : ${domain}\n\n*Note* ` + readmore + `\n\n[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*\nMOHON DI SIMPAN BAIK BAIK\nKALAU DATA AKUN ANDA HILANG OWNER\nTIDAK DAPAT MENGIRIM AKUN ANDA LAGI\n\n[2] *GARANSI CUMA 1X*\nKLAIM GARANSI HARUS SEND BUKTI PEMBELIAN\n\n[3] *JANGAN RUN SC DDOS DI PANEL*\nATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF`;

    // Send text with image in a single message
    await conn.sendMessage(u, { image: { url: akunlo }, caption: ctf });
let successMessage = "Success 1GB";
    await conn.sendMessage(m.chat, { text: successMessage });
    break;}
case '2gb': {
    if (!isPremium) return onlyPremium()
    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username + "2GB";
    let egg = global.eggs;
    let loc = global.location;
    let memo = "2048";
    let cpu = "70";
    let disk = "0";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png";
    if (!u) return;

    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "001";
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes;

    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta,
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });
    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
    let server = res.attributes;

    // Prepare the combined message with text and image
    let ctff = `*${gris}[ Halo kak Ada Panel ]${gris}*\n\n*- ⎙ Data Akun Panel Anda  -*\n\n*• USERNAME* : ${user.username}\n*• PASSWORD* : ${password}\n*• LOGIN* : ${domain}\n\n*Note* ` + readmore + `\n\n[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*\nMOHON DI SIMPAN BAIK BAIK\nKALAU DATA AKUN ANDA HILANG OWNER\nTIDAK DAPAT MENGIRIM AKUN ANDA LAGI\n\n[2] *GARANSI CUMA 1X*\nKLAIM GARANSI HARUS SEND BUKTI PEMBELIAN\n\n[3] *JANGAN RUN SC DDOS DI PANEL*\nATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF`;

    // Send text with image in a single message
    await conn.sendMessage(u, { image: { url: akunlo }, caption: ctff });

    // Send success message to the command sender
    let successMessage = "Success 2GB";
    await conn.sendMessage(m.chat, { text: successMessage });

    break;
}
case '3gb': {
    if (!isPremium) return reply(`Khusus Orang Spesial`);

    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);
    
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username + "3GB";
    let egg = global.eggs;
    let loc = global.location;
    let memo = "3072";
    let cpu = "100";
    let disk = "0";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png"; 

    if (!u) return;
    
    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "001";

    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    
    let user = data.attributes;

    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });

    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta,
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });

    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
    
    let server = res.attributes;

    // Prepare the combined message with text and image
    let ctfff = `*${gris}[ Halo kak Ada Panel ]${gris}*\n\n*- ⎙ Data Akun Panel Anda  -*\n\n*• USERNAME* : ${user.username}\n*• PASSWORD* : ${password}\n*• LOGIN* : ${domain}\n\n*Note* ` + readmore + `\n\n[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*\nMOHON DI SIMPAN BAIK BAIK\nKALAU DATA AKUN ANDA HILANG OWNER\nTIDAK DAPAT MENGIRIM AKUN ANDA LAGI\n\n[2] *GARANSI CUMA 1X*\nKLAIM GARANSI HARUS SEND BUKTI PEMBELIAN\n\n[3] *JANGAN RUN SC DDOS DI PANEL*\nATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF`;

    // Send text with image in a single message
    await conn.sendMessage(u, { image: { url: akunlo }, caption: ctfff });

    // Send success message to the command sender
    let successMessage = "Success 3GB";
    await conn.sendMessage(m.chat, { text: successMessage });

    break;
}
case '4gb': {
    if (!isPremium) return onlyPremium()

    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);

    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username + "4";
    let egg = global.eggs;
    let loc = global.location;
    let memo = "4048";
    let cpu = "125";
    let disk = "4000";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png"; 

    if (!u) return;

    let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "001";

    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;

    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });

    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta,
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    });

    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));

    let server = res.attributes;

    // Prepare the combined message with text and image
    let ctffff = `*${gris}[ Halo kak ${pushname} Ada Panel ]${gris}*\n\n*- ⎙ Data Akun Panel Anda  -*\n\n*• USERNAME* : ${user.username}\n*• PASSWORD* : ${password}\n*• LOGIN* : ${domain}\n\n*Note* ` + readmore + `\n\n[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*\nMOHON DI SIMPAN BAIK BAIK\nKALAU DATA AKUN ANDA HILANG OWNER\nTIDAK DAPAT MENGIRIM AKUN ANDA LAGI\n\n[2] *GARANSI CUMA 1X*\nKLAIM GARANSI HARUS SEND BUKTI PEMBELIAN\n\n[3] *JANGAN RUN SC DDOS DI PANEL*\nATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF`;

    // Send text with image in a single message
    await conn.sendMessage(u, { image: { url: akunlo }, caption: ctffff });

    // Send success message to the command sender
    let successMessage = "Success 4GB";
    await conn.sendMessage(m.chat, { text: successMessage });

    break;
}
case '5gb': {
    if (!isPremium) return onlyPremium()
    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
    let username = t[0];
    let u = t[1] + '@s.whatsapp.net'
    let name = username + "5GB"
    let egg = global.eggs
    let loc = global.location
    let memo = "5138"
    let cpu = "150"
    let disk = "0"
    let email = username + "505@gmail.com"
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png" 
    if (!u) return
    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
    let password = username + "0011"
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    })
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    let user = data.attributes
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    })
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta,
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let res = await f3.json()
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
    let server = res.attributes

    // Prepare message text
    let messageText = `*${gris}[ Halo kak Ada Panel ]${gris}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

    // Send text and image together
    await conn.sendMessage(u, {
        text: messageText,
        image: { url: akunlo }
    });
let successMessage = "Success 5GB";
    await conn.sendMessage(m.chat, { text: successMessage });
    break
}
case '6gb': {
    if (!isPremium) return reply(`*Khusus Orang Spesial*`);

    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);

    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggs;
    let loc = global.location;
    let memo = "6000";
    let cpu = "175";
    let disk = "6000";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png";

    if (!u) return;

    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "009118";
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;
    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });
    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            }
        })
    });
    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));

    let server = res.attributes;

    let messageText = `*Halo kak Ada Panel* 

*Data Akun Panel Anda:*

• USERNAME: ${user.username}
• PASSWORD: ${password}
• LOGIN: ${domain}

*Note:*

1. *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
   MOHON DI SIMPAN BAIK BAIK
   KALAU DATA AKUN ANDA HILANG OWNER
   TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

2. *GARANSI CUMA 1X* 
   KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

3. *JANGAN RUN SC DDOS DI PANEL*  
   ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF`;

    await conn.sendMessage(u, {
        text: messageText,
        image: { url: akunlo }
    });
await conn.sendMessage(m.chat, { text: "Success 6GB" });
    break;
}
case '7gb': {
    if (!isPremium) return reply(`Khusus Orang Spesial`);

    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);

    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggs;
    let loc = global.location;
    let memo = "7000";
    let cpu = "175";
    let disk = "7000";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png"; 

    if (!u) return;

    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "009118";
    
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;

    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });

    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            }
        })
    });

    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));

    let server = res.attributes;

    // Combine text and image into one message
    let messageText = `*Halo kak Ada Panel* 

*Data Akun Panel Anda:*

• USERNAME: ${user.username}
• PASSWORD: ${password}
• LOGIN: ${domain}

*Note:*

1. *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
   MOHON DI SIMPAN BAIK BAIK
   KALAU DATA AKUN ANDA HILANG OWNER
   TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

2. *GARANSI CUMA 1X* 
   KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

3. *JANGAN RUN SC DDOS DI PANEL*  
   ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF`;

    // Send the message with text and image
    await conn.sendMessage(u, {
        text: messageText,
        image: { url: akunlo }
    });
await conn.sendMessage(m.chat, { text: "Success 7GB" });

    break;
}
case '8gb': {
    if (!isOwner) return onlyOwner()

    let t = q.split(',');
    if (t.length < 2) return reply(`*Format salah!*\nPenggunaan:\n${prefix + command} user,nomer`);

    let username = t[0];
    let u = t[1] + '@s.whatsapp.net';
    let name = username;
    let egg = global.eggsnya;
    let loc = global.location;
    let memo = "8000";
    let cpu = "200";
    let disk = "8000";
    let email = username + "505@gmail.com";
    let akunlo = "https://telegra.ph/file/a25676470956f346afda1.png"; 

    if (!u) return;

    let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {};
    let password = username + "009118";
    
    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username,
            "first_name": username,
            "last_name": username,
            "language": "en",
            "password": password
        })
    });

    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

    let user = data.attributes;

    let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        }
    });

    let data2 = await f2.json();
    let startup_cmd = data2.attributes.startup;

    let f3 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiPlta
        },
        "body": JSON.stringify({
            "name": name,
            "description": " ",
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": memo,
                "swap": 0,
                "disk": disk,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 1
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            }
        })
    });

    let res = await f3.json();
    if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));

    let server = res.attributes;

    // Combine text and image into one message
    let messageText = `*Halo kak Ada Panel* 

*Data Akun Panel Anda:*

• USERNAME: ${user.username}
• PASSWORD: ${password}
• LOGIN: ${domain}

*Note:*

1. *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
   MOHON DI SIMPAN BAIK BAIK
   KALAU DATA AKUN ANDA HILANG OWNER
   TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

2. *GARANSI CUMA 1X* 
   KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

3. *JANGAN RUN SC DDOS DI PANEL*  
   ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF`;

    // Send the message with text and image
    await conn.sendMessage(u, {
        text: messageText,
        image: { url: akunlo }
    });
await conn.sendMessage(m.chat, { text: "Success 8GB" });

    break;
}
case 'listadminpanel': {
  if (!isPremium) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiPlta
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case 'createadmin': {
if (!isOwner) return onlyOwner()

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiPlta
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await conn.sendMessage(m.chat, listMessage)

    await conn.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
• JANGAN RUSUH SERVER LAIN
• CREATE PANEL SECUKUPNYA


`,

    })

} 
break
case 'listsrv': {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiPlta
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiPltc
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case 'delsrv': {
 if (!isOwner) return onlyOwner()
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiPlta,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case 'listusr': {
  if (!isPremium) return reply("Khusus org spesial")
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiPlta
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case 'detusr': {
if (!isOwner) return onlyOwner()
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiPlta
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'delusr': {
  if (!isOwner) return onlyOwner
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apiPlta
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
//××××××× jadibot×××××××××//
case 'jadibot':
if (isGroup) return setReply('Command hanya untuk private')
jadibot(conn, from)
break
case 'stopjadibot':
if (isGroup) return setReply('Command hanya untuk private')
stopjadibot(conn, from)
break
   case 'listjadibot':
if (isGroup) return setReply("Command hanya untuk private");
listjadibot(conn, from)
break
// ×××××××× Memfes ×××××××//
case 'secreto': case 'confes':
                case 'menfess': case 'menfes': 
  
                   if (isGroup) return setReply('Khsus Private Chat Bot')
                   if (args.length < 1) return setReply (`*Cara penggunaan :*\n${prefix+command} nomer|nama pengirim|pesannya\n\n*Note :* nomer harus format internasional dan nama pengirim boleh nama samaran atau rahasia\n\n*Contoh :* ${prefix+command} ${botNumber.split("@")[0]}|Seseorang|Hai Kak`)
                   var num = q.split('|')[0];
                   var name = q.split('|')[1]; 
                   var pesan = q.split('|')[2];
                   if (isNaN(num)) return setReply (`Tujuan Harus Berupa Nomor!\n\nContoh :\n${command} `+botNumber.split("@")[0]+'|Anonim|Hai Kak')
                   if (!num) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!name) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!pesan) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                  var num = num.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
                   var cek = await conn.onWhatsApp(num)
                   if (cek.length === 0) return setReply (`Nomer yang anda masukkan tidak terdaftar di WhatsApp!`)
                   var num = cek[0].jid
                   if (sender === num) return setReply (`Jangan kirim ke diri sendiri dong🥲`)
                   if (botNumber === num) return setReply (`Jangan kirim ke nomer bot kak🥲`)
                   var teksMen = `Hi Saya *${botName}* Ada Yang Kirim Pesan Rahasia Untuk Kamu Nih 🥳

🌷 Nama Pengirim: *${name}*

💌 Pesan : ${pesan}


*NOTE*:
_Ketik .balas dan geser ke kanan pesan ini untuk menjawab pesan seseorang tersebut_
`          
                   conn.sendMessage(num, {text: teksMen, mentions: [sender]})
                   conn.sendMessage(num, {image: {url: 'https://telegra.ph/file/15b96750f11c403727c6e.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                   reply(`Sukses mengirim pesan Rahasia kepada ${num.split("@")[0]}`)
                   break
                case 'balas':
                    if(isGroup) return
                    if(!mentionByReply) return reply('Balas pesan bot yang isinya menfess di atas')
                    if(!dev.quoted.text.includes('Hi Saya')) return reply('Balas/Reply pesan bot yang isi menfes di atas')
                    var isSecreto = secreto.find(i => i.sender === sender)
                    if (isSecreto) {
                     if (isSecreto.status === 'ENTER-MESSAGE') {
                       reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                     }
                   } else {
                     var obj = {
                       sender: sender,
                       pengirim: m.quoted.mentionedJid[0],
                       status: 'ENTER-MESSAGE'
                     }
                     //console.log(obj)
                     secreto.push(obj)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto))
                     reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                   }
                   break   
 //××××××× INFO ××××××××××××//
 case 'sewa': case 'sewabot': {
var sewanya = dada(prefix, pushname, ucapanWaktu)      
conn.sendMessage(from, { contextInfo: { mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `Sewa Bot`, 
mediaType: 1,
renderLargerThumbnail: true,
thumbnail:thumb,
mediaUrl: sig,
//sourceUrl: sig
sourceUrl: `https://wa.me/6281316643491?text=Mau+sewa+bang`
}
}, text: Ehztext(sewanya)}, {quoted: m})
}
break 
  case 'owner':
    case 'creator':{
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
    let name = await conn.getName(who)

    await conn.sendContactArray(m.chat, [ 
    [`${nomerOwner}@s.whatsapp.net`, `${ownerName}`, `Developer Bot`, `✍️ Masih Belajar Bwang Jangan Dibully`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🤖 I'm Bot WhatsApp`, `⚠️ Please Dont Spam Block or Banned`]
    ], m)
    await sendAnti(`Hii 👋, Chat Me ? Jangan Basa Basi To The Point Aje!`)
    } 
    break
  case 'script': case 'sc': {
      await loading()
const { downloadContentFromMessage,generateWAMessageFromContent,proto,prepareWAMessageMedia,generateWAMessageContent } = require("baileys")
let name = m.pushName || conn.getName(m.sender);
let pan = `
 > Berikut Adalah Script Menhera Tipe Case&plugins\n> Script Bot Tahap Demi Tahap Akan Update \n${wm}• 
`;
const url = thumb
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/dd667063936e08a926c02.jpg" } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `> Tampilan Connsole`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/6281316643491","merchant_url":"https://wa.me//6281316643491"}`
                    },
                  ],
                },
              },{
               header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/1e9f9b571a7b3342477c7.jpg" } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `> Untuk Keamanan Group`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/6281316643491","merchant_url":"https://wa.me//6281316643491"}`
                    },
                  ],
                },
              },{
              header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/ea497eec768de2d5642b3.jpg" } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `> 1 Sc 2 tipe Yaitu Bisa\nAdd Fitur Case & plugins`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/6281316643491","merchant_url":"https://wa.me//6281316643491"}`
                    },
                  ],
                },
              },{
              header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/31afb18128ad48320562c.jpg" } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `> Fitur Panel Pterodactyl 📡\n fix Button`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/6281316643491","merchant_url":"https://wa.me//6281316643491"}`
                    },
                  ],
                },
              },{
              header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/e48eae64477b56992f96e.jpg" } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `> Fitur Top Up 💸\n. Fix Button`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/6281316643491","merchant_url":"https://wa.me//6281316643491"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/d4e799f0603e025955cb6.jpg" } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `> setting SETMENU & SETREPLY`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/6281316643491","merchant_url":"https://wa.me//6281316643491"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}
break

 	case 'speed':
	setReply(`Speed: ${latensi.toFixed(4)} Second`)
	break       
		   
	case 'runtime':{
    let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
    setReply (`⏰ Bot aktif selama ${clockString(time)}`)
	//setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
  }
	break
 case 'ping': {
	const used = process.memoryUsage()
	let timestamp = speed()
	let latensi = speed() - timestamp
	let neww = performance.now()
	let oldd = performance.now()
	let respon = `
	Kecepatan Respon ${latensi.toFixed(4)} _Second_ 
	Info Server
	RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
	_NodeJS Memory Usaage_
	${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
	`.trim()
	setReply(respon)
				}
break
 case 'status':
                case 'statistik': {            
                   var nodeos = require('node-os-utils')
                  const getFolderSize = (await import("get-folder-size")).default;
                   var { totalGb, usedGb, freeGb } = await nodeos.drive.info()
                   //var { download, upload } = await checkBandwidth()                  
                   var allgrup = await conn.groupFetchAllParticipating().then(res => Object.values(res))
                   var allchat = await store.chats.all() 
                  let listpc = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                   let storage = await getFolderSize.loose('.');
	               let moduls = await getFolderSize.loose('./node_modules');
	               let session = await getFolderSize.loose('./session')
	               let databse = await getFolderSize.strict('./database/database.json');
                   var stat = `*STATISTIK BOT*

*Speed :* ${latensi.toFixed(4)} Second
*Runtime :* ${runtime(process.uptime())}
*Total Chat :* ${allchat.length}
*Private Chat :* ${listpc.length}
*Group Chat :* ${allgrup.length}

*Storage*
	*Internal* : ${FileSize(storage)}
	*Modules* : ${FileSize(moduls)}
	*Session* : ${FileSize(session)}
	*Database* : ${FileSize(databse)}
	*Used :* ${usedGb} GB
    *Free :* ${freeGb} GB
`
                   setReply(stat)
                   }
                   break
 case 'laporerror':{
let reportzhir = args[0]
if (!reportzhir) return setReply(`Contoh:\n.laporerror menu tidak muncul`)
let duhhh = q.split('|')[0]
let text12 = Ehztext(`「 *Report Bug* 」
*Pesan:* ${duhhh}
*Dari:* @${sender.split('@')[0]}`)
setReply(`Oke Kak Reportmu Sudah Terkirim Ke Owner`)
conn.sendMessage(nomerOwner + "@s.whatsapp.net",{image: { url: pickRandom(fotoRandom)}, caption: text12, mentionedJid:[m.sender], quoted: m })
}
break
 case 'rules':{
    let teks = Ehztext(`
    Syarat dan Ketentuan menggunakan *${botName}*

    1. Nama dan nomer user ${botName}
    akan Kami simpan di dalam
    server selama bot aktif

    2. Data akan di hapus ketika bot Offline
    atau di hapus oleh Owner Bot

    3. Kami tidak menyimpan gambar,
    video, file, audio, dan dokumen
    yang kamu kirim ke ${botName}

    4. Kami tidak akan pernah meminta users
    untuk memberikan informasi pribadi

    5. Jika menemukan Bug/Error silahkan
    langsung lapor ke Owner atau Developer
    atau bisa juga memakai fitur _*reportbug*_

    6. Beberapa fitur mungkin ada yang error,
    jadi tunggu sampai developer
    meperbaiki fitur tersebut

    8. Bot ini sudah di lengkapi dengan
    fitur _*Auto laporerror*_ jika terjadi
    error maka bot akan auto report ke
    developer, terkecuali error yang
    menyebabkan bot mati, maka user
    harus lapor ke developer

    7. Bot ini juga sudah di lengkapi dengan
    Fitur Anti Spam jika kamu terdeteksi
    melakukan spam, maka Bot tidak
    akan menanggapi kamu selama 20 detik

    9. User dilarang keras menelpon bot!
    jika melanggar maka kamu akan terkena
    banned,block dan dikirim bug

    10. Bot tidak akan menanggapi user yang
    meminta untuk di save nomernya`)
    conn.relayMessage(from, { liveLocationMessage: { 
    degreesLatitude: 35.676570,
    degreesLongitude: 139.762148,
    caption : teks,
    sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: thumb,
    contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
    containsAutoReply: true,
    showAdAttribution: false,
    }
    }
    }
    }, { quoted: fkontak })
    }
    break
case 'qris':
case 'bayar':
case 'donasi':
let data1 = global.db.data.others['runtime']
let time1 = (new Date - data1.runtime) || 'lamanya'
let qrnya = ' _Nih kakak Tinggal Scan Aja QR ini Dan Masukan Nominal Nya_'
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`aktif selama ${clockString(time1)}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
sourceUrl:`${web}`
}}, image: { url: 'https://telegra.ph/file/a10591314e61677cd6251.jpg' }, caption: qrnya}, { quoted: ftoko })
break
case 'dashboard':{
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`
}

let teks = Ehztext(`
––––––『 *Dashboard* 』––––––
⭔ *Runtime* : ${runtime(process.uptime())}
⭔ *Reset* : ${resetnye}
⭔ *Total Hit* : ${thisHit.toLocaleString()}
⭔ *Storage* : ${FileSize(storage)}
⭔ *Modules* : ${FileSize(moduls)}
⭔ *Session* : ${FileSize(session)}
⭔ *Database* : ${FileSize(databse)}
`)
let gcHit = `\n\n*––––––『 Group Hit 』––––––*\n`
    let data = db.data.chats
    for (let key in data) {
        if (data[key].hasOwnProperty('hit')) {
          gcHit += '⭔ ' + data[key].name + " : " + data[key].hit+'\n'
        }
    }
let fall = Ehztext("––––––『 *Commands Today* 』––––––\n")
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += " ⭔ "+` *${e.cmd}* : ${e.succes+e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});

for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
}

for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
}

let akoh = Ehztext(`Total : ${dash.length} used`)
let tod = Ehztext("––––––『 *Commands Failed* 』––––––\n")
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += " ⭔ "+` *${e.cmd}* : ${e.failed} \n`

});
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"––––––『 *Commands Status* 』––––––\n"+" ⭔ *Succes* : "+tot+"\n"+" ⭔ *Failed* : "+total+"\n\n"+tod+"\n\n"+gcHit +"\n\n"


   


let link = 'https://telegra.ph/file/b659d66189445cab43a25.jpg'
//conn.sendAdReply(from,tekz,copyright,baileysVersion,link,{quoted:m})
setReply(tekz)
}
break
//××××××××××××× GROUP ×××××××××××××//
    
  case  'intro': {
if (!isGroup) return onlyGroup()
let teks = Ehztext('Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:')
reply(teks)
}
break  
    case 'add': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
}).catch((err) => setReply(jsonformat(err)))
}
break
case 'kickme':
	try{
	if (!isGroup) return onlyGroup()
	await conn.groupParticipantsUpdate(from, [sender], 'remove')
	await setReply("Mampus wkwkw")
	} catch (err){
	setReply(`${err}`)
	}
	break
case 'kick':
case 'remove': {
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if (!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res)).catch((err) => setReply(jsonformat(err))) 
}
break
case 'addkick':{
if (!isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
if(!q) return setReply(`Masukan nomer atau reply target`)
let grup = db.data.kickon[from]
let number = Input.split("@")[0]
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user Biadap`)
} else {
db.data.kickon[from] = []
//grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user Biadap`
setReply(teks)
}
}
break
case 'delkick':{
if (!isGroup) return onlyGroup()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply(`Masukan nomer atau reply target`)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input.split("@")[0]
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
}
break
case 'listkick':{
if (!isGroup) return onlyGroup()
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `List Kick\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`            
});
setReply(banya)
}
break
case 'promote':
    if (!isGroup && !isGroupAdmins) return onlyAdmin()
    if (!isBotGroupAdmins) return onlyBadmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                setReply(mess.succes)
                break
            case 'demote':
    if (!isGroup && !isGroupAdmins) return onlyAdmin()
    if (!isBotGroupAdmins) return onlyBadmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                setReply(mess.succes)
                break
case 'kickall': {
  if (!isGroup && !isGroupAdmins) return onlyAdmin()
  if (!isBotGroupAdmins) return onlyBadmin()
  const xeonkickall = (args[0] === 'numBut')
  ? q.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 if(chat.welcome == false) 
  db.data.chats[from].welcome = false
 for (let remove of xeonkickall) {
 await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 setReply(`Success`);
}
break

case 'tagadmin': case 'listadmin':{
    	if (!m.isGroup) return onlyGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = Ehztext(`   
*Group Admins:*
${listAdmin}
`.trim())
    conn.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'tagme':{
if (!isGroup) return onlyGroup()
let menst = [sender]
conn.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'setppgc':{
  if (!isGroup) return onlyGroup()
  if (!isGroupAdmins) return onlyAdmin()
  if (!isBotGroupAdmins) return onlyBadmin()
if (isImage || isQuotedImage) {
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case  'getppgc':
	if (!isGroup) return onlyGroup()
	await loading()
	try {
	var ppimg = await conn.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await conn.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break
 case 'delppgc': {
   if (!isGroup) return onlyGroup()
   if (!isGroupAdmins) return onlyAdmin()
   if (!isBotGroupAdmins) return onlyBadmin()
    await conn.removeProfilePicture(from)
    }
    break
case 'setnamegc':
    if (!isGroup) return onlyGroup()
    if (!isGroupAdmins) return onlyAdmin()
    if (!isBotGroupAdmins) return onlyBadmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await conn.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break

case 'setdesc':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return onlyBadmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await conn.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
case 'inspect':{
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let nana = await conn.groupGetInviteInfo(code)
//console.log(nana)
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text = Ehztext(
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`)
setReply(text)

}
break
case 'linkgroup': case 'linkgc':{
if (!isOwner && !isGroupAdmins) return onlyAdmin()
if (!m.isGroup) return onlyGroup()
if (!isBotGroupAdmins) return onlyBadmin()
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'revoke': case 'resetlinkgc':{
  if (!isOwner && !isGroupAdmins) return onlyAdmin()
  if (!m.isGroup) return onlyGroup()
  if (!isBotGroupAdmins) return onlyBadmin()
conn.groupRevokeInvite(from)
}
break
    case 'opentime':
    if (!isGroupAdmins) return onlyAdmin()
    if (!isBotGroupAdmins) return onlyBadmin()
    if (args[1]=="detik") {var timer = args[0]*`1000`
    } else if (args[1]=="menit") {var timer = args[0]*`60000`
    } else if (args[1]=="jam") {var timer = args[0]*`3600000`
    } else if (args[1]=="hari") {var timer = args[0]*`86400000`
    } else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
    setReply(`Open time ${q} dimulai dari sekarang`)
    setTimeout( () => {
    const open = Ehztext(`*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`)
    conn.groupSettingUpdate(from, 'not_announcement')
    setReply(open)
    }, timer)
    break
    case 'closetime':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply(`Contoh : ${prefix}closetime 5 detik`)}
let ko = await conn.sendMessage(from, { text:`Close time ${q} dimulai dari sekarang`}, {quoted: m})
setTimeout(() => deleteMessage(ko), 5000)

setTimeout( () => {
const tutup = Ehztext(`*Tepat waktu* grup ditutup oleh admin\n sekarang hanya admin yang dapat mengirim pesan`)
conn.groupSettingUpdate(from, 'announcement')
  setReply(tuyup)
}, timer)
}
break 
case 'gc':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!q) return setReply(`Contoh : ${command} close/open`)
if (args[0] == "close") {
conn.groupSettingUpdate(from, 'announcement')

} else if (args[0] == "open") {
conn.groupSettingUpdate(from, 'not_announcement')
} else {
setReply(`Contoh : ${command} close/open`)
}
break
case 'hidetag':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'tagall':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) {
var inpo = `I love you`+readmore+`tube :v`
} else var inpo = q 
let members_id = []
let tes = '\n'
await groupMembers.map( i => {
tes += `• @${i.id.split('@')[0]}\n`
members_id.push(i.id) })
mentions(`${inpo}
`+tes+``, members_id, false)
}
break 
case 'd':
case 'delchat':
case 'del':
case 'delete':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
Log(chatUpdate)
if (!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
} 
}
break
    case 'jid':{
      setReply(from)
     }
    break
case 'listonline': {
if (!isGroup) return onlyGroup()
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
        case 'caridoi':
        case 'cariteman':{
        let userny = Object.values(db.data.users);
        let teman = pickRandom(userny)
        let namTemen = teman.name
        let nomerTemen = teman.id
        setTimeout(() => {
        setReply('Sedang mencari....')
        }, 1000)
        setTimeout(() => {
        setReply('Berhasil mendapatkan satu org')
        }, 5000)
        setTimeout(() => {
        conn.sendContact(from, nomerTemen, namTemen, m)
        }, 9000)
        }
        break
case 'jadian': {
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
  case 'getpp':{
if (!isGroup) return setReply ("Digunakan Khsus Dalam Group")
if(isQuotedTag || isQuotedReply ){
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return setReply ('Reply targetnya kak atau Tag')
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await conn.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
conn.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
}
break 
case 'getname': 
    if (isGroup) {
    
console.log(users)
const sname = await conn.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await conn.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break

case 'read': {
const { downloadContentFromMessage } = require('baileys')
	if (!m.quoted) return setReply(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'afk':{
    if (!isGroup) return onlyGroup()
    if (!q) return setReply("Alasan afk afa ?")
    let me = m.sender
  let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = q
    setReply(` 📣 Kamu telah AFK\nAlasan ${q ? ': ' + q : ''}`)
    
}
break
  case'contag': {
 const froms = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false; 
 if (froms) {
 if (db && db.users && db.users.hasOwnProperty(froms)) {
 sendContact(db.users[froms].name, froms, m);
 } else {
 const name = await conn.getName(froms);
 conn.sendContact(name, froms, m);
 }
 } else {
 m.reply('Tag pengguna yang ingin dikirimkan kontaknya!');
 } 
 function sendContact(name, jid, m) {
 let sngContact = {
 displayName: `ini namanya ${name}`,
 contacts: [{
 displayName: name,
 vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${jid.split('@')[0]}:${jid.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
 }]
 };
 
 conn.sendMessage(m.chat, { contacts: sngContact, mentions: [jid] }, { ephemeralExpiration: 86400 });
 }
}
break
//××××××××× KEAMANAN GC ×××××××××//
case 'infogc': {
	if(!isGroup) return onlyGroup()
	let _meta = await conn.groupMetadata(from)
	  console.log(_meta)
	let _img = await conn.profilePictureUrl(_meta.id, 'image') 

let caption = `*G R O U P I N F O*

*System* 
Anti Link gc : *${isAntilinkGc ? 'Aktif✅' : 'Mati❌'}*
Anti Link : *${isAntiLink ? 'Aktif✅' : 'Mati❌'}*
Anti Virtex : *${isAntiVirtex ? 'Aktif✅' : 'Mati❌'}*
Anti Asing : *${isKickarea ? 'Aktif✅' : 'Mati❌'}*
Anti Delete : *${isAntidelete ? 'Aktif✅' : 'Mati❌'}*

Anti ViewOnce : *${isAntiViewOnce ? 'Aktif✅' : 'Mati❌'}*
Anti Toxic : *${isAntiToxic ? 'Aktif✅' : 'Mati❌'}*
Anti Promosi : *${isAntiPromosi ? 'Aktif✅' : 'Mati❌'}*
Simi Group : *${isSimi ? 'Aktif✅' : 'Mati❌'}*


⭓ *Name :* ${_meta.subject}
⭓ *ID Grup :* ${_meta.id}
⭓ *Dibuat :* ${moment(_meta.creation * 1000).format('ll')}
⭓ *Owner Grup :* ${_meta.subjectOwner}
⭓ *Jumlah Admin :* ${_meta.participants.filter(x => x.admin === 'admin').length}
⭓ *Jumlah Peserta :* ${_meta.participants.filter(x => x.admin === null).length}
⭓ *Desc :* 
${_meta.desc}`

	await conn.sendMessage(from,{
	caption,
	image: await getBuffer(_img)
	},
	{ quoted: fcall }
	)
	}
	break
case 'banstik':{
if(!isOwner) return onlyOwner()
if(!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
}

if(!isQuotedSticker) return setReply("Reply stickernya")
let sticker = m.quoted.fileSha256.toString('base64')
if(antiSticker.includes(sticker)) return setReply("sudah ada di database")
antiSticker.push(sticker)
setReply("Sukses")
}
break

case 'unbanstik':
case  'delantistik':{
if(!isOwner) return setReply(mess.only.owner)
if(!isQuotedSticker) return setReply("Reply stickernya")
let sticker = m.quoted.fileSha256.toString('base64')
if(!antiSticker.includes(sticker)) return setReply("Tidak ada di database")
antiSticker.splice(antiSticker.indexOf(sticker, 1))
setReply("Sukses")
}
break   
case 'on':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
let on = Ehztext(`*[ Silakan di pilih ]*

${gris}settinggroup${gris}

- welcome
- updategempa
- antidelete
- antipromosi
- antivirtex
- antiasing
- antilink
- antilinkgc
- viewonce
- antiimage
- antisticker
- antivideo
- antiaudio
- antibot
- banchat
- unbanchat
- simigroup

${gris}settingbot${gris}

- setreply
- autobio
- setmenu
- 

contoh : 
.antilink on untuk mengaktifkan
.antilink off untuk menonaktifkan`)
setReply(on)
break
case 'welcome':{
if(!q) return setReply("Masukan query on atau of")
if(!chat) return setReply('Group ini belom terdaftar di database bot')
 if(q == 'on'){
if(chat.welcome == true) return setReply('Welcome sudah aktif')
db.data.chats[from].welcome = true
setReply('Berhasil mengaktifkan welcome pada grouop ini')
} else if(q == 'off'){       
  if(chat.welcome == false) return setReply('Welcome sudah aktif')
  db.data.chats[from].welcome = false
  setReply('Berhasil menonaktifkan welcome pada grouop ini')
} else setReply('Pilih on atau off')
 }
break
 case 'mute': {
if (!isGroup) return reply(mess.group)
if (!isGroupAdmins && !isOwner) return reply (mess.only.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
reply(`Bot telah di mute!\nSekarang member tidak bisa menggunakan bot di dalam grub ini!!`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
reply(`Bot telah di unmute!\nSekarang member bisa menggunakan bot di grub ini!!`)
} else {
  reply (`*MODE MUTE*\n\n${prefix+command} on/off`)
 }
             }
             break
case 'updategempa':{
if (!isGroupAdmins && !isOwner) return reply (mess.only.admin)
if(!q) return reply(`*UPDATE GEMPA*\n ${prefix+command} on/off`)
let dataGempa = db.data.others['updateGempa']

if(isGroup) {
if(q == "on"){
if(dataGempa.includes(from)) return setReply("Sudah aktif di group ini")
dataGempa.push(from)
setReply(`Berhasil menambahkan group ${groupName}  kedalam auto update gempa`)
} else if(q == "off"){
if(!dataGempa.includes(from)) return setReply("Sudah nonaktif di group ini")
dataGempa.splice(dataGempa.indexOf(from))
setReply(`Berhasil menonaktifkan group ${groupName}  kedalam auto update gempa`)
}
} else {
if(!q) return setReply("Masukin idgc")
if(db.data.others['updateGempa'].includes(from)) return setReply("Sudah aktif")
db.data.others['updateGempa'].push(q).then((res) => {
setReply(`Berhasil menambahkan  ${q}  kedalam auto update gempa`)
}).catch((err) => Log(err))
}
}
break
case 'simigroup':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isSimi) return setReply("Sudah aktif!!");
db.data.chats[from].simi = true
setReply("Sukses mengaktifkan simi!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isSimi) return setReply("Udah off!!");
db.data.chats[from].simi = false
setReply("Sukses mematikan simi!");
} else if (!q) {
sendAnti('Sukses mengaktifkan simi bot')
}
}
break
case 'viewonce':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiViewOnce) return setReply('Fitur sudah aktif kak')
db.data.chats[from].viewonce = true
let ih =`Fitur ${command} telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiViewOnce) return setReply(`Fitur ${command} sudah off`)
db.data.chats[from].viewonce = false
let ih =`Fitur ${command} telah di matikan`
setReply(ih)
} else if (!q) {
setReply(`Mode ${command}\n• .${command} on \n• .${command} off`)
}
}
break
case 'antidelete':{
	if (!isGroup) return onlyGroup()
	if (!isGroupAdmins && !isOwner) return onlyAdmin()
	if (!isBotGroupAdmins) return onlyBadmin()
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntidelete) return setReply("Sudah aktif!!");
	db.data.chats[from].antidelete = true
	setReply("Sukses mengaktifkan antidelete!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntidelete) return setReply("Udah off!!");
	db.data.chats[from].antidelete = false
	setReply("Sukses mematikan antidelete!");
	} else if (!q) {
		reply ( `*MODE ANTI DELETE*\n ${prefix+command} on/off`)
	 }
	 }
	break
case 'antipromosi': {
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return onlyAdmin()
if (args[0] === "on") {
if (db.data.chats[m.chat].antipromosi) return setReply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antipromosi = true
setReply(`antipromosi Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antipromosi) return setReply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antipromosi = false
setReply(`antipromosi Tidak Aktif !`)
} else {
setReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antivirtex':{
  if (!isGroup) return onlyGroup()
	if (!isGroupAdmins && !isOwner) return onlyAdmin()
	if (!isBotGroupAdmins) return onlyBadmin()
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiVirtex) return setReply("Sudah aktif!!");
	db.data.chats[from].antivirtex = true
	setReply("Sukses mengaktifkan antivirtex!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiVirtex) return setReply("Udah off!!");
	db.data.chats[from].antivirtex = false
	setReply("Sukses mematikan antivirtex!");
	} else if (!q) {
	reply ( `*MODE ANTI VIRTEX*\n ${prefix+command} on/off`)
	 }
	 }
	break;
case 'antilink':{
    if (!isGroup) return onlyGroup()
	if (!isGroupAdmins && !isOwner) return onlyBadmin()
		if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiLink) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilink = true
	let ih =`Fitur antilink telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiLink) return setReply('Fitur Anti link sudah off')
	db.data.chats[from].antilink = false
	let ih =`Fitur antilink telah di matikan`
	setReply(ih)
	} else if (!q) {
		reply ( `*MODE ANTI LINK*\n ${prefix+command} on/off`)
	}
	}
	break;   
case 'antilinkgc':{
    if (!isGroup) return onlyGroup()
	if (!isGroupAdmins && !isOwner) return onlyBadmin()
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilinkgc = true
	let ih =`Fitur antilink group telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntilinkGc) return setReply('Udah mati')
	db.data.chats[from].antilinkgc = false
	let ih =`Fitur antilink group telah di matikan`
	setReply(ih)
	}else if (!q) {
		reply ( `*MODE ANTI LINK GRUB*\n ${prefix+command} on/off`)
	 }
	 }
	break;  
case 'antiasing':{
  if (!isGroup) return onlyGroup()
	if (!isGroupAdmins && !isOwner) return onlyAdmin()
  if (!isBotGroupAdmins) return onlyBadmin()
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isKickarea) return setReply("Sudah aktif!!");
	db.data.chats[from].antiasing = true
	setReply("Sukses mengaktifkan kickarea!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isKickarea) return setReply("Udah off!!");
	db.data.chats[from].antiasing = false
	setReply("Sukses mematikan kickarea!");
	} else if (!q) {
	reply ( `MODE KICKAREA\n ${prefix+command} on/off`)
	 }
	 }
	break;
 case 'antiimage':{
            	if (!isGroup) return onlyGroup()
  if (!isGroupAdmins && !isOwner) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  setReply(`${command} is disabled`)
               }
               }
            break
case 'antivideo':{
            	if (!isGroup) return onlyGroup()
  if (!isGroupAdmins && !isOwner) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  setReply(`${command} is disabled`)
               }
               }
            break
case 'antisticker':{
            	if (!isGroup) return onlyGroup()
  if (!isGroupAdmins && !isOwner) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  setReply(`${command} is disabled`)
               }
               }
            break
case 'antiaudio':{
            	if (!isGroup) return onlyGroup()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  setReply(`${command} is disabled`)
               }
               }
            break
case 'antibot':{
  if (!isGroup) return onlyGroup()
  if (!isGroupAdmins && !isOwner) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  setReply(`${command} is disabled`)
               }
               }
            break
  // GAME FEATURE =======================>>
case 'rpg':{
if (!isGroup && !isOwner && !isGroupAdmins && !isBotGroupAdmins) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].rpg = true
                  setReply(`${command} is enabled`)
                  let pringatan2 = Ehztext(` 
${gris}「 ⚠️Perhatian⚠️ 」${gris}

Fitur RPG Telah Di Aktipkan,Sekarang Member Bisa Bermain RPG Pada Group Ini!`)
    m.reply(pringatan2)
               } else if (args[0] === 'off') {
                  db.data.chats[from].rpg = false
                  setReply(`${command} is disabled`)
               }
               }
            break
case 'game':{
if (!isGroup && !isOwner) return onlyGroup()
if (!isGroupAdmins && !isBotGroupAdmins) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].game = true
                  setReply(`${command} is enabled`)
                  let pringatan = Ehztext(` 
${gris}「 ⚠️Perhatian⚠️ 」${gris}

Fitur Game Telah Di Aktipkan,Sekarang Member Bisa Bermain Game Pada Group Ini!`)
    m.reply(pringatan)
               } else if (args[0] === 'off') {
                  db.data.chats[from].game = false
                  setReply(`${command} is disabled`)
               }
               }
            break
/*
	  '/': '÷'
	}
	
	function genMath(mode) {
	  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
	  let a = randomInt(a1, a2)
	  let b = randomInt(b1, b2)
	  let op = pickRandom([...ops])
	  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
	  if (op == '/') [a, result] = [result, a]
	  return {
		str: `${a} ${operators[op]} ${b}`,
		mode,
		time,
		bonus,
		result
	  }
	}
	
	function randomInt(from, to) {
	  if (from > to) [from, to] = [to, from]
	  from = Math.floor(from)
	  to = Math.floor(to)
	  return Math.floor((to - from) * Math.random() + from)
	}
	
		
		
		
		
		
	 // conn.math = conn.math ? conn.math : {}
	  if (!q) return setReply( `*MATEMATIKA*
   
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let mode = args[0].toLowerCase()
	  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
	  let id = from
	  if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
	  let math2 = genMath(mode)
	  conn.math[id] = [
		await reply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
		math2, 4,
		setTimeout(async () => {
		  //if (conn.math[id]) await conn.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
			if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
	   delete conn.math[id]
		}, math2.time)
	  ]
	}
	break*/
case 'math': case 'match': {
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}






 // conn.math = conn.math ? conn.math : {}
   
  let option = Ehztext( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  if (!q) return setReply(option)
  let id = from
  if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
  let math2 = genMath(mode)
  conn.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
math2, 4,
setTimeout(async () => {
  //if (conn.math[id]) await conn.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
   delete conn.math[id]
}, math2.time)
  ]
db.data.users[sender].glimit -= 1
}
break
case 'caklontong':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 3000
let timeout = 120000
let tiketcoin = 1
let id = m.chat

//let but1 = [{"buttonId": `${prefix}caklontong`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus : +${poin}
Tiketcoin : +${tiketcoin} `.trim())
conn.caklontong[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}

${json.deskripsi}`)  
delete conn.caklontong[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'family100': {
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let winScore = 1000
let id = m.chat

if (id in conn.family) return reply('Masih ada kuis yang belum terjawab di chat ini') 
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
`.trim())
conn.family[id] = {
id,
msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
db.data.users[sender].glimit -= 1
}
break
case 'susunkata':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply(mess.limit)
let poin = 1000
let timeout = 120000
let id = m.chat

let but1 = [{"buttonId": `${prefix}susunkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}
*Tipe :* ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim())
conn.susunkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
conn.sendButMessage(m.chat, `Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}
`
, `${fake1}`, but1, m)  
delete conn.susunkata[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebakkimia':{
if (!isGame) return setReply(mess.game)
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 40000
	let poin = 1000
	let id = m.chat
	if (id in conn.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*TEBAK KIMIA*
	Unsur: ${json.unsur}
	Soal: Singkatan atau lambang di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.tebakkimia[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (conn.tebakkimia[id]) 
user.balance -= 200
reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebakkimia[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'tebaklirik':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebaklirik`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
conn.tebaklirik[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tebaklirik[id]) 
setReply(`Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}`)  
delete conn.tebaklirik[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'siapaaku':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}siapaaku`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
conn.siapaaku[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.siapaaku[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.siapaaku[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tekateki':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tekateki`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tekateki) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
conn.tekateki[id] = [
await reply(caption),
json, poin,
setTimeout(() => {
if (conn.tekateki[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.tekateki[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
case 'tebakkata':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
conn.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.tebakkata[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)
delete conn.tebakkata[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
case 'tebaktebakan':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

if (id in conn.tebaktebak) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
conn.tebaktebak[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.tebaktebak[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebakgambar':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakgambar`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let kentir = await getBuffer(json)       
let teks = Ehztext(`*Soal :* ${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
conn.tebakgambar[id] = [
conn.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (conn.tebakgambar[id])
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete conn.tebakgambar[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebaklagu':{
    if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
	let timeout = 60000
	let poin = 1200
	let id = m.chat
	if (id in conn.tebaklagu) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebaklagu.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
    
 var lagu = await conn.sendMessage(from, {audio: {url: `${json.lagu}`, ptt: true, mimetype: 'audio/mpeg'}}, { quoted: dev })
	let caption = `*TEBAK LAGU*
	Artis: ${json.artis}
	Soal: Judul lagu di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	conn.tebaklagu[id] = [
		await conn.sendMessage(from, {text: caption}, {quoted: m}),
	json, poin,
	setTimeout(() => {
	if (conn.tebaklagu[id]) 
     user.balance -= 200
reply(`*GAME TEBAK LAGU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete conn.tebaklagu[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'tebakbendera':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakbendera`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in conn.tebakbendera) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let teks = Ehztext(`Bendera Apakah Ini ?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
conn.tebakbendera[id] = [
conn.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (conn.tebakbendera[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.name}`)  
delete conn.tebakbendera[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1 
}
break
case 'suitpvp': case 'suit': {
  if (!isGame) return setReply(mess.game)
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return onlyGroup()
            conn.suit = conn.suit ? conn.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = Ehztext(`_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`)
            conn.suit[id] = {
            chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (conn.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
            delete conn.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 1
            break  
  case 'tictactoe': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        	if (!isGroup) return setReply(mess.group)
            conn.tictac = conn.tictac ? conn.tictac : {} 
 // if (roomf.x in conn.tictac) return setReply('Masih ada game yang belum selesai di chat ini') 
            if (Object.values(conn.tictac).find(roomf => roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender))) return setReply ( 'Kamu masih didalam tictac')
            let roomf = Object.values(conn.tictac).find(roomf => roomf.state === 'WAITING' && (q ? roomf.name === q : true))
            if (roomf) {
              roomf.o = m.chat                       
            setReply('Partner ditemukan!')
            
            roomf.tictac.playerO = sender
            roomf.state = 'PLAYING'
            let arr = roomf.tictac.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `roomf ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${roomf.tictac.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (roomf.x !== roomf.o) await conn.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
            await conn.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
            } else {
            roomf = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            tictac: new TicTacToe(sender, 'o'),
            state: 'WAITING'
            }
            if (q) roomf.name = q
            setReply('Menunggu partner' + (q ? ` mengetik command dibawah ini ${prefix}${command} ${q}` : ''))
            conn.tictac[roomf.id] = roomf
            }
            }
    db.data.users[sender].glimit -= 1
            break 
    case 'delttc': case 'delttt': {
       	if (!isGroup) return setReply(mess.group)
            conn.tictac = conn.tictac ? conn.tictac : {}
            try {
            if (conn.tictac) {
            delete conn.tictac
            conn.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!conn.tictac) {
            setReply(`Session TicTacToe🎮 tidak ada`)
            } else return '?'
            } catch (e) {
            setReply('rusak')
            }
            }
            break
case 'me': case 'profil': {
	let ppimg = await conn.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await conn.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	  
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	
	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
	📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	
	
	let its = await getBuffer (ppimg)
	
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
	conn.sendMessage(from, { caption: teks, image: gambar}, {quoted: m})
	  await fs.unlinkSync(foto)
			  });
	
	}
	 
	break
case 'claim':{
if (!isGroup) return onlyGroup()
const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
 global.db.data.users[m.sender].exp += isPremium ? prem : free
 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
let hore = Ehztext(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
setReply(hore)
  global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break 
case 'tfc':
case 'transferc':{
if (!isGroup) return onlyGroup()
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
let ane = Number(math(q))
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
db.data.users[mentionByReply].balance = ane
db.data.users[sender].balance -= ane
setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
}
break
case  'topbalance': case 'topglobal' :{
let uang = Object.values(db.data.users);
uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOP BALANCE 」 ──*\n\n'
var arrTop = []
var total = 15
if (uang.length < 15) total = uang.length
for (let i = 0; i < total; i ++){
    top += `${i + 1}. wa.me/${uang[i].id.split("@")[0]}\n=> balance : $${uang[i].balance}\n\n`
    arrTop.push(uang[i].id)
}
   //conn.sendMessage(from, {text: top, mentions: arrTop}, {quoted: dev})
 mentions(top, arrTop, true)
  }
break
  case 'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].glimit}/${gcount}`}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcount}`} \nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)
	
	}
	break
case 'shopc':{
	let teks = `
	*]────「 SHOP」────[*
	
	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}
	
	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 700
	
	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10
	
	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10
 
Atau ketik .buyprem untuk membeli unlimited limit`
	setReply(teks)
	}
	break 
case 'buylimit':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].limit += math(q)
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}`)
}
break
case 'buyglimit':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 700)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].glimit += math(q)
setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}`)
}
break
case 'givesaldo':{
if (!isOwner) return onlyOwner()


if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance += math(q)
setReply(`Berhasil menambakan saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'kurangsaldo':{
if (!isOwner) return onlyOwner()


if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance -= math(q)
setReply(`Berhasil mengurangi saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'givelimit':{
if (!isOwner) return onlyOwner()
//if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return onlyBadmin()
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit += math(q)
setReply(`Berhasil menambakan limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'kuranglimit':{
if (!isOwner) return onlyOwner()

if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit -= math(q)
setReply(`Berhasil mengurangi limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'resetlimit': {
    if (!isOwner) return onlyOwner();
    // Periksa apakah db.data dan db.data.users ada
    if (!db.data || !db.data.users) {
        console.error("Database atau data pengguna tidak tersedia.");
        setReply("Gagal mereset limit, data pengguna tidak tersedia.");
        break;
    }
    // ID pemilik (owner)
    const ownerId = '6281316643491@s.whatsapp.net'; // Ganti dengan ID pemilik yang sesuai
    // Baca data premium dari premium.json
    let premiumUsers = [];
    try {
        const premiumData = fs.readFileSync('./database/premium.json', 'utf8');
        premiumUsers = JSON.parse(premiumData);
        if (!Array.isArray(premiumUsers)) {
            throw new Error("Format premium.json tidak valid. Harus berupa array ID.");
        }
    } catch (error) {
        console.error("Gagal membaca atau memparsing premium.json:", error);
        setReply("Gagal memuat data pengguna premium.");
        break;
    }
    // Reset limit untuk semua pengguna kecuali pemilik dan pengguna premium
    for (let user in db.data.users) {
        if (db.data.users.hasOwnProperty(user)) {
            // Pastikan objek pengguna valid
            const userData = db.data.users[user];
            if (typeof userData === 'object' && userData !== null) {
                // Periksa apakah pengguna bukan pemilik dan bukan pengguna premium
                if (user !== ownerId && !premiumUsers.includes(user)) {
                    userData.limit = 30;
                } else if (user === ownerId) {
                    console.log(`Skip reset untuk pemilik dengan ID: ${ownerId}`);
                } else if (premiumUsers.includes(user)) {
                    console.log(`Skip reset untuk pengguna premium dengan ID: ${user}`);
                }
            } else {
                console.warn(`Data pengguna untuk ${user} tidak valid.`);
            }
        }
    }
    
    setReply("Berhasil mereset limit untuk semua pengguna kecuali pemilik dan pengguna premium.");
}
break;
//×××××××××××× AI ×××××××××××××//
case "gpt4": 
if (!q) return reply('Mau Nanya apa bang?')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
m.reply(`${resq}`)
} catch (err) {
await loadingerror()
}
break
case "luminai": 
 case 'ai':{
  if (!q) {
    return m.reply(`Contoh: ${prefix + command} hai luminai`);
  }
  const prompt = "mulai dari sekarang nama anda adalah siputzx, anda adalah seorang kecerdasan buatan yang di buat oleh siputzx production. sifat anda adalah baik, ramah, lucu. Kepribadian anda adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa anda adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Anda menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Anda tidak terlalu terbuka pada orang-orang baru, Terkadang anda marah saat ada yang bertanya di luar masuk akal dan anda akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
  const requestData = { content: q, user: m.sender, prompt: prompt };
  const quoted = m && (m.quoted || m);

  try {
    let response;
    const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

    if (mimetype && /image/.test(mimetype)) {
      requestData.imageBuffer = await quoted.download();
    }

    response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
    m.reply(response);
  } catch (err) {
    m.reply(err.toString());
  }
}
break;
 //××××××××××× DOWNLOADER ×××××××××××//

case 'play':{
 if (!isGroup) return onlyGroup()
  if (!q) return setReply("Kirim perintah judul lagu/link youtube nya bwang")
sendSticker(otw)
    const a = await xyz.download.youtube.search(q).then(async (res) => {
    if (!res) return setReply("No results found")
    let data = await res[0];
    if (data.duration.seconds > 600)  return setReply("Max duration is 10 minutes")
     
    await conn.sendMessage(
      m.chat,
      {
        text: `Title: ${data.title}\nDuration: ${
          data.duration.timestamp
        }\nDate Uploaded: ${
          data.publish ? data.publish : "Not known"
        }\nViews: ${data.views}\nThumbnail: ${
          data.thumbnail
        }\n\n\nDownloading...,`,
        contextInfo: {
          externalAdReply: {
            title: "Play Audio",
            body: "wm",
            thumbnailUrl: data.thumbnail,
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
    return data.url;
  });
  await xyz.download.youtube.ytmp3(a).then(async (res) => {
    if (!res.url) return setReply("No results found")
    await conn.sendMessage(
      m.chat,
      {
        audio: { url: res.url },
        mimetype: "audio/mp4",
      },
      { quoted: m }
    );
  });
db.data.users[sender].limit -= 1 // -1 limit
  }
    break

case  'yts':
	try {
if (!isGroup) return onlyGroup()
	if (!q) return setReply('Format salah')
	setReply(mess.wait)
	let rus = await yts(q)
	let  res = await rus.all.filter(v => v.type == 'video')
	let videoID = res[0].videoId
	
	try{
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
	} catch(err) {
	var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
	}
	let a = `*Youtube Search 🔎*\n`
	for (let i of res) {
	a += `
	📜 Title : ${i.title}
	📈 Views : ${i.views}
	🌐 Upload : ${i.ago}
	⏱️ Durasi : ${i.timestamp}
	🎥 Channel : ${i.author.name}
	🖇️ Link : ${i.url}\n\n`
	}
	let b = a.trim()
	conn.sendMessage(from, { caption: `${b}`, image: {url: res[0].image}}, {quoted:dev})
	 } catch (e) {
	 console.log(e)
	 setReply(`${e}`)
	}
	break

 case 'tiktokmusik': case 'ttmp3' : case 'ttaudio': {       
    try{  
  if (!isGroup) return onlyGroup()
    if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
    if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
    if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
    await loading()
    let data = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=Rangelofficial`)
    if(data.data.duration == 0) {
     for(let i of data.data.images){
    await sleep (2000)
    conn.sendMedia(from, i, m)
    }
    } else {
    let tkes = `*------------[ TIKTOK MUSIK ]------------*\n\nᯤ *ID:* ${data.data.id}\nᯤ *Region:* ${data.data.region}\nᯤ *Judul:* ${data.data.title}\nᯤ *Durasi:* ${data.data.duration}\nᯤ *Music:* ${data.data.music}\nᯤ *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\nᯤ *Diputar:* ${h2k(data.data.play_count)}\nᯤ *Jumlah Komentar:* ${data.data.comment_count}\nᯤ *Jumlah Share:* ${data.data.share_count}\nᯤ *Didownload:* ${data.data.download_count} kali` 
    let lagu = await conn.sendMessage(from, { audio: {url: data.data.music}, mimetype: 'audio/mp4'}, { quoted: m})
    conn.sendMessage(from, {text: tkes}, {quoted: lagu})
    }
    } catch (err){
    await loadingerror()
    }
      }
    db.data.users[sender].limit -= 1 // -1 limit
    break
case 'tt': case 'tiktok': case 'ttnowm': case 'tiktoknowm':  { 
    try{  
     if (!isGroup) return onlyGroup()
    if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
    if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
    if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
      sendSticker(otw)
    let data = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=Rangelofficial`)
    if(data.data.duration == 0) {
     for(let i of data.data.images){
    await await sleep(1500) 
    conn.sendMedia(from, i, m)
    }
    } else {
    let tkes = `*--------[ 乂 Tiktok Downloader ]--------*
𖤘︎ *ID:* ${data.data.id}
︎𖤘 *Region:* ${data.data.region}
𖤘︎ *Judul:* ${data.data.title}
𖤘︎ *Durasi:* ${data.data.duration}
𖤘 *Music:* ${data.data.music}
 𒊹︎︎ *Info Musik:*
𖤘︎ *Judul:* ${data.data.music_info.title}
𖤘 ︎*Author:*  ${data.data.music_info.author}
𖤘︎ *Diputar:* ${h2k(data.data.play_count)}
𖤘︎ *Jumlah Komentar:* ${data.data.comment_count}
𖤘 *Jumlah Share:* ${data.data.share_count}
𖤘 *Didownload:* ${data.data.download_count} kali` 
    conn.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: m})
    }
  let dataTt = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=Rangelofficial`)
await sleep(1000) 
let lagu = await  conn.sendMessage(from, { audio: {url: dataTt.data.music}, mimetype: 'audio/mp4'}, { quoted: m})
    } catch (err){
    await loadingerror()
      }
    }
    db.data.users[sender].limit -= 1 // -1 limit
    break
 
case 'ig':
case 'instagram': {
  try {
    if (!q) return setReply(`Linknya?\nContoh: ${prefix + command} https://www.instagram.com/p/CKXZ1Z1JZK/`);

    await loading();
    let res = await fetchJson(`https://skizo.tech/api/igdl?url=${q}&apikey=Rangelofficial`);

    for (let i of res.media) {
      await sleep(20);

      // Mengirim video
      await conn.sendMessage(from, { video: { url: i }, caption: `*INSTAGRAM DOWNLOADER*\n\n${res.caption}` }, { quoted: m });
    }
  } catch (e) {
    loadingerror()
  }
}
break;

 case 'igstory':{
try {
if(!q) return setReply(`username?\nContoh: .igstory zyee_ez`)
setReply (mess.wait)
let res = await fetchJson (`https://api.lolhuman.xyz/api/igstory/${q}?apikey=652c7664865e2b0e70929768`)
console.log(res)
for(let i of res.result){
 await conn.sendMedia(from, i, m, {caption: "*INSTAGRAM STORY*"})
}
} catch(err){
return setReply ('Maaf gabisa di download, mungkin videonya di private')
}
}
db.data.users[sender].limit -= 1 // -1 limit    
break
 case 'mediafire': case 'mfdl':
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
  if (args.length < 1) return reply(`Kirim perintah ${command} link`)        
 setReply (mess.wait)                   
  mediafiredll(q).then(async(data) => {
  let tuks =`*---------[ Data Berhasil Diperoleh ]---------*

File Name : ${data.name}
File Size : ${data.size}
Mime : ${data.mime}
Upload : ${data.date}
Link : ${data.link}
`
 reply (tuks)
console.log(data)
 var media = await getBuffer(data.link)
 await conn.sendMedia (from, media, dev, {fileName: data.name})                    
}).catch(() => setReply ('Sedang erorr coba lgi nanti'))
db.data.users[sender].limit -= 1 // -1 limit
break
case 'gdrive': {
if (!isGroup) return onlyGroup()
  await loading()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
const { sizeFormatter } = await import( 'human-readable')
let image = { url : "https://telegra.ph/file/980b0d179669359c650f3.jpg"}
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
	
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) return setReply( 'Link gdrivenya mana ?')
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) return setReply( 'ID Not Found')
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
}
})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) return setReply( 'Link Download Limit!')
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}
	
if (!q) return setReply( 'Input URL' )
GDriveDl(args[0]).then(async (res) => {
let teks = `*乂 Gdrive Downloader*

📂 File Name : ${res.fileName}
📄 File Size : Not Found
🌐 Mimetype : ${res.mimetype}

*_Tunggu sebentar ya kak sedang mengirim File!_*`	
	
const contextInfo = {
mentionedJid: [sender],
externalAdReply:{
showAdAttribution: true, 
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: image.url,
sourceUrl: `${res.downloadUrl}`
}
}  
conn.sendMessage(from ,{ text : teks, contextInfo},{quoted:m})
await sleep(1000)
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
})
db.data.users[sender].limit -= 1 
}
break
case 'githubdl':{
	if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
	let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
	console.log("Done")
	setReply(`Waiting for compress to zip`)
	await conn.sendMedia (from, url, dev, {fileName: q.split("|")[1]})
	}
	break 
 
//××××××××××× Islamic ××××××××××//
case 'alkitab':{
    if (!q) return setReply (`uhm.. teksnya mana?\n\ncontoh:\nAlkitab kejadian`)
    setReply('Patience, O Earthlings')
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(q)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })
    const cheerio = require('cheerio');
    let $ = cheerio.load(res.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => `${v.title}\n${v.teks}`).join('\n────────\n')
    m.reply(caption)
}
break
case 'surah':{
try{
if(!q) return reply(`Mau nyari surah apa?\nContoh: ${prefix+command} Al-Baqarah`)
reply (mess.wait)
let hasil = q.replace (" ", "-")
let res = await surah(hasil)
let pre = 1
let teks = `*Surah ${q}*\n\n${res[0].bismillah}\n`
for(var i of res[1]){
	 teks += `*𖦹 Ayat :* ${pre++}\n`
	 teks += `${i.arabic}\n`
   teks += `${i.baca}\n` 
   teks += `${i.arti}\n\n\n` 
  }
	
 setReply(teks)
} catch (e) {
    await loadingerror()
/*reply(`Surah tersebut tidak di temukan atau kesalahan mengetik, silahkan ketik *${prefix}listsurah* untuk mengetahui surah yang ada`)*/
}
}
break
case 'getsurah':{
if (!isGroup) return onlyGroup()
  if (!q) return reply(`Angka?\nContoh: ${prefix + command} 1\n\n*Note*: 1 = Al-fatihah\n\nKetik ${prefix}listsurah untuk mengetahui nomor surah-surah lain`)
  const surahIndex = parseInt(q)
  const res = await getSurah(surahIndex)
  reply (res)
		}
  break
  case 'listsurah':{
reply (mess.wait)
let res = await listsurah()
let pre = 1
let teks = `*Berikut list surah yang ada*\n\n`
for(var i of res){
	teks += `*𖦹 No :* ${pre++}\n`
	teks += `*𖦹 Nama :* ${i.name_surah}\n`
   teks += `*𖦹 Link :* ${i.link}\n\n` 
  }
	setReply(teks)
}
break
//×××××××××××××× STICKER ××××××××××××//
case 's':
case 'stiker':
case 'sticker':
    if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isImage || isViewOnce || isQuotedImage || isVideo || isQuotedVideo) {
if (quoted.seconds > 11) return setReply('Maksimal 10 detik!')
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: kualitas, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `${web}`
}}, sticker: nah }, { quoted: m })   																																
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
db.data.users[sender].limit -= 1 
}
break

case 'swm': case 'steal': case 'stickerwm': case 'take': case 'wm': {
 await loading()
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await conn.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
	break
 case 'smeme':{
     if (!isGroup) return onlyGroup()
if (args.length < 1) return setReply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
if (!q.includes('|')) return setReply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
try {
if (!isQuotedImage && !isImage && !isSticker && !isQuotedSticker) return setReply(`Reply Gambar!`)
await loading()
var value = args.join(' ')
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''

let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let media = `https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
} catch (e) {
console.log(e)
}
}
break
case 'emojimix': {
if (!isGroup) return onlyGroup()

setReply(mess.wait)
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu2.results) {
conn.sendImageAsSticker(from, res.url, m)
}
}
break
case 'qc': {
      try {
     if (!isGroup) return onlyGroup()
        await loading()
        var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa'];
  const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
        const dia = (m.quoted?.text ? m.quoted : m).sender;
        const name = await conn.getName(dia);
        let teks = m.quoted ? m.quoted.text : q ? q : "";
        let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
        const avatar = await conn.profilePictureUrl(dia, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png");

        if (isImage || isQuotedImage) {
          let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5));
          let anu = await TelegraPh(media);
          const json = {
            type: "quote",
            format: "png",
            backgroundColor: "apiColor",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: 'auto',
              media: {
                url: anu
              },
              avatar: true,
              from: {
                id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                name,
                photo: {
                  url: avatar
                }
              },
              text: `${teks}`,
              replyMessage: {}
            }]
          };
          const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
            headers: {
              "Content-Type": "application/json"
            }
          }).catch(e => e.response || {});
          if (!data.ok) throw data;
          const buffer = Buffer.from(data.result.image, "base64");
          makeSticker(buffer, Sticker, StickerTypes);
          fs.unlinkSync(media);
        } else if (isQuotedSticker) {
          let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5));
          let ran = getRandomFile('.png');
          exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
            fs.unlinkSync(media);
            if (err) return setReply(err);
            let anuah = await TelegraPh(ran);
            const json = {
              type: "quote",
              format: "png",
              backgroundColor: "apiColor",
              width: 512,
              height: 768,
              scale: 2,
              messages: [{
                entities: 'auto',
                media: {
                  url: anuah
                },
                avatar: true,
                from: {
                  id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                  name,
                  photo: {
                    url: avatar
                  }
                },
                text: `${teks}`,
                replyMessage: {}
              }]
            };
            const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
              headers: {
                "Content-Type": "application/json"
              }
            }).catch(e => e.response || {});
            if (!data.ok) throw data;
            const buffer = Buffer.from(data.result.image, "base64");
            makeSticker(buffer, Sticker, StickerTypes);
            fs.unlinkSync(ran);
          });
        } else {
          const json = {
            type: "quote",
            format: "png",
            backgroundColor: "apiColor",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: 'auto',
              avatar: true,
              from: {
                id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                name,
                photo: {
                  url: avatar
                }
              },
              text: `${teks}`,
              replyMessage: {}
            }]
          };
          const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
            headers: {
              "Content-Type": "application/json"
            }
          }).catch(e => e.response || {});
          if (!data.ok) reply(data);
          const buffer = Buffer.from(data.result.image, "base64");
          makeSticker(buffer, Sticker, StickerTypes);
        
        }
      } catch (e) {
        reply('sistem eror coba lagi nanti');
        console.log(e);
        return;
      }
    }
     db.data.users[sender].limit -= 1 // -1 limit
    break

case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await conn.sendMessage(from,{sticker: nah},{quoted: dev})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
 case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
conn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName },{ quoted: m })
})
}
break
 // ×××××××× ANIME ××××××××//
case 'txt2img': {
if (!isGroup) return onlyGroup()
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} kids,cute`)
		      await loading()
 conn.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/txt2img?text=${q}&apikey=Rangelofficial` }, caption: `${botName}\n\n Type: ${command}\n\nText: ${q}`})
 }
			break
 case 'toanime':
case 'jadianime':{
if (!isGroup) return onlyGroup()
if (!isImage && !isQuotedImage) return setReply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
await loading()
try{
let ahah = await conn.downloadAndSaveMediaMessage(quoted)
let wewek = await TelegraPh(ahah)
let ini_gen = `${command}`
let get_result = await getBuffer(`https://skizo.tech/api/toanime?url=${wewek}&apikey=Rangelofficial`)
conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: false,
title: `${botName}`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
sourceUrl:`${web}`
}}, image: get_result, caption: `*Nih Kak Kamu jadi Anime*`}, { quoted: m })
fs.unlinkSync(ahah) 
}catch(err){
console.log((err) => setReply('Error api'))
}
}
break
case 'ppcp': case ' ppcouople': {
if (!isGroup) return onlyGroup()
          await loading()
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                conn.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break	    
     case 'animerandom':
case 'randomanime':
if (!isGroup) return onlyGroup()
let animRndm = Ehztext(`
Silakan pilih salah satu

akira || akiyama || anna || asuna || ayuzawa ||| boruto || chitanda || chitoge ||| deidara || elaina || emilia || asuna || erza || gremory || hestia || hinata || inori || itachi || isuzu || itori || kaga  || kakasih || kaori || kaneki || kosaki || kotori || kuriyama || kuroha || kurumi || madara || mikasa || miku || minato || naruto || natsukawa || nekohime || nezuko || nishimiya || onepiece || rem || rize || sagiri || sakura || sasuke || shina || shinka || shizuka || shota || tomori || toukachan || tsunade || yatogami || yuki

Contoh : .shina`)
setReply(animRndm)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return onlyGroup()
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
	
m.reply(mess.wait)//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : true,thumbnail:thumb,sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
//×××××× TOOLS & Short ×××××××//
case 'cut30':
if(quoted < 30) return setReply('Vidio harus lebih dari 30 detik')
if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
exec(`ffmpeg -i ${media} -c copy -map 0 -segment_time 00:00:30 -f segment -reset_timestamps 1 output%03d.mp4`, async (err) => {
let directoryPath = path.join();
 fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>item.startsWith("output") )
filteredArray.forEach(async function (file) {
let sampah = fs.existsSync(file)
if(sampah){
 await conn.sendMessage(from,{caption: `${file}`,video: fs.readFileSync(file)})
 fs.unlinkSync(file)
}
})
})
//----jangkrik-----\\
})
} else {
setReply("Reply videonya")
}
break
case 'gimage':{
	if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
	if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
	try{
	const {googleImage} = require('@bochilteam/scraper')
	googleImage(q).then(async (data) => {
	//console.log(data)
	let foto = data[Math.floor(Math.random() * data.length)]
	if(data.length == "0") return setReply("Image tidak di temukan")
	setReply(mess.wait)
	conn.sendMedia (from, foto, dev, {caption: "Nih"})
	})
	} catch(err){
	let teks = args.join(' ')
	let res = await gis(teks, google)
	function google(error, result){
	if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
	else {
	var gugIm = result
	var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
	conn.sendMedia (from, random, dev, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
	}
	}
	}
	}
	db.data.users[sender].limit -= 1 // -1 limit
	break
case 'infogempa':
try {
const {data} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
let asbnfvashfgyjas = `┌──「 *G E M P A* 」
│
├ *TimeStamp:* ${data.Infogempa.gempa.Tanggal}
├ *Time:* ${data.Infogempa.gempa.Jam}
├ *Coordinates:* ${data.Infogempa.gempa.Coordinates}
├ *Magnitude:* ${data.Infogempa.gempa.Magnitude}
├ *Depth:* ${data.Infogempa.gempa.Kedalaman}
├ *Region:* ${data.Infogempa.gempa.Wilayah}
├ *Potention:* ${data.Infogempa.gempa.Potensi}
├ *Effect:* ${data.Infogempa.gempa.Dirasakan}
│
└──「 *I C Z A* 」 `
sendFileFromUrl(from, "https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap, asbnfvashfgyjas)
} catch (err) {
setReply(util.format(err))
}
break
case 'nobg': {
  if ((isMedia || isQuotedImage || isQuotedSticker)) {
    try{
      reply(mess.wait)
    const media = await conn.downloadAndSaveMediaMessage(quoted)
    let ranw = getRandom('.webp')
    let ranp = getRandom('.png')
    var api = [ 'tCWQbncx6tcVXTZUXyrHbW2e', 'p6ZKgU1wthihGqymYncxuBNu', 'kFz7BEPgVY8VyxW5CxVM7P9J', '2AjasifpR9DNpqpRQKTKWQsZ', 'TmyvKbt8DE1tjTMsQCA34dRt', 'smKvqY2ia86MptoZGUWFRc8G']
    var key = api[Math.floor(Math.random() * api.length)]
    let keyrmbg = `${key}`

    await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
        fs.unlinkSync(media)
        let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
        fs.writeFileSync(ranp, bufferir9vn5, (err) => {
  if (err) return reply ('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
        })
         conn.sendMessage(from, {image: fs.readFileSync(ranp), caption: 'Tanpa background'}, {quoted:dev})
  //makeSticker(fs.readFileSync(ranp),Sticker, StickerTypes)
      fs.unlinkSync(ranp)
        }) 
        
  } catch (err){
console.log (`${err}`)
}    
  }
}
break
case 'pinterest': case 'pin': {
  if (!q) return setReply(mess.query);
  //try {
  await setReply(mess.wait);
const { downloadContentFromMessage,generateWAMessageFromContent,proto,generateWAMessageContent } = require("baileys")
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${q}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hai\nDibawah ini Adalah hasil dari Pencarian Kamu'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botName
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break
case 'google':{
if (!q) return setReply('Apa yang mau di cari bwang')
if (q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)

setReply(mess.wait)
 ggs({'query': q, 'no-display': true}).then(res => {

let vars =``
vars += `*-------「 GOOGLE SEARCH 」-------*\n\n_*Hasil Pencarian: ${q}*_\n`
for (let i = 0; i < res.length; i++) {
vars +=  `\n°°°°°°°°°°°°°°°°°°°°°°\n\n*Judul:* ${res[i].title}\n\n*Deskripsi:* ${res[i].snippet}\n\n*Link:* ${res[i].link}\n\n`
}
var teks = vars.trim()
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, text: teks }, { quoted: m } )
})
}
break
    case "get":
    case "fetch":
      if (!q) {
        return reply(`Contoh:\n${prefix + command} https://RangelChan`);
      }
      if (!/^https?:\/\//.test(q)) {
        return reply("URL is Invalid!");
      }
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      if (body.match(/(mp4)/gi)) {
        fetch(`${q}`, requestOptions)
          .then((res) => conn.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
          .catch((error) => reply("Error", error));
      } else if (body.match(/(mp3)/gi)) {
        fetch(`${q}`, requestOptions)
          .then((res) => conn.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
          .catch((error) => reply("Error", error));
      } else if (body.match(/(png|jpg|jpeg)/gi)) {
        fetch(`${q}`, requestOptions)
          .then((res) => conn.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
          .catch((error) => reply("Error", error));
      } else {
        fetch(`${q}`, requestOptions)
          .then((response) => response.text())
          .then((result) => reply(result))
          .catch((error) => reply("Error", error));
      }
      break;
case 'ss':
case 'ssweb':{
if (!isGroup) return onlyGroup()
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=185eff3aa9fe4e3c8e30bda63b1fb9cf&wait_until=page_loaded&url=${q}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image:{url: Url},caption:`${mess.success}`},{quoted:m})
.catch((err) => reply('Server sedang error coba lagi besok'))
}
break   
case 'remini':
case 'hd':{
if (isImage || isQuotedImage) {
const media = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
setReply(mess.wait)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=652c7664865e2b0e70929768&img=${anu}` }, caption: `_Sudah Jadi Kak_ >//<` }, { quoted: m})
} else {
setReply('Reply gambar nya!')
}
}
break
    case 'tourl': {
  //  if (!q) return reply('mana image nya bwang')
        await loading()
        let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
        if (/image|video|audio/.test(mime)) {
            let anu = await TelegraPh(media)
            setReply(util.format(anu))
        } else if (!/image|video|audio/.test(mime)) {
            let anu = await UploadFileUgu(media)
            setReply(util.format(anu))
        }
        await fs.unlinkSync(media)

    }
    break
    case 'tinyurl':{
	if (args.length < 1) return setReply(`Masukkan link`)
	if (!isUrl) return setReply(`Masukkan link`)
	const fetchText = (url, optiono) => {
	return new Promise((resolve, reject) => {
	return fetch(url, optiono)
	.then(response => response.text())
	.then(text => resolve(text))
	.catch(err => {
	console.log(color(err,'red'))
	reject(err)
	})
	})
	}
	let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
	let shorti = `*Result :* ${okok}`
	setReply(shorti)
	}
	break  
 //×××××××× convert ××××××××××
case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
	setReply(LANGUAGES)
	}
	break
	case 'sound': {
    const soundNumber = parseInt(args[0], 10); // Gunakan basis 10 untuk parsing angka

    if (isNaN(soundNumber) || soundNumber < 1 || soundNumber > 161) {
        return m.reply('Masukkan nomor suara antara 1 dan 161\nContoh .sound 2');
    }

    await loading(); // Pastikan fungsi loading() ada dan sesuai kebutuhan

    const soundURL = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${soundNumber}.mp3`;
    const soundBuffer = await getBuffer(soundURL); // Pastikan fungsi getBuffer() ada dan sesuai kebutuhan

    await sendMusic(soundBuffer)
}
break;
case 'tts':
if (!isGroup) return onlyGroup()
if (!q) setReply( `Use Example ${prefix}${command} Ara ara`)
const gtts = require( 'node-gtts')
//const { gtts } = await import( 'node-gtts')
function tts(text, lang = 'id') {
// console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}
	
const defaultLang = 'id'
	
	
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text
	
let ras
try { ras = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) setReply( `Use Example ${prefix}${command} Hello world\nketik .kodebahasa untuk list bahasa`)
ras = await tts(text, defaultLang)
} finally {
if (ras) conn.sendMedia(from, ras, m, {caption: `${mess.success}`})
//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
}
break
  case 'tr': case 'translate':{
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
 `.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'robot': 
case 'slow': 
case 'smooth':
if (!isGroup) return onlyGroup()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/audio/.test(mime)) {
  await loading()
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
sendMusic(buff)
fs.unlinkSync(ran)
})
} else setReply(`Reply audionya!`)
} catch (e) {
setReply(e)
}
break	
case 'ghost':
if(isQuotedAudio) { 
  await loading()
let mele = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break
case 'hode':
if(isQuotedAudio) { 
  await loading()
let medok = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'nightcore':
if(isQuotedAudio) { 
  await loading()
let mela = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'tupai':
if(isQuotedAudio) { 
  await loading()
let medoi = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'imut':
if(isQuotedAudio) { 
  await loading() 
let masa = await conn.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'toimg': {
if (!isGroup) return onlyGroup()
if (!isQuotedSticker) return setReply('Reply stickernya') 
await loading()
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: buffer, caption: `${mess.success}`}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4':
case 'tovideo':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedSticker) {
  await loading()
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./${getRandom('.gif')}`
let outMp4 = `./${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${wm}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, video: fs.readFileSync(outMp4), caption: `${mess.success}`}, { quoted: m })	
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
})
db.data.users[sender].limit -= 1 
}
break
case'toptv':{
try {
  if (!isGroup) return onlyGroup()
await loading()
if (m.message.extendedTextMessage) {
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
 conn.relayMessage(m.chat, dataVideo, {})
 }
    } catch (error) {
        m.reply('reply video atau kirim video');
        }
        }
        break
case 'toptt':
case 'tovn':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedAudio){

await loading()
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
db.data.users[sender].limit -= 1 
}
break
case 'togif':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if ( isQuotedSticker) {

await loading()
let file = await  conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./${getRandom('.gif')}`
let outMp4 = `./${getRandom('.mp4')}`

//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`,async (err) => {
await fs.unlinkSync(file)
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await sendGif(fs.readFileSync(outMp4))
await fs.unlinkSync(outGif)
await fs.unlinkSync(outMp4)

})
})

} else if(isQuotedVideo){

setReply(mess.wait)
let outMp4 = getRandom('.mp4')
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
db.data.users[sender].limit -= 1 
}
break
case 'tomp3':
if (!isGroup) return onlyGroup()
if (isQuotedVideo || isVideo) {
await loading()
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandomFile('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
case 'volume':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
await loading()
if (isQuotedAudio){
let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: m})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
db.data.users[sender].limit -= 1 
}
break
case 'terbalik':{
if (!isGroup) return onlyGroup()
	if (/audio/.test(mime)){ 
	await loading()
	let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
case 'resize':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedImage || isImage) {
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
if (!q) return setReply(`Masukan ukuran panjang x lebar nya!, contoh ${prefix+command} 300x300`)

await loading()
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnailUrl: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, mimetype: 'image/jpeg', image: buffer453, caption: `Done kak ${q}`}, { quoted: m })		
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
db.data.users[sender].limit -= 1 
}
break
case 'toonce':
            case 'toviewonce': {
                if (!quoted) return setReply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                   let anuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.succes,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                  let  anuanuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.succes,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                let   bebasap = await conn.downloadAndSaveMediaMessage(quoted)
                   conn.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
//××××××××× FUN ××××××××××××//
case 'truth':
		const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
    const ttrth = trut[Math.floor(Math.random() * trut.length)]
		sendAnti (`${ttrth}`) 
		break
   case 'dare':
		const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		sendAnti(`${der}`) 
		break
case  'jjmeryani':{
setReply(mess.wait)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
conn.sendMessage(m.chat,{video:{url:hayu},caption:`nih kak🗿`},{quoted: m})
}
break 
case 'tiktokghea':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./json/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'cosplayangel':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./json/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
conn.sendMessage(m.chat, { caption: 'nih bang ehanz\ningat jangan Gamon yak\nAng3l udah pergi;)', video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
setReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./json/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videosad':
setReply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./json/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'wibuvid':
setReply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./json/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
setReply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./json/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
setReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./json/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videogalau':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break   
case 'chinese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break       
    case 'hug': {
        if (!m.isGroup) return onlyGroup()
      await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)
    try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var ment = [messsender, users]
          } catch {
            users == "none"
       ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} hugged themself!`
          } else {
         musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
  case 'cry': {
    if (!m.isGroup) return onlyGroup()
    await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} cried themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'kill': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
         let   users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} killed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'pat': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} patted themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'lick': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} licked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'kiss': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} kissed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bite': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
        try {
  let messsender = m.sender
   let musers = ``
    try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bit themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
         conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'yeet': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} yeeted themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bully': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bullied themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bonk': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bonked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }      }
        break;
        case 'wink': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
  var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)
       try {
         let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} winked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'poke': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} poked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'nom': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} nommed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'slap': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} slapped themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })        } catch (error) {    
      console.log(error);
   }
      }
        break;
        case 'smile': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} smiled themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
    break;
   case 'wave': {
     if (!m.isGroup) return onlyGroup()
     await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} waved themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'awoo': {
          if (!m.isGroup) return onlyGroup()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} awooed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
            case 'blush': {
              if (!m.isGroup) return onlyGroup()
              await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} blushed themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                    console.log(error);
                    }
                  }
                    break;
                    case 'smug': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)
                    try {
                  let messsender = m.sender
                      let musers = ``
                     try {
                      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                     if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} smugged themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `
                      }
                     const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
             conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'glomp': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} glomped themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
               conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'happy': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} happied themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
                conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'dance': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                      let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} danced themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
             conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'cringe': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} cringed themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'cuddle': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} cuddled themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'highfive': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} highfived themself!`
                      } else {

                       musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'handhold': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                      let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} handheld themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                            
                    case 'feed': {
                      if (!m.isGroup) return onlyGroup()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} fed themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                            case 'tickle': {
                              if (!m.isGroup) return onlyGroup()
                              await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag atau reply orangnya`)
                    var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                      let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} tickled themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
                   conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break
//××××××××× NSFW ××××××××××//
case 'nsfw':{

if (!isGroup &&!isGroupAdmins && !isOwner && !isBotGroupAdmins) return onlyAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].nsfw = true
                  setReply(`${command} is enabled`)
                  let pringatan = Ehztext(` 
${gris}「 ⚠️Peringatan⚠️ 」${gris}

Fitur nsfw (tidak aman untuk bekerja) telah diaktifkan di grup ini, yang berarti seseorang dapat mengakses grafik seksual dari bot!`)
    m.reply(pringatan)
               } else if (args[0] === 'off') {
                  db.data.chats[from].nsfw = false
                  setReply(`${command} is disabled`)
               }
               }
            break
    case 'paptt':
if (!q) return setReply(`Example 
${command} foto/video`)
let papttfoto = JSON.parse(fs.readFileSync('./json/paptt-foto.json'))
let papttvideo = JSON.parse(fs.readFileSync('./json/paptt-video.json'))
let titid1 = (pickRandom(papttfoto))
let titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
setReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan😛'}, { quoted: fkontak })
            } else if (q == 'video') {
setReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                conn.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🙈'}, { quoted: fkontak })
    db.data.users[sender].glimit -= 1     
}
break        
case 'spank': {
                              if (!m.isGroup) return onlyGroup()
  if (!isAntiNsfw) return setReply(mess.nsfw)
                              await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} spanked themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              conn.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return onlyGroup()
if (!isAntiNsfw) return m.reply(mess.nsfw)
                await setReply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
               let anu = await hentai()
                let result912 = anu[Math.floor(Math.random(), anu.length)]
                conn.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: ` Title : ${result912.title}\n Category : ${result912.category}\n Mimetype : ${result912.type}\n Views : ${result912.views_count}\n Shares : ${result912.share_count}\n Source : ${result912.link}\n Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!isGroup) return onlyGroup()
if (!isPremium) return onlyPremium()
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
 let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
conn.sendMessage(m.chat, { caption: 'Dosa Tanggung Sendiri', image: { url:trap.data.url } }, { quoted: m })
break
case 'hneko' :
if (!isGroup) return onlyGroup()
if (!isPremium) return onlyPremium()
if (!isAntiNsfw) return setReply(mess.nsfw)
   let hneko = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: 'Dosa Tanggung Sendiri', image: { url:hneko.data.url } }, { quoted: m })
break
case 'nwaifu' :
if (!isGroup) return onlyGroup()
if (!isPremium) return onlyPremium()
if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
   let waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: 'Dosa Tanggung Sendiri', image: { url:waifudd.data.url } }, { quoted: m })
break
case 'animespank':
if (!isGroup) return onlyGroup()
if (!isPremium) return onlyPremium()
if (!isAntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
let waifud = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await conn.sendMessage(m.chat, { caption:  `Dosa Tanggung Sendiri`, image: {url:waifud.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gifblowjob':
if (!m.isGroup) return onlyGroup()
if (!isPremium) return onlyPremium()
if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await conn.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'blowjob':
    if (!m.isGroup) return onlyGroup()
    if (!isPremium) return onlyPremium()
	if (!isAntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
    if (!m.isGroup) return onlyGroup()
    if (!isPremium) return onlyPremium()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
    if (!m.isGroup) return onlyGroup()
    if (!isPremium) return onlyPremium()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
    if (!m.isGroup) return onlyGroup()
    if (!isPremium) return onlyPremium()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
    if (!m.isGroup) return onlyGroup()
    if (!isPremium) return onlyPremium()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
    if (!m.isGroup) return onlyGroup()
    if (!isPremium) return onlyPremium()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
conn.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
//×××××××××× ephoto ×××××××××××//
 case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix+command} Rangel`) 
await loading()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
conn.sendMessage(m.chat, { image: { url: haldwhd }, caption: mess.succes }, { quoted: m })
  db.data.users[sender].limit -= 1
}
break
//××××××××××× Textpro ×××××××××//
 case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : false,thumbnail:thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break

//×××××××××× Primbon ×××××××××//
case 'cekmemek':
			
				 if (!isGroup) return onlyGroup()
if (!q) return m.reply('tag temanmu!')
				const persengayy = body.slice(0)
          const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: false,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: thumb,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
				break  
case 'cekkontol':
				if (!isGroup) return onlyGroup()
if (!q) return setReply('*CEKKONTOL* Izmi begitu!')
	const persenbucin = body.slice (0)
    const bucin =
          ["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const ehan = bucin[Math.floor(Math.random() * bucin.length)]
    conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: false,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: thumb,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ ehan}, { quoted: fkontak })
				break 
  case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break	
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`)
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} ehanz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`)
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`)
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`)
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`)
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`)
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`)
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`)
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
//×××××××××× MENU ××××××××××//
case 'menu': case 'helpmen': {

if(!isGroup) return onlyToko()
let { allmenu, fitur} = require('./help')
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname) 
let fiturnya = fitur() 
 let data = global.db.data.others['runtime']
      let time = (new Date - data.runtime) || "Tidak terdeteksi"
//let rm = pickRandom(pdf)
if (setmenu == "document"){
conn.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: wm,
mimetype: "application/vnd.ms-powerpoint",
jpegThumbnail:fs.readFileSync("./stik/thumb.jpeg"),
caption: menunya+fiturnya,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botName,
body: `Hai  ${ucapanWaktu} kak ${pushname}` ,
thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
thumbnailUrl:await pickRandom(fotoRandom),
sourceUrl: web,
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m,ephemeralExpiration: 86400});
await sleep(1500) 
sendvn(dmusic)
} else if (setmenu == "image"){

conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`${baileysVersion}`,
previewType:"PHOTO", 
thumbnailUrl: pickRandom(fotoRandom),
sourceUrl:`${web}`
}}, image: fs.readFileSync('./stik/thumb.jpeg'), caption: menunya+fiturnya}, { quoted: ftoko })
await sleep(1500) 
sendvn(dmusic)
} else if (setmenu == "gif"){
conn.sendMessage(m.chat, { video: fs.readFileSync('./stik/video1.mp4'),gifPlayback: true,
  caption: fiturnya, contextInfo: {
 externalAdReply: {
containsAutoReply: true,
mediaType: 1,
//mediaUrl: 'https://telegra.ph/file/803e9b20c514befd3cffa.jpg',
renderLargerThumbnail: true,
showAdAttribution: true,
sourceUrl: "https://instagram.com/ehanzdhoanx",
thumbnailUrl: pickRandom(fotoRandom),
title:wm,
body: `${ucapanWaktu} kak ${pushname}`,},},}, { quoted: m }); 
} else if (setmenu == "katalog"){
 const { generateWAMessageFromContent } = require("baileys")
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: `90000`, status: 500,
surface: 999,
message: menunya+fiturnya,
description: '^^',
orderTitle: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
token: '120363212768920223@g.us',
mediaType: 1,
curreyCode: 'IDR',
totalCurrencyCode: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
totalAmount1000: '50000',
sellerJid: '6281316643491@s.whatsapp.net',
thumbnail: thumb, 
//thumbnaiUrl: pickRandom(fotoRandom)
}}, {contextInfo:{ externalAdReply: {
showAdAttribution: true, 
title: `${week} , ${calender}`,
body: `${botName}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl:pickRandom(fotoRandom),
sourceUrl: `${web}`}},quoted: fkontak})
conn.relayWAMessage(prep)
await sleep(1500) 
sendvn(dmusic)
    } else if (setmenu == "thumbnail"){
conn.sendMessage(from, { contextInfo: {
            externalAdReply: {
                showAdAttribution: true, 
                title: `${botName}`,
                body: `${runTime}`,
                mediaType: 1,  
                renderLargerThumbnail: true,
                thumbnailUrl: pickRandom(fotoRandom),
                sourceUrl: `${web}`
            },
            editKey: { 
                remoteJid: from, 
                id: 'some_unique_message_id'  // Pastikan ini sesuai dengan kunci unik yang relevan
            }
        },
        text: menunya + fiturnya
    }, { quoted: m });
await sleep(1500) 
sendvn(dmusic)
} else if (setmenu == "payment"){
let numb = ["7.76","15.48","8.92","10.72","13.48","4.39","5.99","2.56"]
let amont = numb[Math.floor(Math.random() * numb.length)]
conn.relayMessage(from,  {
requestPaymentMessage : {
expiryTimestamp: 0,												
currencyCodeIso4217: 'USD',
amount1000: (amont) * 1000,
requestFrom: `${sender.split('@')[0]}@s.whatsapp.net`,
noteMessage: {
extendedTextMessage: {
text : menunya+fiturnya,
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
await sleep(1500) 
sendvn(dmusic)
} else if (setmenu == "livelocation"){
conn.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption :menunya+fiturnya,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, {quoted: m})
await sleep(1500) 
sendvn(dmusic)
} else if (setmenu == "toko"){
 onlyToko()


} else if (setmenu == "button"){

    const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("baileys")
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
let tekmenu = `
${gris}「 ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴇʙᴇʀʜᴀsɪʟᴀɴ ʏᴀɴɢ ᴅᴀᴛᴀɴɢ sᴇᴄᴀʀᴀ ɪɴsᴛᴀɴ, ᴛᴇᴛᴀᴘɪ sᴇᴛɪᴀᴘ ʟᴀɴɢᴋᴀʜ ᴋᴇᴄɪʟ ᴍᴇɴᴜᴊᴜ ᴛᴜᴊᴜᴀɴᴍᴜ ᴀᴅᴀʟᴀʜ ᴋᴇᴍᴀᴊᴜᴀɴ ʏᴀɴɢ ʙᴇʀᴀʀᴛɪ 」${gris}

ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
• ${week}, ${calender}`



let wek = Ehztext(`
🚻 *Info User* :
⬪ *Nama* : ${pushname}
⬪ *Status* : ${isPremium ? 'Premium':'Free'}
⬪ *Saldo* : Rp ${saldo}
⬪ *Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
⬪ *Limit game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}

🤖 *Info Bot* :
⬪ *Nama Bot* : ${botName}
⬪ *Bot Mode* : ${publik ? "Public" : "Self"}
⬪ *Running* : ${runWith} 
⬪ *Fitur Saat Ini* : ${totalFitur()}
⬪ *Total Error* : ${db.data.listerror.length}
⬪ *Total User* : ${Object.keys(db.data.users).length}
⬪ *User Banned* : ${db.data.banned.length}
⬪ *Cmd Blocked* : ${db.data.blockcmd.length} 

🕒 *Date & Time :*
⬪ *${week}, ${calender}*
⬪ *${timeWib} WIB*
⬪ *${dateIslamic}*`)

const caption = `${tekmenu}\n${readmore}\n${thanksto(prefix)}`;
let sections = [
{
title: '🍱All Menu',
highlight_label: 'All Menu List',
rows: [{
title: 'Menu All',
description: `Menampilkan Semua Menu`, 
id: `${prefix}menu all`
}]},
{
title: 'List Menu',
rows: [{
title: '🗞️Info',
description: `Menampilkan Fitur Info`, 
id: `${prefix}menu info`
},
{
title: '💌Anonymous',
description: `Menampilkan Fitur Anonymous`, 
id: `${prefix}menu anonymous`
},
       {
title: '👫Group',
description: `Menampilkan Fitur Group`, 
id: `${prefix}menu group`
},
{
title: '🎮Game',
description: `Menampilkan Fitur Game`, 
id: `${prefix}menu game`
},
{
title: '⚒️Rpg',
description: `Menampilkan Fitur Rpg`, 
id: `${prefix}menu rpg`
},
{
title: '📂Download',
description: `Menampilkan Fitur Download`, 
id: `${prefix}menu download`
},
{
title: '🔍Ai',
description: `Menampilkan Fitur Ai`, 
id: `${prefix}menu ai`
},
{
title: '🃏Sticker', 
description: "Menampilkan Fitur Sticker", 
id: `${prefix}menu sticker`
},
{
title: '🎐Fun', 
description: "Menampilkan Fitur Fun", 
id: `${prefix}menu fun`
},
{
title: '🌐Tools && Search', 
description: "Menampilkan Fitur Tools && Search", 
id: `${prefix}menu tools`
},
{
title: '🎤Convert', 
description: "Menampilkan Fitur convert", 
id: `${prefix}menu convert`
},
{
title: '🧕Islamic', 
description: "Menampilkan Fitur Islamic", 
id: `${prefix}menu islamic`
},
{
title: '🔮Primbon', 
description: "Menampilkan Fitur Primbon", 
id: `${prefix}menu primbon`
},
{
title: '📝Quotes', 
description: "Menampilkan Fitur Quotes", 
id: `${prefix}menu quotes`
},
{
title: '⛩️Anime', 
description: "Menampilkan Fitur Anime", 
id: `${prefix}menu anime`
},
{
title: '🖼️Ephoto', 
description: "Menampilkan Fitur Ephoto", 
id: `${prefix}menu ephoto`
},
{
title: '🖊️Textpro', 
description: "Menampilkan Fitur Textpro", 
id: `${prefix}menu textpro`
},
{
title: '👙Nsfw', 
description: "Menampilkan Fitur Nsfw", 
id: `${prefix}menu nsfw`
},
{
title: '📡Panel', 
description: "Menampilkan Fitur Panel", 
id: `${prefix}menu panel`
},{
title: '💸TopUp Payment', 
description: "Menampilkan Fitur Panel", 
id: `${prefix}menu topup`
},
{
title: '⛩️Anime', 
description: "Menampilkan Fitur Anime", 
id: `${prefix}menu anime`
},
{
title: '👾Bug', 
description: "Menampilkan Fitur Bug", 
id: `${prefix}menu bug`
},
{
title: '🗃️Storage', 
description: "Menampilkan Fitur Storage", 
id: `${prefix}menu storage`
},
{
title: '⚙️Settings', 
description: "Menampilkan Fitur Settings", 
id: `${prefix}menu settings`
},
{
title: '🕴️Owner', 
description: "Menampilkan Fitur Owner", 
id: `${prefix}menu owner`
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `乂 Hai ${pushname}`,
 subtitle: "ehanzdhoanx",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : {url : 'https://telegra.ph/file/a491b4b8af0113fdb8f93.jpg'}}, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 
              {
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"📚Script ","id":"${prefix}script"}`
 
   
 },
 ],
 })
 })
 }
 }
}, {})

if (!q) await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
} )
    
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName },
externalAdReply:{
showAdAttribution: true,
renderLargerThumbnail : true,
title: `${botName}`,
body:`${baileysVersion}`,
sourceUrl: `${web}`,
mediaType: 1, 
containsAutoReply: true,
thumbnailUrl: pickRandom(fotoRandom)
}
}
if (args[0] === "all") {
 const caption = `${wek}\n\n${readmore}\n\n${menuinfo(prefix)}\n\n\n${menuanonymous(prefix)}\n\n\n${menugrup(prefix)}\n\n\n${menugame(prefix)}\n\n\n${menurpg(prefix)}\n\n\n${menudownload(prefix)}\n\n\n${menuai(prefix)}\n\n\n${menusticker(prefix)}\n\n\n${menufun(prefix)}\n\n\n${menutools(prefix)}\n\n\n${menuconvert(prefix)}\n\n\n${menuislamic(prefix)}\n\n\n${menuprimbon(prefix)}\n\n\n${menuquotes(prefix)}\n\n\n${menuanime(prefix)}\n\n\n${menuephoto(prefix)}\n\n\n${menutextpro(prefix)}\n\n\n${menunsfw(prefix)}\n\n\n${menupanel(prefix)}\n\n\n${menutopup(prefix)}\n\n\n${menubug(prefix)}\n\n\n${menustorage(prefix)}\n\n\n${menusettings(prefix)}\n\n\n${menuowner(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'info') {
await sleep(1000) 
 const caption = `${menuinfo(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'anonymous') {
await sleep(1000)   
 const caption = `${menuanonymous(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'group') {
await sleep(1000)
 const caption = `${menugrup(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'game') {
await sleep(1000)
 const caption = `${menugame(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'rpg') {
await sleep(1000)
 const caption = `${menurpg(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'download') {
await sleep(1000)
 const caption = `${menudownload(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'ai') {
await sleep(1000)
 const caption = `${menuai(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'sticker') {
await sleep(1000)
 const caption = `${menusticker(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'fun') {
await sleep(1000)
 const caption = `${menufun(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'tools') {
await sleep(1000)
 const caption = `${menutools(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'convert') {
await sleep(1000)
 const caption = `${menuconvert(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'islamic') {
await sleep(1000)
 const caption = `${menuislamic(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'primbon') {
await sleep(1000)
 const caption = `${menuprimbon(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'quotes') {
await sleep(1000)
 const caption = `${menuquotes(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'anime') {
await sleep(1000)
 const caption = `${menuanime(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'ephoto') {
await sleep(1000)
 const caption = `${menuephoto(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'textpro') {
await sleep(1000)
 const caption = `${menutextpro(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'nsfw') {
await sleep(1000)
 const caption = `${menunsfw(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'panel') {
await sleep(1000)
 const caption = `${menupanel(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'topup') {
await sleep(1000)
 const caption = `${menutopup(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'bug') {
await sleep(1000)
 const caption = `${menubug(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'storage') {
await sleep(1000)
 const caption = `${menustorage(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'settings') {
await sleep(1000)
 const caption = `${menusettings(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'owner') {
await sleep(1000)
 const caption = `${menuowner(prefix)}`;
conn.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 }
    }
}
break
case 'setmenu':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
setmenu = "katalog"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
setmenu = "image"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'document'){
docType
setmenu = "document"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'gif'){
setmenu = "gif"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'thumbnail'){
setmenu = "thumbnail"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'payment'){
setmenu = "payment"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
}else if ((args[0]) === 'button'){
setmenu = "button"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'livelocation'){
setmenu = "livelocation"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
} else if ((args[0]) === 'toko'){
setmenu = "toko"
setReply(`Berhasil mengubah tampilan menu ke ${q}`)
}  else if (!q) {
sendAnti(`SETTING MENU

1. katalog
2. image
3. document
4. gif
5. thumbnail
6. payment
7. button
8. livelocation
9. toko`)
} else {
setReply("Menu tidak di temukan om")
}
break 	
break 

//×××××××××× Storage××××××××××××//
case  'listrespon':{
if (!isOwner) return onlyOwner()
let teks = 'List Respon :\n\n'
for (let bjir of Object.keys(db.data.respon)) {
teks += `- ${bjir}\n`
}
teks += `\nTotal ada : ${Object.keys(db.data.respon).length}`
teks += `\n\nUntuk mengambil Respon silakan ketik nama Respon`
setReply(teks)
}
break
case 'delrespon':{
      if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
      let listData = global.db.data.respon[q]
if(!listData) return setReply(`List ${q} tidak ada di database`)	
if(listData) delete global.db.data.respon[q]
setReply(`Berhasil menghapus respon ${q}`)
    }
    break
case 'addrespon':{
  if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
  if(q.length > 100) return setReply("Teks pertama tidak boleh panjang, max 100 huruf")
  let data = q.split("|")[0]
  let respon = q.split("|")[1]

  let listData = global.db.data.respon[data] 	
  if(listData){
    return setReply(`List ${data} sudah ada di database`)
    } else global.db.data.respon[data] = {
    id:senderNumber,
    respon:respon			
    } 
  setReply(`Berhasil menambahkan list ${data}`)
  }
  break
case 'addstik':{
if (!isOwner) return onlyOwner()
const client = require('filestack-js').init('AJgyzwz0FQk67sTuplYoiz')
if(!isQuotedSticker) return setReply("Reply sticker")
if(!q) return setReply("Nama stickernya apa?")
if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.sticker[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan sticker
ke dalam database dengan nama ${q}`
await setReply(teks)
await fs.unlinkSync(media)
}
break
case 'delstik':{
if (!isOwner) return onlyOwner()
if (!q) return setReply("Masukan query")
try {
if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.sticker[q]
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
case 'liststik':{
if (!isOwner) return onlyOwner()
let teks = '\n\n––––––『 *STICKER LIST* 』––––––\n\n'
for (let awokwkwk of Object.keys(db.data.sticker)) {
teks += `- ${awokwkwk}\n`
}
teks += `\nTotal Ada : ${Object.keys(db.data.sticker).length}`
teks += Ehztext(`\n\n📮 *Note:* ↓
• Untuk mengambil sticker ketik nama sticker
• Gunaka huruf sesuai dengan nama sticker
• Dilarang spam berlebihan menggunakan sticker
• Request sticker silakan hubungi owner\n`)
setReply(teks)
}
break
case 'addimage':{
if (!dev.key.fromMe && !isOwner) return onlyOwner()
if (!isQuotedImage && !isImage) return setReply('Reply imagenya')
if (!q) return setReply('Nama imagenya apa')
let delb = await conn.downloadAndSaveMediaMessage(quoted)
imagenya.push(q)
await fse.copy(delb,`./temp/image/${q}.jpg`)
fs.writeFileSync('./json/image.json', JSON.stringify(imagenya))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Image\n dengan nama *${q}*`)
}
break  
case 'delimage':{
if (!isOwner) return onlyOwner() 
try {
let wanu = imagenya.indexOf(q)
imagenya.splice(wanu, 1)
fs.writeFileSync('./json/image.json', JSON.stringify(imagenya))
fs.unlinkSync(`./temp/image/${q}.jpg`)
setReply(`Sukses delete image ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listimage':
{
let teks = '*List Image:*\n\n'
for (let awokwkwk of imagenya) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${imagenya.length}*`
teks += `\n\n*Untuk mengambil image silakan ketik nama image*`
setReply(teks)
}
break
case 'addvideo':{
if (!dev.key.fromMe && !isOwner) return onlyOwner
if (!isQuotedVideo && !isVideo) return setReply('Reply video nya')
if (!q) return setReply('Nama video nya apa?')
let delb = await conn.downloadAndSaveMediaMessage(quoted)
videonya.push(q) 
await fse.copy(delb, `./temp/video/${q}.mp4`)
fs.writeFileSync('./json/video.json', JSON.stringify(videonya))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Video\ndengan nama *${q}*`)
}
break
case 'delvideo':{
if(!dev.key.fromMe & !isOwner) return setReply('Only owner')
if (!q) return setReply("Masukan query")
try {
let wanu = videonya.indexOf(q)
videonya.splice(wanu,1)
fs.unlinkSync(`./temp/video/${q}.mp4`)
fs.writeFileSync('./json/video.json', JSON.stringify(videonya))
setReply(`Succes delete video ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete video ${q}!`)
}
}
break

case 'listvideo':{
let teks = '*video list :*\n\n'
for (let awokwkwk of videonya) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonya.length}*`
setReply(teks)
}
break
case 'addvn':{
if (!isOwner) return onlyOwner()
const client = require('filestack-js').init("AVKHbeyXsT0G9IKI01qenz");
if(!q) return setReply("Nama audionya apa?")
if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")

if(isQuotedAudio) {
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
} else if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandomFile('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)

await client.upload(buffer453, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})

let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)



fs.unlinkSync(ran)
})
} else {
setReply("Reply audio/videonya")
}
}
break

// ===================================== // 
case 'delvn':{
if (!isOwner) return onlyOwner()
try {
if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.audio[q]
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
// ===================================== //
case 'listvn':
{
let teks = '\n\n––––––『 *VOICE NOTE* 』––––––\n\n'
for (let awokwkwk of Object.keys(db.data.audio)) {
teks += `• ${awokwkwk}\n`
}
teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
teks += `\n\n📮 *Note:* ↓
• Untuk mengambil vn ketik nama vn
• Gunaka huruf sesuai dengan nama vn
• Dilarang spam berlebihan menggunakan vn
• Request vn silakan hubungi owner\n`
setReply(teks)
}
break
//××××××××× Settings ××××××××××××//
 
case 'setbio':
{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await conn.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'setppbot':{
if (!isOwner) return onlyOwner()
if(isQuotedImage){
const media = await conn.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply(`${mess.success}`)    
} else setReply("Reply fotonya")
}
break
case 'delppbot': {
if (!isOwner) return onlyOwner()
    await conn.removeProfilePicture(conn.user.id)
    setReply(`Success in deleting bot's profile picture`)
    }
    break
case 'setimgthumb':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumb.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image thumb`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break
 case 'autosticker':
if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings['settingbot'].autoSticker = true
                    setReply(`Succes Mengaktifkan  ${prefix + command}`)
                } else if (q == 'off') {
                    db.data.settings['settingbot'].autoSticker = false
                    setReply(`Succes Mematikan  ${prefix + command}`)
                }
            break


case 'setreply':{
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
	if(replyType === "web") return setReply("Udah aktif")
	replyType = "web"
	setReply(`Berhasil mengubah setreply ke ${q}`)
	}  else if ((args[0]) === 'web2'){ 
	if(replyType === "web2") return setReply("Udah aktif")
	replyType = "web2"
	setReply(`Berhasil mengubah setReply ke ${q}`)
	} else if ((args[0]) === 'mess'){ 
	if(replyType === "mess") return setReply("Udah aktif")
	replyType = "mess"
	setReply(`Berhasil mengubah setreply ke ${q}`)
	} else if ((args[0]) === 'katalog'){ 
	if(replyType === "katalog") return setReply("Udah aktif")
	replyType = "katalog"
	setReply(`Berhasil mengubah setreply ke ${q}`)
	} else if ((args[0]) === 'document'){ 
	if(replyType === "document") return setReply("Udah aktif")
	replyType = "document"
	setReply(`Berhasil mengubah setreply ke ${q}`)
	} else if (!q) {
	reply ( `Silakan Dipilih
• web
• web2
• mess
• katalog
• document
Contoh : ${prefix+command} web`)
	 } else {
	replyType = q
	 setReply("SetReply Tidak Di Temukan")
	}
	}
	break
case 'autobio':
if (!isOwner) return onlyOwner()
                if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings['settingbot'].autoBio = true
                    setReply(`Success Mengaktifkan ${prefix + command}`)
                } else if (q == 'off') {
                    db.data.settings['settingbot'].autoBio = false
                    setReply(`Success Mematikan ${prefix + command}`)
                }
            break

  case 'restart':{
    if (!isOwner && !itsMe) return onlyOwner()
    let bot = db.data.others['restart']
    if(bot){
    db.data.others['restart'].m = m
    db.data.others['restart'].from = from
    } else {db.data.others['restart'] = {
    m:m,
    from:from
    }
    }
    await conn.sendMessage(from, {text: `_Restarting ${botName}_`})
    await conn.sendMessage(from, {text: "_Succes_"})
    await sleep(1000)
    process.send('reset')
    }
    break
   case 'delsesi': 
  case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file Kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua Kenangan di folder session")     
});
}
break
  case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file Kenangan <3\n\n`
	if(filteredArray.length == 0) return setReply(teks)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	setReply(teks) 
	
//	await sleep(2000)
	setReply("Menghapus file Kenangan...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	setReply("Berhasil menghapus semua Kenangan <3")
	 
	});
	  }
	break 
 case 'cleartoxic':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all toxic")
db.data.toxic = []
break
 case 'clearalluser':
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all User")
	db.data.users = {}
	break 
case 'blockcmd':
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
	if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
	addblockcmd(q,listcmdblock)         
	setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
	break
 case 'unblockcmd':
	try{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply("Textnya mana cih")
	if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
	deleteblockcmd(q, listcmdblock)        
	setReply(`Berhasil unblock command 「 *${q}* 」`)
	} catch (err) {
	setReply("Bjirr error, keknya ada yang error")
	}
	break  
 case 'listblockcmd':{
	let wo = `*「 LIST BLOCK CMD 」*`
	let soso = [];
	for (let i of listcmdblock) {
	soso.push(i.cmd)
	wo += `\n\n•> Command : ${i.cmd}`
	}
	setReply(wo)
	}
	break  
case 'adderror': {
		if (!isOwner) return onlyOwner() 
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
	if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
	case 'clearallerror':
	if (!isOwner) return onlyOwner()
	setReply("SukseS clear all error")
	clearAllError(listerror)
	break 
	case 'delerror':{
	if (!itsMe && !isOwner) return reply (mess.only.ownerB)
	listerror.splice(q, 1)
	fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
	setReply( `Sukses menghapus ${q} di daftar error`)
	}
	break
	case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${fake1}`
	setReply(errornye)
	}
	break
  case  'addcmdowner':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
	addDataId(q, "commands", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
	}
	break
	  case  'delcmdowner':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
	  removeDataId ("commands", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  case 'listcmdowner':{
	  let nana = await DataId.filter(item => item.name == "commands" )
	  let teks ="List Commands For Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
	  case 'addcmdprem':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	addDataId(q, "premium", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
	}
	break
	  case 'delcmdprem':
	 if (!isOwner) return onlyOwner() 
	  if(!q) return setReply(mess.query)
	  try {
	  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("premium", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	case 'listcmdprem':{
	  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	  let nana = await DataId.filter(item => item.name == "premium" )
	  let teks ="List Command For Premium User\n\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`• ${toFirstCase(i)}\n`   
		}    
	   teks +=`\n• Total: ${nunu.length}\n` 
	  setReply(teks)
	  }
	  break  
	case  'addcmdlimit':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
	addDataId(q, "limit", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
	}
	break
	  case  'delcmdlimit':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("limit", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	case 'listcmdlimit':{
	  let nana = await DataId.filter(item => item.name == "limit" )
	  let teks ="List Commands For limit\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
//×××××××××× OWNER ××××××××××//
/*case 'addsewa':{
	 if(!isGroup){
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let LinkGc = q.split(" ")[0];
	let Second = q.split(" ")[1];
	  let code = LinkGc.match(rex1);
	if (code == null) return  setReply("No invite url detected.");
	
	let kode = code[0].replace("chat.whatsapp.com/", "");
	await conn.groupAcceptInvite(kode)
	let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
	return setReply("Invalid invite url.");
	});
	setReply(`Sukses`)
	
	await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
	} else if(isGroup){
	if(!q) return setReply("Maukian angka 1m/1d/1h")
	if (isBotGroupAdmins) {
	let linkgc = await conn.groupInviteCode(from)
	var yeh = `https://chat.whatsapp.com/${linkgc}`
	} else if(!isBotGroupAdmins){
	var yeh = `Botz Is Not Admin`
	} 
	_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
	setReply("Berhasil Add Sewa ke group")
	}
	}
	break*/
 /*case 'addsewa': {
    if (!isGroup) {
        // Jika tidak berada di dalam grup, input seharusnya adalah link undangan grup
        const rex1 = /chat.whatsapp.com\/([\w\d]*)/;
        let parts = q.split(" ");
        let linkGc = parts[0];
        let durasi = parts[1];
        
        let code = linkGc.match(rex1);
        if (code === null) return setReply("Tidak ada URL undangan yang terdeteksi.");
        
        let kode = code[1];
        try {
            await conn.groupAcceptInvite(kode);
            let groupInfo = await conn.groupGetInviteInfo(kode);
            let { id, subject } = groupInfo;
            setReply("Sukses");
            
            // Tambahkan grup ke dalam layanan
            await _sewa.addSewaGroup(id, subject, linkGc, durasi, sewa);
        } catch (error) {
            setReply("URL undangan tidak valid.");
        }
    } else if (isGroup) {
        // Jika berada di dalam grup, tangani kasus khusus grup
        if (!q) return setReply("Harap tentukan durasi seperti 1m/1d/1h");
        
        if (isBotGroupAdmins) {
            let linkGc = await conn.groupInviteCode(from);
            let undanganLink = `https://chat.whatsapp.com/${linkGc}`;
            
            // Tambahkan grup ke dalam layanan
            await _sewa.addSewaGroup(from, groupName, undanganLink, q, sewa);
            setReply("Berhasil menambahkan grup ke layanan.");
        } else {
            setReply("Bot bukan admin grup ini.");
        }
    }
}
break;*/
case 'joinsewa':
case 'addsewa': {
    if (!isGroup) {
        const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
        let LinkGc = q.split(" ")[0];
        let Second = q.split(" ")[1];
        let code = LinkGc.match(rex1);
        if (code == null) return setReply("Tidak ada URL undangan yang terdeteksi.");
        let kode = code[0].replace("chat.whatsapp.com/", "");
        await conn.groupAcceptInvite(kode);
        let { id, subject, creator, creation, desc, descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
            return setReply("URL undangan tidak valid.");
        });
        let teks = `
Berhasil
*Nama:* ${subject}
*Id:* ${id}
*Durasi:* ${conn.msToDate(toMs(Second))}
*Hitung Mundur:* ${toMs(Second)}
`;
        setReply(teks);
        await sleep(3000)
m.reply(`Hallo Aku ${botName}\nAku Datang Kesini Untuk Menemani Kalian\n\n.ceksewa\nUntuk Melihat Waktu Sewa`)
        await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa);
        
    } else if (isGroup) {
        if (!q) return setReply("Harap masukkan durasi dalam format 1m/1d/1h");
        if (isBotGroupAdmins) {
            let linkgc = await conn.groupInviteCode(from);
            var yeh = `https://chat.whatsapp.com/${linkgc}`;
        } else if (!isBotGroupAdmins) {
            var yeh = `Bot bukan admin`;
        }
        _sewa.addSewaGroup(from, groupName, yeh, q, sewa);
        setReply("Berhasil menambahkan sewa ke grup");
    }
}
break

case 'listsewa': 
	let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
	 } 
	ordernye += `© ${botName}`
	setReply(ordernye)
	break
  case 'ceksewa': 
	case 'sewacek':
	if (!isGroup) return setReply(mess.only.group)
	if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
	let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
	let sewenye = `「 *SEWA EXPIRE* 」
	*Group*: ${groupName}
	*ID*: ${from}
	*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
	setReply(sewenye)
	break
case 'sewalist': 
	case 'listsewa':
	let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
	} 
	txtnyee += `© ${fake1}`
	setReply(txtnyee)
	break 
case  'addowner':{
	if (!isOwner) return onlyOwner()
	if (!isGroup) return setReply(mess.only.group)
	if(checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
	addDataId(Input, "owner", DataId)
	setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
	}
	break
	case  'delowner':
	if (!isOwner) return onlyOwner() 
	try {
	if(!checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
	removeDataId ("owner", Input, DataId)
	setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break
  case 'listowner':{
	  if(!checkDataName("owner", q, DataId)) { await createDataId("owner", DataId) }
	  let nana = await DataId.filter(item => item.name == "owner" )
	  if(!nana) return setReply("Tidak ada")
	  let teks ="List Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`- wa.me/${i.split("@")[0]} \n`   
		}    
	  setReply(teks)
	  }
	  break

case 'listgc': {
	if(!isOwner) return onlyOwner()
	let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
	let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
	for (let i of anu) {
	let metadata2 = await conn.groupMetadata(i)
	teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
	 }
	conn.sendTextWithMentions(from, teks, dev)
	}
	break
 case 'addprem':
    if (!isOwner) return onlyOwner();
    
    let Pe = mentionByTag[0] ? mentionByTag[0] : (mentionByReply ? mentionByReply : (q ? numberQuery : false));
    
    if (!isGroup) {
        if (!q) return setReply(`Penggunaan:\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd = hari`);
        
        // Jika user sudah premium, jangan ulangi
        // if (_prem.checkPremiumUser(Pe, premium)) return setReply("User tersebut sudah di premium");
        
        _prem.addPremiumUser(Pe, q, premium);
        setReply(`Sukses menambahkan premium untuk ${Pe.split("@")[0]}`);
        
        conn.sendText(Pe, `Halo kak, aku *${botName}*\nKamu telah terdaftar sebagai user premium.\nTerima kasih sudah menggunakan ${botName}\n\nSilahkan ketik .cekprem untuk melihat masa berlaku premium kamu`);
        
    } else if (isGroup) {
        if (Pe) {
            let waktu = q.split(" ")[1];
            
            // Jika user sudah premium, jangan ulangi
            // if (_prem.checkPremiumUser(Pe, premium)) return setReply("User tersebut sudah di premium kak");
            
            _prem.addPremiumUser(Pe, waktu, premium);
            await setReply(`Sukses, silakan ketik ${prefix}listprem untuk melihat daftar premium.`);
            
            conn.sendMessage(Pe, `Halo kak, aku *${botName}*\nKamu telah terdaftar sebagai user premium.\nTerima kasih sudah menggunakan ${botName}\n\nSilahkan ketik .cekprem untuk melihat masa berlaku premium kamu`);
            
        } else {
            setReply("Tag atau balas pengguna yang ingin diatur.");
        }
    }
    break;

case 'cekprem': case 'cekpremium':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
			let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
			  break
   case 'delprem':
	if (!isOwner) return onlyOwner()
	if(Input){
	 if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
	_prem.delPremiumUser (Input, premium)
	setReply(`Succes delete premium ${Input.split("@")[0]}`)          
	   
	} else setReply("Tag/Reply/Input nomer target")
	break
  case 'listprem':{
		let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
		let men = [];
		for (let i of premium){
		men.push(i.id)
		let cekvip = ms(i.expired - Date.now())
		txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
		}
		mentions(txt, men, true)
		}
		break
	case 'listpc': {
	if(!isOwner) return onlyOwner()
	let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
	let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
	for (let i of anu) {
	let nama = store.messages[i].array[0].pushName
	teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
	}
	conn.sendTextWithMentions(from, teks, dev)
	 }
	break
case 'ban':{
			let alasan = ""
			if (!isOwner)return setReply('hanya owner') 
			if (q.startsWith("+")) {
			let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
			let Name = await conn.getName(woke)
			if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
			addBanned(Name,calender,woke,alasan, ban)          
			setReply( `Berhasil banned ${woke}`);
			} else  if(users){
			let alasan = mentionByReply? q : mentionByTag? q.split(" ")[1] : "" 
			if(alasan == undefined) alasan = "Tidak ada"
			let Nomer = `${users.split("@")[0]}`
			if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
			let Name = await conn.getName(users)
			//if(Nomer === ownerNumber[0]) return setReply("Ga mau") 
			addBanned(Name,calender,Nomer,alasan, ban)               
			setReply( `Berhasil banned ${users.split("@")[0]}`);
			} else setReply('Reply atau tag targetnya')
			}
			break
case 'unban':{
				if (!isOwner)return setReply('hanya owner') 
				if (q.startsWith("+")) {
				let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
				if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
				unBanned (woke, ban)             
				setReply( `Berhasil unbanned ${woke}`);
				} else  if(users){
				let Nomer =`${users.split("@")[0]}`
				if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
				//if(Nomer === Ownerin) return setReply("Ga mau")
				unBanned (Nomer, ban)             
				setReply( `Berhasil unbanned ${users.split("@")[0]}`);
				} else setReply('Reply atau tag targetnya')
				}
				break
 case 'listban':
//if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
 });
setReply(banya)
break
case 'clearallban':{
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all ban")
	let nana = Object.keys(db.data.users)
	let obj = []
	for(let i of nana){
	if(db.data.users[i].banned.status) db.data.users[i].banned.status = false
	}
	}
	break 
case 'block':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	
	if(users){
	await conn.updateBlockStatus(users, "block")
	setReply(`Sukses block user`)
	} else {
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	await conn.updateBlockStatus(woke, "block")
	} else if(!q){
	setReply("Masukan nomer yang ingin di block")
	}
	setReply(`Berhasil Block user ${woke.split("@")[0]}`)
	}
	break
 case  'unblock':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	if(users){
	await conn.updateBlockStatus(users, "unblock")
	await setReply(`Sukses unblock user`)
	} else if(!q){
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan re�ply pesan atau tag atau input nomer yang mau di block")
	await conn.updateBlockStatus(woke, "unblock")
	setReply(`Sukses unblock ${woke}`)
	} else if(!q){
	setReply("Masukan nomer yang ingin di unblock")
	}
	
	}
	break
   case 'clearallblock':{
	if (!isOwner) return onlyOwner()
	let obj = [] 
	fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
	await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
	}
	break 
  case 'listblock':{
	let block = await conn.fetchBlocklist()            
	setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
	}
	break 
case 'getsesi': {
const JSZIP = require('jszip')
const zip = new JSZIP();
if (!isOwner) return setReply(mess.only.owner)
setReply("Getting session file...")
const readSession = await fs.readdirSync(`./session`);
const folder = zip.folder("session");
for (let json of readSession) {
const jsonSession = await fs.readFileSync(`./session/${json}`);
folder.file(json, jsonSession);
}
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
let file = `./session.zip`
zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
.pipe(fs.createWriteStream(`./session.zip`))
.on('finish', async () => {
let media = fs.readFileSync(file)
await conn.sendMessage(m.chat, { document: media, fileName: "Session file", mimetype: 'application/zip'  ,  jpegThumbnail  }, { quoted: m })
await fs.unlinkSync(file)
})
}
break
 case 'getcase':
try{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply("*Mau nyari Case apa kak*") 
if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
let nana = await getCase(q)
setReply(nana) 
} catch(err){
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break
    case 'addcase':{
    if (!isOwner) return onlyOwner()
    if (m.quoted){
    let teks = m.quoted.text 
    let nih = await addCase(teks)
    setReply(`${nih}`)
    } else if(q){
    let teks = q
    let nih = await addCase(teks)
    setReply(nih)
    } else setReply('Sualah');
    }
    break
case 'delcase':{
if (!isOwner) return onlyOwner()
if (!q) return setReply('Masukan nama fitur yang mau di hapus');
let teks = m.quoted ? m.quoted.text : q
let yes = await delCase(teks)
setReply(yes)
}
break
case 'listcase': {
//let { listCase } = require('./lib/scrapelistCase.js')
setReply(listCase())
}
break
case "delfile":
if (!isOwner) return onlyOwner()
if (!q) return m.reply("Ex: .delfile ./database/prem.json")
fs.unlinkSync(q)
m.reply ("Done")
break

case 'delfolder':
if (!isOwner) return onlyOwner
 const rimraf = require('rimraf')
if (!q) return reply(`*Ex* : ${prefix + command} ./session`)
rimraf.sync(`${q}`)
reply(`Berhasil hapus folder ${q}`)
break
case 'ch': {
let id_ch = `${global.newsletterJid}`
if (!isOwner) return onlyOwner();
if (args.length < 1) return reply("Kirim/Reply\nVideo/Image Yang Ingin kamu kirimkan ke\nsaluran !! `${prefix + command}` teks");
if (!q) return reply('Teksnya bwng');
reply(mess.wait);
if (isImage) {
await sleep(4000);
let media = await conn.downloadAndSaveMediaMessage(quoted);
let lann = await Telegraph(media);
conn.sendMessage(id_ch, { caption: `${q}`, image: { url: lann }, quoted: m });
} else if (isVideo) {
await sleep(4000);
let media = await conn.downloadAndSaveMediaMessage(quoted);
let lann = await Telegraph(media);
conn.sendMessage(id_ch, { caption: `${q}`, video: { url: lann }, quoted: m });
} else {
await sleep(4000);
conn.sendMessage(id_ch, { text: `${q}`, quoted: m });
reply('Sukses');
}
}
break;
case 'bcuser': {
  if (!isOwner && !itsMe) return onlyOwner()
  if (!q) return setReply('Teksnya?')

  // Daftar ID pengguna yang akan dikirimi broadcast
  let userList = Object.keys(global.db.data.users);

      

  // Jika ada media yang di-quote atau dikirim
  if (isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
    var alala = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
  }

  setReply(`Mengirim Broadcast Ke ${userList.length} Chat, Waktu Selesai ${userList.length * 0.5 } detik`)

  for (let i of userList) {
    let text = Ehztext(`
      *_Broadcast User_*

      ––––––『 *MESSAGE* 』––––––

      ${q}\n\nDate : ${calender}
    `)

    await sleep(1000)
    let contextInfo = {
      forwardingScore: 50,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName
      },
      externalAdReply: {
        showAdAttribution: true,
        renderLargerThumbnail: true,
        title: `${baileysVersion}`,
        body: `Runtime ${runTime}`,
        mediaType: 1,
        containsAutoReply: true,
        thumbnailUrl:'https://telegra.ph/file/b93cbe00c79246b8ef3f6.png'
      }
    }

    if (isQuotedImage || isImage) {
      conn.sendMessage(i, { contextInfo, image: fs.readFileSync(alala), caption: text })
    } else if (isQuotedVideo || isVideo) {
      conn.sendMessage(i, { contextInfo, video: fs.readFileSync(alala), caption: text })
    } else if (isQuotedAudio) {
      conn.sendMessage(i, { contextInfo, audio: fs.readFileSync(alala) })
    } else {
      conn.sendMessage(i, { contextInfo, text })
    }
  }

  setReply(`Sukses Mengirim Broadcast Ke ${userList.length} Pengguna`)
}
break

case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let aud = `https://cdn.filestackcontent.com/JvgFhW8nSWu29FTtGhgv`
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
var alala = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
}
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)

for (let i of anus) {
let text = Ehztext(`
*_Broadcast Group_*

––––––『 *MESSAGE* 』––––––

${q}\n\nDate : ${calender}

`)

await sleep(1000)
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
externalAdReply:{
showAdAttribution: true,
renderLargerThumbnail : true,
title: `${baileysVersion}`,
body:`Runtime ${runTime} `,
mediaType: 1, 
containsAutoReply: true,
thumbnailUrl:"https://telegra.ph/file/89178aae70c89f30febca.png"
}
}
if(isQuotedImage || isImage){
conn.sendMessage(i,{contextInfo,image:fs.readFileSync(alala),caption:text})

} else if(isQuotedVideo || isVideo){
conn.sendMessage(i,{contextInfo,video:fs.readFileSync(alala),caption:text})
} else if(isQuotedAudio){
conn.sendMessage(i,{contextInfo,Audio:fs.readFileSync(alala)})
} else  
 conn.sendMessage(i,{contextInfo,text})
 
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'public':
	if (!isOwner) return onlyOwner()
	if (publik) return setReply('Udah di mode publick kak')
	publik = true
	let bab =`Mode public aktif kak`
	setReply(bab)
	break
        case 'join':{
	if(!isOwner) return onlyOwner()
	let link = q.startsWith("http")
	if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
	var url = args[1]
	let ano = q.split('https://chat.whatsapp.com/')[1]
	await conn.groupAcceptInvite(ano)
	setReply("Sukses join group")
	}
	break
        case 'out':
	if (!isGroup) return onlyGroup()
	if (!isOwner) return onlyOwner()
	await conn.groupLeave(from)
	break
			
	case 'self':
	if (!isOwner) return onlyOwner()
	if (publik == false) return setReply('Udah di mode self kak')
	publik = false
	let breh =`Mode self aktif kak`
	setReply(breh)
	break
  case 'banchat':{
	if (!isOwner && !isGroup && !isGroupAdmins) return onlyGroup() 
	if (isBanchat) return setReply(`udah di ban`)
	db.data.chats[from].banchat = true
	setReply(`Bot berhasil Ban di group ini`)
	}
	break
        
	
	case 'unbanchat':
	if (!isOwner && !isGroup && !isGroupAdmins) return onlyGroup() 
	try {
	if (!isBanchat) return setReply(`udah di UnBan`)
	db.data.chats[from].banchat = false
	setReply(`Bot telah di Unban di group ini`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break

//Bug by Ius yg udah gua pecahin kodenya 😎
case 'sendbug':
try{
if(!isOwner) return onlyOwner()
let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply("Sending...")
await conn.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: fcall})
let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
conn.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: a });
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break
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
//Eval.code
case '👉': {
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
  
    
//=================================================================================================
 //Akhir switch command   

default:

if (isCmd && !isAccept) {
await Nothing(toFirstCase(command), dash, allcommand)
const stringSimilarity = require("string-similarity");
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
setReply(`ᴄᴏᴍᴍᴀɴᴅ *${prefix+command}* ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ\ɴᴍᴜɴɢᴋɪɴ ʏᴀɴɢ ᴋᴀᴍᴜ ᴍᴀᴋꜱᴜᴅ ᴀᴅᴀʟᴀʜ *${prefix+matches.bestMatch.target.toLowerCase()}*`)
} 
} 
//autosticker
        if (db.data.settings['settingbot'].autoSticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
                conn.sendImageAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
                reply(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
                conn.sendVideoAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
            }
        }
 //User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}
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
if (budy.startsWith('Assalamualaikum') || budy.startsWith('assalamualaikum')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(walaikumsalam)
}
//Jika ada yg ara bot✓
if (katara.includes(budy)) {		
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(wibu)
}
//Jika ada yang tag nomer owner
if (isGroup && budy.includes(`${devoloper1}`)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendSticker(TagOwner)

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
conn.sendMessage(from,{text:  `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`}, { quoted: dev })
 }
//Jika ada yg toxic botz akan merespon✓
if (bad.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(astaga)

}
                                 

} catch (err){
console.log(err)
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan install terlebih dahulu`
return await conn.sendText(dev.key.remoteJid, teks, dev)
}
await conn.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, dev) 
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
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

conn.sendText(Ownerin, teks, dev)

if(!autoblockcmd){
//await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, dev, {caption: "System Error"})
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
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true 
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
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
conn.sendMessage(Ownerin, {text : util.format(e)})
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
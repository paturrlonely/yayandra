const version = require("baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

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
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

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

////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

/*
let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
*/



exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return `
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
⬪ ${week}, ${calender} 
⬪ ${timeWib} WIB 
⬪ ${dateIslamic}

]––––––『 *Commands* 』––––––[
 ${readmore}`}

exports.fitur = (prefix) => {
return `
${gris}⨳ INFO ⨳${gris}

╰⪧ .runtime
╰⪧ .speed
╰⪧ .script
╰⪧ .status
╰⪧ .rules
╰⪧ .dashboard 
╰⪧ .donasi
╰⪧ .owner
╰⤸

${gris}⨳ ANONYMOUS ⨳${gris}

╰⪧ .confess
╰⪧ .menfess
╰⤸

${gris}⨳ GROUP ⨳${gris}

╰⪧ .on (keamanan)
╰⪧ .absen
╰⪧ .mulaiabsen
╰⪧ .cekabsen
╰⪧ .hapusabsen
╰⪧ .inspect
╰⪧ .intro
╰⪧ .delete
╰⪧ .opentime
╰⪧ .closetime
╰⪧ .gc
╰⪧ .infogc
╰⪧ .linkgc
╰⪧ .resetlinkgc
╰⪧ .add
╰⪧ .kick
╰⪧ .addkick
╰⪧ .delkick
╰⪧ .listkick
╰⪧ .promote
╰⪧ .demote
╰⪧ .tagadmin
╰⪧ .tagme
╰⪧ .hidetag
╰⪧ .tagall
╰⪧ .jid
╰⪧ .read
╰⪧ .listonline
╰⪧ .jodohku
╰⪧ .jadian
╰⪧ .caridoi
╰⪧ .tembak
╰⪧ .terima
╰⪧ .tolak
╰⪧ .putus
╰⪧ .contag
╰⪧ .getname
╰⪧ .setppgc
╰⪧ .delppgc
╰⪧ .getppgc
╰⪧ .setnamegc
╰⪧ .setdesc
╰⪧ .banstik
╰⪧ .unbanstik
╰⤸

${gris}⨳ GAME ⨳${gris}

╰⪧ .math
╰⪧ .tebakgambar
╰⪧ .tebakbendera
╰⪧ .tebakkata
╰⪧ .tebaktebakan
╰⪧ .tebaklirik
╰⪧ .tebaklagu
╰⪧ .tekateki
╰⪧ .tebakkimia
╰⪧ .susunkata
╰⪧ .siapaaku
╰⪧ .family100
╰⪧ .caklontong
╰⪧ .profil
╰⪧ .claim
╰⪧ .transfer
╰⪧ .limit
╰⪧ .buylimit
╰⪧ .buyglimit
╰⪧ .givelimit
╰⪧ .kuranglimit
╰⪧ .givesaldo
╰⪧ .kurangsaldo
╰⪧ .topbalance
╰⤸

${gris}⨳ RPG ⨳${gris}

╰⪧ .daftar
╰⪧ .unreg
╰⪧ .my
╰⪧ .tomoney
╰⪧ .adventure
╰⪧ .bank
╰⪧ .nabung
╰⪧ .tarik
╰⪧ .korupsi
╰⪧ .belipet
╰⪧ .berburu
╰⪧ .berdagang
╰⪧ .berkebun
╰⪧ .bonus
╰⪧ .buah
╰⪧ .build
╰⪧ .bunuh
╰⪧ .casino
╰⪧ .collect
╰⪧ .cook / masak
╰⪧ .cooldown
╰⪧ .craft
╰⪧ .daily
╰⪧ .dungeon
╰⪧ .eat / makan
╰⪧ .berimakan
╰⪧ .fight
╰⪧ .gajian
╰⪧ .go / pergi
╰⪧ .heal
╰⪧ .hourclaim
╰⪧ .hunt
╰⪧ .inv 
╰⪧ .kandang
╰⪧ .karung
╰⪧ .kerja
╰⪧ .koboy
╰⪧ .kolam
╰⪧ .latih
╰⪧ .lb
╰⪧ .maling
╰⪧ .mancing
╰⪧ .membunuh
╰⪧ .mentransfer
╰⪧ .meracik
╰⪧ .merampok
╰⪧ .merchant 
╰⪧ .mining
╰⪧ .minum
╰⪧ .misi
╰⪧ .monthly
╰⪧ .mulung 
╰⪧ .nambang
╰⪧ .nebang
╰⪧ .ngocok ❌
╰⪧ .nguli
╰⪧ .ngojek
╰⪧ .open
╰⪧ .openbo
╰⪧ .pasar
╰⪧ .ngelont
╰⪧ .petshop
╰⪧ .polisi
╰⪧ .ramuan
╰⪧ .redeem
╰⪧ .referal
╰⪧ .repair
╰⪧ .restoran
╰⪧ .rob
╰⪧ .roket 
╰⪧ .role
╰⪧ .nyampah
╰⪧ .slectskill
╰⪧ .shop 
╰⪧ .tokoikan
╰⪧ .smelt
╰⪧ .smith
╰⪧ .sumbangan
╰⪧ .taxy
╰⪧ .tfplug
╰⪧ .upgrade
╰⪧ .weekly
╰⤸

${gris}⨳ DOWNLOAD ⨳${gris}

╰⪧ .play
╰⪧ .ytmp3
╰⪧ .ytmp4
╰⪧ .instagram 
╰⪧ .tiktok
╰⪧ .tiktokaudio
╰⪧ .mediafire
╰⪧ .gdrive
╰⪧ .githubdl
╰⤸

${gris}⨳ AI ⨳${gris}

╰⪧ .luminai
╰⪧ .
╰⪧ .
╰⪧ .
╰⤸

${gris}⨳ SICKER ⨳${gris}

╰⪧ .sticker
╰⪧ .take
╰⪧ .qc
╰⪧ .emojimix
╰⪧ .smeme
╰⪧ .swm
╰⪧ .stickhandhold
╰⪧ .stickshinobu
╰⪧ .stickhighfive
╰⪧ .stickcuddle
╰⪧ .stickcringe
╰⪧ .stickdance
╰⪧ .stickhappy
╰⪧ .stickglomp
╰⪧ .sticksmug
╰⪧ .stickblush
╰⪧ .stickawoo
╰⪧ .stickwave
╰⪧ .sticksmile
╰⪧ .stickslap
╰⪧ .sticknom
╰⪧ .stickpoke
╰⪧ .stickwink
╰⪧ .stickbonk
╰⪧ .stickbully
╰⪧ .stickyeet
╰⪧ .stickbite
╰⪧ .stickkiss
╰⪧ .sticklick
╰⪧ .stickpat
╰⪧ .stickhug
╰⪧ .stickkill
╰⪧ .stickcry
╰⪧ .stickspank
╰⪧ .sticktickle
╰⤸

${gris}⨳ FUN ⨳${gris}

╰⪧ .cekmemek
╰⪧ .cekkontol
╰⪧ .dare
╰⪧ .truth
╰⪧ .jjmeryani
╰⪧ .tiktokghea
╰⪧ .tiktokpanrika
╰⪧ .tiktokbocil
╰⪧ .tiktokkayes
╰⪧ .videogalau
╰⪧ .cosplayangel
╰⪧ .videowibu
╰⪧ .chinese
╰⪧ .hijab
╰⪧ .indo
╰⪧ .japanaese
╰⪧ .korean
╰⪧ .malay
╰⪧ .randomboy
╰⪧ .randomgirl
╰⪧ .thai
╰⪧ .vietnamese
╰⪧ .cry
╰⪧ .kill
╰⪧ .hug
╰⪧ .pat
╰⪧ .lick
╰⪧ .kiss
╰⪧ .bite
╰⪧ .yeet
╰⪧ .bully
╰⪧ .bonk
╰⪧ .wink
╰⪧ .poke
╰⪧ .nom
╰⪧ .slap
╰⪧ .smile
╰⪧ .wave
╰⪧ .awoo
╰⪧ .blush
╰⪧ .smug
╰⪧ .glomp
╰⪧ .happy
╰⪧ .dance
╰⪧. cringe
╰⪧ .cuddle
╰⪧ .highfive
╰⪧ .handhold
╰⪧ .tickle
╰⪧ .feed
╰⤸

${gris}⨳ TOOLS & SHORT ⨳${gris}

╰⪧ .tourl
╰⪧ .ssweb
╰⪧ .fetch
╰⪧ .google
╰⪧ .tinyurl
╰⪧ .nobg
╰⪧ .gimage
╰⪧ .pinterest
╰⪧ .cut30
╰⪧ .ocr
╰⪧
╰⤸

${gris}⨳ CONVERT ⨳${gris}

╰⪧ .kodebahasa
╰⪧ .translate
╰⪧ .sound
╰⪧ .tts
╰⪧ .bass
╰⪧ .blown
╰⪧ .deep
╰⪧ .earrape
╰⪧ .fast
╰⪧ .fat
╰⪧ .robot
╰⪧ .slow
╰⪧ .smooth
╰⪧ .ghost
╰⪧ .hode
╰⪧ .nightcore
╰⪧ .tupai
╰⪧ .imut
╰⪧ .toptt
╰⪧ .toimg
╰⪧ .tomp4
╰⪧ .tomp3
╰⪧ .toptv
╰⪧ .togif
╰⪧ .volume
╰⪧ .terbalik
╰⪧ .toviewonce
╰⤸

${gris}⨳ ISLAMIC ⨳${gris}

╰⪧ .surah
╰⪧ .listsurah
╰⪧ .getsurah
╰⪧ .alkitab (kristen)
╰⪧ .kisahnabai
╰⪧ .ayatkursi
╰⪧ .bacaansholat
╰⪧ .niatsholat
╰⪧ .asmaulhusna
╰⪧ .ayatkursi
╰⪧ .doaharian
╰⪧ .hadist
╰⤸

${gris}⨳ PRIMBON ⨳${gris}

╰⪧ .artinama
╰⪧ .artimimpi
╰⪧ .kecocokanpasangan
╰⪧ .kecocokannama
╰⪧ .ramalancinta
╰⪧ .jadiannikah
╰⪧ .sifatusaha
╰⪧ .rezeki
╰⪧ .pekerjaan
╰⪧ .penyakit
╰⪧ .nasib
╰⪧ .artitarot
╰⪧ .fengshui
╰⪧ .haribaik
╰⪧ .harisangar
╰⪧ .harisial
╰⪧ .harinaga
╰⪧ .peruntungan
╰⪧ .weton
╰⪧ .karakter
╰⪧ .masasubur
╰⪧ .zodiak
╰⤸

${gris}⨳ QUOTES ⨳${gris}

╰⪧ .quotesanime
╰⪧ .quotesbacot
╰⪧ .quotesbucin
╰⪧ .quotesgalau
╰⪧ .quotesgombal
╰⪧ .quoteshacker
╰⪧ .quotesislam
╰⪧ .quoteskatabijak
╰⪧ .quotesmotivasi
╰⪧ .quotespantun
╰⪧ .quotesrenungan
╰⪧ .quotessenja
╰⤸

${gris}⨳ ANIME ⨳${gris}

╰⪧ .txt2img
╰⪧ .jadianime
╰⪧ .randomanime
╰⪧ .loli
╰⪧ .cosplay
╰⪧ .husbu
╰⪧ .milf
╰⪧ .wallml
╰⪧ .ppcp
╰⤸

${gris}⨳ EPHOTO ⨳${gris}

╰⪧ .glitchtext
╰⪧ .writetext
╰⪧ .advancedglow
╰⪧ .typographytext
╰⪧ .pixelglitch
╰⪧ .neonglitch
╰⪧ .flagtext
╰⪧ .flag3dtext
╰⪧ .deletingtext
╰⪧ .blackpinkstyle
╰⪧ .glowingtext
╰⪧ .underwatertext
╰⪧ .logomaker
╰⪧ .cartoonstyle
╰⪧ .papercutstyle
╰⪧ .watercolortext
╰⪧ .effectclouds
╰⪧ .blackpinklogo
╰⪧ .gradienttext
╰⪧ .summerbeach
╰⪧ .luxurygold
╰⪧ .multicoloredneon
╰⪧ .sandsummer
╰⪧ .galaxywallpaper
╰⪧ .1917style
╰⪧ .makingneon
╰⪧ .royaltext
╰⪧ .freecreate
╰⪧ .galaxystyle
╰⪧ .lighteffects
╰⤸

${gris}⨳ TEXTPRO ⨳${gris}

╰⪧ .flaming1
╰⪧ .flaming2
╰⪧ .flaming3
╰⪧ .fliming4
╰⪧ .flaming5
╰⪧ .tweetc
╰⪧ .
╰⤸

${gris}⨳ NSFW ⨳${gris}

╰⪧ .nsfw
╰⪧ .trap
╰⪧ .hneko
╰⪧ .nwaifu
╰⪧ .animespank
╰⪧ .spank
╰⪧ .gifblowjob
╰⪧ .blowjob
╰⪧ .cuckold
╰⪧ .eba
╰⪧ .pussy
╰⪧ .yuri
╰⪧ .zettai
╰⪧ .hentaivid
╰⪧ .paptt
╰⤸

${gris}⨳ PANEL ⨳${gris}

╰⪧ .panel
╰⪧ .listpanel
╰⪧ .listadminpanel
╰⪧ .createadmin
╰⪧ .listsrv
╰⪧ .delsrv
╰⪧ .listusr
╰⪧ .detusr
╰⪧ .delusr
╰⤸

${gris}⨳ TOKO EHZ ⨳${gris}

╰⪧ .pakaian
╰⪧ .
╰⪧ .
╰⪧ .
╰⪧ .
╰⪧ .
╰⤸

${gris}⨳ TOPUP PAYMENT ⨳${gris}

╰⪧ .pricelist
╰⪧ .pricelistwallet
╰⪧ .pricelistpulsa
╰⪧ .pricelistkuota
╰⪧ .pricelistgame
╰⪧ .saldo
╰⪧ .addsaldo
╰⪧ .minsaldo
╰⪧ .ceksaldo (saldo di website)
╰⪧ .cekip (ip provider)
╰⪧ .sendqr 62xxx
╰⪧ .tutortopup 
╰⪧ .tutordepo 
╰⤸

${gris}⨳ BUG ⨳${gris}

╰⪧ .sendbug
╰⪧ .
╰⪧ .
╰⪧ .
╰⪧
╰⪧
╰⤸

${gris}⨳ STORAGE ⨳${gris}

╰⪧ .addvn
╰⪧ .delvn
╰⪧ .listvn
╰⪧ .addstik
╰⪧ .delstik
╰⪧ .liststik
╰⪧ .addimage
╰⪧ .delimage
╰⪧ .listimage
╰⪧ .addvideo
╰⪧ .delvideo
╰⪧ .listvideo
╰⪧ .addrespon
╰⪧ .delrespon
╰⪧ .listrespon
╰⤸

${gris}⨳ SETTINGS ⨳${gris}

╰⪧ .restart
╰⪧ .setreply
╰⪧ .setmenu
╰⪧ .autosticker
╰⪧ .autobio
╰⪧ .delsampah
╰⪧ .blockcmd
╰⪧ .unblockcmd
╰⪧ .listblockcmd
╰⪧ .adderror
╰⪧ .delerror
╰⪧ .listerror
╰⪧ .addcmdowner
╰⪧ .delcmdowner
╰⪧ .listcmdowner
╰⪧ .addccmdprem
╰⪧ .delcmdprem
╰⪧ .listcmdprem
╰⪧ .addcmdlimit
╰⪧ .delcmdlimit
╰⪧ .listcmdlimit
╰⪧ .clearsession
╰⪧ .setimgthumb
╰⪧ .setbio
╰⪧ .setppbot
╰⪧ .delppbot
╰⪧ .clearalluser
╰⪧ .clearallerror
╰⤸

${gris}⨳ OWNER ⨳${gris}

╰⪧ .addcase
╰⪧ .getcase
╰⪧ .delcase
╰⪧ .listcase
╰⪧ .addplugin
╰⪧ .getplugin
╰⪧ .delplugin
╰⪧ .listplugin
╰⪧ .delfolder
╰⪧ .delfile
╰⪧ .listgc
╰⪧ .listpc
╰⪧ .addowner
╰⪧ .delowner
╰⪧ .listowner
╰⪧ .addsewa
╰⪧ .listsewa
╰⪧ .ceksewa
╰⪧ .addprem
╰⪧ .cekprem
╰⪧ .delprem
╰⪧ .listprem
╰⪧ .ban
╰⪧ .unban
╰⪧ .listban
╰⪧ .clearallban
╰⪧ .block
╰⪧ .unblock
╰⪧ .clearallblock
╰⪧ .listblock
╰⪧ .bcgc
╰⪧ .backup
╰⪧ .join
╰⪧ .out
╰⪧ .public
╰⪧ .self
╰⪧ .spamwa
╰⪧ .$
╰⪧ .👉 _evalcode_

${gris}⨳ BIG THANKS ⨳${gris}
• Penyedia Modules 
• Penyedia Api
• Dittaz
• DikaArdnt
• Ehanz
• Lana
• NasirXml
• Danu
• Avosky
`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})

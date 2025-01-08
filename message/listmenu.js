const chalk = require('chalk')
const fs = require('fs')

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

global.thanksto = (prefix) => {
return Ehztext(`${gris}ＢＩＧ ＴＨＡＮＫＳ ＦＯＲ${gris}
• Penyedia Modules 
• Penyedia Api
• Dittaz
• DikaArdnt
• Ehanz
• Lana
• NasirXml
• Danu
• Avosky`)}

global.menuinfo = (prefix) => {
return Ehztext(`${gris}⨳ INFO ⨳${gris}

╰⪧ .runtime
╰⪧ .speed
╰⪧ .script
╰⪧ .status
╰⪧ .rules
╰⪧ .dashboard 
╰⪧ .donasi
╰⪧ .owner
╰⤸`)}

global.menuanonymous = (prefix) => {
return Ehztext(`${gris}⨳ ANONYMOUS ⨳${gris}

╰⪧ .confess
╰⪧ .menfess
╰⤸`)}

global.menugrup = (prefix) => {
return Ehztext(`${gris}⨳ GROUP ⨳${gris}

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
╰⤸`)}

global.menugame = (prefix) => {
return Ehztext(`${gris}⨳ GAME ⨳${gris}

╰⪧ .math
╰⪧ .tebakgambar
╰⪧ .tebakbendera
╰⪧ .tebakkata
╰⪧ .tebaktebakan
╰⪧ .tebaklirik
╰⪧ .tekateki
╰⪧ .tebaklagu
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
╰⤸`)}

global.menurpg = (prefix) => {
return Ehztext(`${gris}⨳ RPG ⨳${gris}

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
╰⪧ .war
╰⪧ .atk
╰⤸`)}

global.menudownload = (prefix) => {
return Ehztext(`${gris}⨳ DOWNLOAD ⨳${gris}

╰⪧ .play
╰⪧ .ytmp3
╰⪧ .ytmp4
╰⪧ .instagram 
╰⪧ .tiktok
╰⪧ .tiktokaudio
╰⪧ .mediafire
╰⪧ .gdrive
╰⪧ .githubdl
╰⤸`)}

global.menuai = (prefix) => {
return Ehztext(`${gris}⨳ AI ⨳${gris}

╰⪧ .luminai
╰⤸`)}


global.menusticker = (prefix) => {
return Ehztext(`${gris}⨳ SICKER ⨳${gris}

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
╰⤸`)}

global.menufun = (prefix) => {
return Ehztext(`${gris}⨳ FUN ⨳${gris}

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
╰⤸`)}

global.menutools = (prefix) => {
return Ehztext(`${gris}⨳ TOOLS & SHORT ⨳${gris}

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
╰⤸`)}

global.menuconvert = (prefix) => {
return Ehztext(`${gris}⨳ CONVERT ⨳${gris}

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
╰⤸`)}

global.menuislamic = (prefix) => {
return Ehztext(`${gris}⨳ ISLAMIC ⨳${gris}

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
╰⤸`)}

global.menuprimbon = (prefix) => {
return Ehztext(`${gris}⨳ PRIMBON ⨳${gris}

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
╰⤸`)}

global.menuquotes = (prefix) => {
return Ehztext(`${gris}⨳ QUOTES ⨳${gris}

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
╰⤸`)}


global.menuanime = (prefix) => {
return Ehztext(`${gris}⨳ ANIME ⨳${gris}

╰⪧ .txt2img
╰⪧ .jadianime
╰⪧ .randomanime
╰⪧ .loli
╰⪧ .cosplay
╰⪧ .husbu
╰⪧ .milf
╰⪧ .wallml
╰⪧ .ppcp
╰⤸`)}

global.menuephoto = (prefix) => {
return Ehztext(`${gris}⨳ EPHOTO ⨳${gris}

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
╰⤸`)}

global.menutextpro = (prefix) => {
return Ehztext(`${gris}⨳ TEXTPRO ⨳${gris}

╰⪧ .flaming1
╰⪧ .flaming2
╰⪧ .flaming3
╰⪧ .fliming4
╰⪧ .flaming5
╰⪧ .tweetc
╰⪧ .
╰⤸`)}

global.menunsfw = (prefix) => {
return Ehztext(`${gris}⨳ NSFW ⨳${gris}

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
╰⤸`)}

global.menupanel = (prefix) => {
return Ehztext(`${gris}⨳ PANEL ⨳${gris}

╰⪧ .panel
╰⪧ .listpanel
╰⪧ .listadminpanel
╰⪧ .createadmin
╰⪧ .listsrv
╰⪧ .delsrv
╰⪧ .listusr
╰⪧ .detusr
╰⪧ .delusr
╰⤸`)}

global.menubug = (prefix) => {
return Ehztext(`${gris}⨳ BUG ⨳${gris}

╰⪧ .sendbug
╰⪧ .
╰⪧ .
╰⪧ .
╰⤸`)}

global.menutopup = (prefix) => {
return Ehztext(`${gris}⨳ TOP UP ⨳${gris}

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
╰⪧ .
╰⪧ .
╰⤸`)}



global.menutoko = (prefix) => {
return Ehztext(`${gris}⨳ TOKO EHZ ⨳${gris}

╰⪧ .pakaian
╰⪧ .
╰⪧ .
╰⪧ .
╰⪧ .
╰⪧ .
╰⪧ .
╰⤸`)}


global.menustorage = (prefix) => {
return Ehztext(`${gris}⨳ STORAGE ⨳${gris}

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
╰⤸`)}

global.menusettings = (prefix) => {
return Ehztext(`${gris}⨳ SETTINGS ⨳${gris}

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
╰⤸`)}


global.menuowner = (prefix) => {
return Ehztext(`${gris}⨳ OWNER ⨳${gris}

╰⪧ .addcase
╰⪧ .getcase
╰⪧ .delcase
╰⪧ .listcase
╰⪧ .addplugin
╰⪧ .getplugin
╰⪧ .delplugin
╰⪧ .listplugin
╰⪧ .getfile
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
╰⪧ .bcuser
╰⪧ .bcgc
╰⪧ .join
╰⪧ .out
╰⪧ .public
╰⪧ .self
╰⪧ .$
╰⪧ .👉 _evalcode_ `)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
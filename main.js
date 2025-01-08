
"use strict";
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
require("./settings.js")
const {
Browsers,
DisconnectReason,
makeInMemoryStore,
makeWASocket,
MessageRetryMap,
//useSingleFileAuthState,
useMultiFileAuthState,
makeCacheableSignalKeyStore,
fetchLatestBaileysVersion,
  generateMessageTag
} = require("baileys")
const chalk = require('chalk')
const fs = require("fs");
const yargs = require('yargs')
const { readdirSync, readFileSync, existsSync,statSync,watch } = fs;
const logg = require('pino')
const chokidar = require('chokidar')
const qrcode = require('qrcode')
const simple = require('./lib/simple') 
//const yargs = require('yargs/yargs')
const CFonts = require('cfonts')
const path = require('path')
const { join,dirname } = require('path')
const { Boom } = require('@hapi/boom')
const _ = require('lodash')
const { fileURLToPath, pathToFileURL } = require('url')
const syntaxerror = require('syntax-error')
const { format } = require('util')
const axios = require ('axios')
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const { color} = require("./lib/color");
const spin = require('spinnies')
const {getRandom, getBuffer,sleep} = require("./lib/myfunc");
if(runWith.includes("eplit")){
}
//const connect = require("./server.js")
const PORT = process.env.PORT || 3000 
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

process.on('uncaughtException', console.error)
const { createRequire } = require('module');
const requireFromFile = createRequire(__filename);

//const __filename = url.fileURLToPath(__filename);
//const __dirname = path.dirname(__filename);

global.__filename = function filename(pathURL = __filename, rmPrefix = process.platform !== 'win32') {
    return rmPrefix ? /file:\/\/\//.test(pathURL) ? 
        url.fileURLToPath(pathURL) : pathURL : url.pathToFileURL(pathURL).toString();
}; 
// Fungsi untuk mendapatkan require dari direktori yang diberikan
global.__require = function require(dir = __filename) {
    return createRequire(dir);
}

// Mengatur opsi dari yargs
global.opts = new Object(
    yargs(process.argv.slice(2))
    .exitProcess(false)
    .parse()
);

const spinner = { 
  "interval": 120,
  "frames": [
"✖ [░░░░░░░░░░░░░░░]",
"✖ [■░░░░░░░░░░░░░░]",
"✖ [■■░░░░░░░░░░░░░]",
"✖ [■■■░░░░░░░░░░░░]",
"✖ [■■■■░░░░░░░░░░░]",
"✖ [■■■■■░░░░░░░░░░]",
"✖ [■■■■■■░░░░░░░░░]",
"✖ [■■■■■■■░░░░░░░░]",
"✖ [■■■■■■■■░░░░░░░]",
"✖ [■■■■■■■■■░░░░░░]",
"✖ [■■■■■■■■■■░░░░░]",
"✖ [■■■■■■■■■■■░░░░]",
"✖ [■■■■■■■■■■■■░░░]",
"✖ [■■■■■■■■■■■■■░░]",
"✖ [■■■■■■■■■■■■■■░]",
"✖ [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})

}
/*/Function Auto delete sampah 
setInterval(() => {
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>
item.endsWith("gif") ||
item.endsWith("png") || 
item.endsWith("mp3") ||
item.endsWith("mp4") || 
item.endsWith("jpg") ||
item.endsWith("webp") ||
item.endsWith("webm") ||
item.endsWith("zip") 
)
if(filteredArray.length > 0){
let teks =`Terdeteksi ${filteredArray.length} file sampah`
console.log(teks)
setInterval(() => {
if(filteredArray.length == 0) return console.log("File sampah telah hilang")
filteredArray.forEach(function (file) {
let sampah = fs.existsSync(file)
if(sampah) fs.unlinkSync(file)
})
}, 15_000)
}
});
}, 30_000*/


CFonts.say('「 Menhera-MD 」', {
    font: 'chrome',
    align: 'left',
    colors: ['blue','white'],
    background: 'white',
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: '20',
});
console.log(color(`🌐--------------------------------------------🌐`,'white'))
console.log(color(`🔻--------×`,'deeppink'))
console.log(`${color(`🎐`,`white`)+color(`-Created By`,`blue`)+color(`:`,`white`)}`,`Ehanzdhonax`)
console.log(`${color(`🎐`,`white`)+color(`-Whatshap`,`blue`)+color(`:`,`white`)}`,`6281316643491`)
console.log(`${color(`🎐`,`white`)+color(`-From`,`blue`)+color(`:`,`white`)}`,`Tasikmalaya`)


const msgRetryCounterMap = MessageRetryMap || { }
const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')

  
const connectToWhatsApp = async () => {



 //Function untuk update runtime di database
setInterval(() => {

let data = global.db.data.others['runtime']

if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime di perbarui")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New update runtime")
}

},60_000)
  
const {Low} = (await import("lowdb"))
//const got = (await import("got"))
const chalk =  (await import("chalk"))

const { JSONFile } = (await import("lowdb/node"))
global.db = new Low( new JSONFile(`database/database.json`))
//global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(conn), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
anonymous: [],
blockcmd: [],
banned: [],
premium: [],
claim: [],
data: [],
sewa: [],
antispam: [],
dashboard: [],
listerror: [],
jadibot: {}, 
sticker: {},
audio: {},
hittoday: [],
clearchat: [],
users: {},
chats: {},
settings : {},
kickon: {},
toxic: [],
others: {},
respon: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()

  
const { state, saveCreds } = await useMultiFileAuthState("session")
//const store = useStore? makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) }) : undefined
const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })
const { version, isLatest } = await fetchLatestBaileysVersion()
if (global.db.data) await global.db.write() 

  
  
//Function untuk update runtime di database
setInterval(() => {
//conn.sendMessage(`628388024064@s.whatsapp.net`, {document: fs.readFileSync(`database/database.json`), mimetype: 'application/octet-stream', fileName: 'database.json'})  

let data = global.db.data.others['runtime']
if(data){ 
if((new Date - data.lastTime) > (60000*60)){
data.runtime = + new Date
data.lastTime = + new Date
console.log("Runtime di perbarui")
} else data.lastTime = + new Date
} else{ global.db.data.others['runtime'] = {
runtime: + new Date,
lastTime: + new Date
}
console.log("New update runtime")
}

},60_000)

  
  //Funtion agar bisa pake button di bailey terbaru  
const patchMessageBeforeSending = (message) => {
const requiresPatch = !!(
message.buttonsMessage ||
message.listMessage || 
message.templateMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {   
deviceListMetadataVersion: 2,  
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
  }


//Funtion agar pesan bot tidak pending 
  
const getMessage = async (key) => {
if(store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'hallo'
}
}


//Untuk menyimpan session  
const auth = {
creds: state.creds,
/** caching membuat penyimpanan lebih cepat untuk mengirim/menerima pesan */
keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
}
 
const connectionOptions = makeWASocket({
logger: logg({ level: "silent" }),
printQRInTerminal: !pairingCode,
auth,


browser: ["Ubuntu", "Chrome", "20.0.04"],
});
if(pairingCode && !connectionOptions.authState.creds.registered) {
        await clearConsole();
		console.log(`The process of connecting to ${pairingNumber}`)
		setTimeout(async () => {
        let code = await connectionOptions.requestPairingCode(pairingNumber)
          code = code?.match(/.{1,4}/g)?.join("-") || code
          console.log(`Pairing code: ${code.toUpperCase()}`);
        }, 3000)

}
async function clearConsole() {
    const isWindows = process.platform === 'win32';
    const isLinuxOrMac = process.platform === 'linux' || process.platform === 'darwin';

    return new Promise((resolve, reject) => {
        const command = isWindows ? 'cls' : (isLinuxOrMac ? 'clear' : '');
        if (command) {
            require('child_process').exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    console.log(stdout);
                    resolve();
                }
            });
        } else {
            console.log('Platform not supported for clearing console.');
            resolve();
        }
    });
}
 
global.conn = simple.makeWASocket2(connectionOptions)
//connect(conn, PORT)

store.bind(conn.ev)
conn.waVersion = version


//welcome
conn.ev.on('group-participants.update', async (anu) => {
require('./message/group.js')(conn, anu)
})


  //auto reject call
conn.ev.on('call', (json) => { 
  const {id, from, status } = json[0]; 
  if (status == 'offer') {
		if(from == "6281717271462@s.whatsapp.net") return
    console.log(json)
    conn.rejectCall(id, from)
   // await sleep (2000)
    conn.sendMessage(from, {text: `I'm busy, don't talk me`});
  } 
})


 conn.ev.on('messages.upsert', async (chatUpdate) => {
try{
if (global.db.data) await global.db.write() 
if (!chatUpdate.messages) return;
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = simple.smsg(conn, m, store)
 
require('./message/case.js')(conn, m, chatUpdate,store)
  
}catch (err){
//Log("Error bro")
console.log(err)
}
  })

conn.ev.process(async(events) => {
if(events['connection.update']) {
const update = events['connection.update']
const { connection, lastDisconnect, qr} = update
  if (qr) {
let qrkode = await qrcode.toDataURL(qr, { scale: 20 })
pairingCode = Buffer.from(qrkode.split`,`[1], 'base64')
  }
const  reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (global.db.data == null) await loadDatabase() 
if (connection === 'close') {
pairingCode = null
console.log(color(lastDisconnect.error, 'deeppink'));
if(lastDisconnect.error == "Error: Stream Errored (unknown)"){
process.send('reset')
} else if (reason === DisconnectReason.badSession) {  
console.log(color(`Bad Session File, Please Delete Session and Scan Again`)); 
process.send('reset') 
} else if (reason === DisconnectReason.connectionClosed) {  
console.log(color("[SYSTEM]", "white"), color('Connection closed, reconnecting...', 'deeppink')); 
process.send('reset')
} else if (reason === DisconnectReason.connectionLost) { 
console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'));
process.send('reset') 
} else if (reason === DisconnectReason.connectionReplaced) {  
console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
conn.logout();   
} else if (reason === DisconnectReason.loggedOut) { 
console.log(color(`Device Logged Out, Please Scan Again And Run.`)); 
conn.logout();  
} else if (reason === DisconnectReason.restartRequired) {
console.log(color("Restart Required, Restarting...")); 
connectToWhatsApp(); 
process.send('reset') 
} else if (reason === DisconnectReason.timedOut) {
console.log(color("Connection TimedOut, Reconnecting..."));
connectToWhatsApp(); 
}
} else if (connection === 'connecting') {
console.log(`${color(``,`white`)+color(`🎐`,`red`)+color(`-`,`white`)}`,`WA v${version.join('.')}`)
console.log(`${color(``,`white`)+color(`🎐`,`blue`)+color(`-`,`blue`)}`,`${calender}`)
console.log(color(`🔺--------×`,'deeppink'))
console.log(color(`🌐--------------------------------------------🌐`,'white'))
console.log(color(`]─`,`blue`),`「`,  color(`BOT WHATSAPP`,`white`), `」`,  color(`─[`,`blue`))
//await sleep(400)  
start(`1`,`Connecting...`)
} else if (connection === 'open') {
 pairingCode = null 
conn.sendMessage(`6281316643491@s.whatsapp.net`, {text: `Tersambung Kembali`})
success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
}
}
const bot = db.data.others['restart']
if(bot){
const m = bot.m
const from = bot.from
let text = 'Bot is connected'
await conn.sendMessage(from,{text},{quoted:m})  
delete db.data.others['restart']
}
// kredensial diperbarui -- simpan
if(events['creds.update']) { 
await saveCreds()
}

// history received
if(events['messaging-history.set']) {
const { chats, contacts, messages, isLatest } = events['messaging-history.set']
console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`)
			}  
  

  
//------------------------------------[BATAS]--------------------------------\\

})

  //Function untuk update gempa BMKG
let gempa = db.data.others['updateGempa']
let data1 = db.data.others['infogempa']
if(!gempa) db.data.others['updateGempa'] = []

if(gempa && gempa.length > 0){

setInterval(async() => {
const {data} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
let nana = /TimurLaut|Tenggara|BaratDaya|BaratLaut|Utara|Timur|Selatan|Barat/
//console.log(data.Infogempa)
let lokasi = data.Infogempa.gempa.Wilayah //.split("km")[1].replace(nana,"").replace(" ",'').replace(" ","")
let waktu = data.Infogempa.gempa.Jam
let caption = ` *INFO GEMPA*

*Tanggal:* ${data.Infogempa.gempa.Tanggal}
*Waktu:* ${data.Infogempa.gempa.Jam}
*Kordinat:* ${data.Infogempa.gempa.Coordinates}
*Magnitudo:* ${data.Infogempa.gempa.Magnitude}
*Kedalaman:* ${data.Infogempa.gempa.Kedalaman}
*Lokasi:* ${data.Infogempa.gempa.Wilayah}
*Potention:* ${data.Infogempa.gempa.Potensi}
*Effect:* ${data.Infogempa.gempa.Dirasakan}

*Note:*
_Untuk menonaktifkan fitur otomatis update gempa tersebut, silahkan ketik .updategempa off_
`

if(data1){
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
let image = {url:"https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap}
  
if(data1.lokasi !== lokasi && data1.lokasi !== waktu){
 
data1.lokasi = lokasi
data1.waktu = waktu
  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(3000)
conn.sendMessage(i,{image,caption}) 
}
}
}

  
} else {
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)

db.data.others['infogempa'] = {
lokasi : lokasi,
waktu: waktu
}

  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(3000)
conn.sendMessage(i,{image,caption}) 
}
}
 
} 

}, 60_000*10)// akhir dari set interval

}// akhir dari gempa.length
 
// Folder plugin
const pluginFolder = path.join(__dirname, "./plugins");
const pluginFilter = (filename) => /\.js$/.test(filename);
global.plugins = {};

// Fungsi untuk menginisialisasi file
async function filesInit(folderPath) {
  const files = readdirSync(folderPath);

  for (let file of files) {
    const filePath = path.join(folderPath, file);
    const fileStat = statSync(filePath);

    if (fileStat.isDirectory()) {
      // Jika file adalah sebuah direktori, panggil kembali fungsi filesInit dengan folder baru sebagai parameter
      await filesInit(filePath);
    } else if (pluginFilter(file)) {
      // Jika file adalah file JavaScript, lakukan inisialisasi
      try {
        const module = require(filePath);
        global.plugins[file] = module.default || module;
      } catch (e) {
        console.error(e);
        delete global.plugins[file];
      }
    }
  }
}

filesInit(pluginFolder);

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    const dir = path.join(pluginFolder, filename);
    if (filename in global.plugins) {
      if (existsSync(dir)) {
        console.log(
          chalk.bgGreen(chalk.black("[ UPDATE ]")),
          chalk.white(`${filename}`)
        );
      } else {
        console.warn(`deleted plugin '${filename}'`);
        return delete global.plugins[filename];
      }
    } else {
      console.log(
        color("[ UPDATE ]"),'greenyellow'),
        console.log(
        color(`${filename}`,'greenyellow')
      );
    }

    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: "module",
      allowAwaitOutsideFunction: true,
    });

    if (err) {
      console.error(`syntax error while loading '${filename}'\n${err}`);
    } else {
      try {
        delete require.cache[require.resolve(dir)];
        const module = require(dir);
        global.plugins[filename] = module.default || module;
      } catch (e) {
        console.error(`error require plugin '${filename}\n${e}'`);
      } finally {
        global.plugins = Object.fromEntries(
          Object.entries(global.plugins).sort(([a], [b]) =>
            a.localeCompare(b)
          )
        );
      }
    }
  }
};

// Buat instance Chokidar watcher
const watcher = chokidar.watch(pluginFolder, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  depth: 99, // Tentukan kedalaman rekursi
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100,
  },
});

// Tambahkan event listener untuk memantau perubahan
watcher.on("all", (event, filePath) => {
  // Panggil fungsi reload jika file yang berubah adalah file JavaScript
  if (event === "change" && filePath.endsWith(".js")) {
    const filename = path.basename(filePath); // Dapatkan nama file dari path
    global.reload(null, filename); // Panggil fungsi reload dengan null untuk _ev dan nama file
  }
});

Object.freeze(global.reload);
watch(pluginFolder, global.reload);

 const Log = (text) =>{
  console.log(text)
 }
  



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


	
global.chalk = chalk
global.clockString = clockString
global.Log = Log

	return conn
 }

connectToWhatsApp()
    

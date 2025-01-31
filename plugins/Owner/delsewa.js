const fs = require('fs-extra')
const toMs = require("ms")
const ms = require("parse-ms")
const moment = require("moment-timezone")

let handler = async (m, { hanz,q, args,setReply, usedPrefix, command }) => {
try{
if(!m.isGroup && !q) return setReply('Masukan id gc/nomer creator group')   
let idGc = m.isGroup ? m.chat : q
let sewa = Object.values(db.data.chats).filter((i) => i.expired !== 0);

if(!m.isGroup && q.startsWith('https://wa.me/')){
    let anu =  q.split('https://wa.me/')[1] 
  
    let order = sewa.filter((i) => i.creator.split('wa.me/')[1] == anu)
    Log(order)
    if(order) delete db.data.chats[order[0].id]
    return setReply('Berhasil menghapus data sewa')
} else {
    delete db.data.chats[idGc]
    return setReply('Berhasil menghapus data order')
    
}


} catch(err){
    Log(err)
}
}
handler.help = ['delorder <idgc>']
handler.tags = ['owner']
handler.command = /^(delorder|delsewa)$/i
handler.owner = true
handler.group = false

module.exports = handler
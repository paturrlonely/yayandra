




exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot

╭────✎「 *SEWA BOT* 」
│*Harga!*
│• Pengguna baru Rp. 5.000/group
│• Perpanjang Rp. 3.000
│• Masa aktif 15 hari
╰─────────❍

╭────✎「 *SEWA BOT* 」
│*Harga!*
│• Pengguna baru Rp. 10.000/group
│• Perpanjang Rp. 5.000
│• Masa aktif 30 hari
╰─────────❍



╭────✎「 *PREMIUM* 」
│*Harga!*
│• Rp. 10.000/orang
│• Masa aktif 3 bulan
╰─────────❍

╭────✎「 *FITUR PREMIUM* 」
│*Listnya!*
│• Limit dan limit game tanpa batas
│• Claim lebih banyak EXP Harian
│• Ubah watermark sticker
│• dan masi banyak lagi
╰─────────❍



*PAYMENT*:
𖦹 Dana
𖦹 Pulsa
- 


_Silahkan ketik .owner / .bayar untuk mengetahui pemilik bot ini_
`
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

    





















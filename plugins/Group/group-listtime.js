const _time = require("../../lib/grouptime.js");

let handler = async (m, { conn, setReply }) => {
    // Mengambil data setTime dari db
    let setTime = db.data.others["setTime"] || [];

    // Inisialisasi teks dengan header
    let teks = "\n\n––––––『 *List Group* 』––––––\n\n";

    // Mengiterasi setiap item dalam setTime
    for (let i of setTime) {
        teks += `• Group: ${i.name}\n`;
        teks += `  Open: ${i.timeOpen}\n`;
        teks += `  Close: ${i.timeClose}\n\n`;
    }

    // Menambahkan total dan catatan
    teks += `*Total ada : ${setTime.length}*`;
    teks += `\n\n📮 *Note:* ↓\n`;
    teks += `• Setclose untuk mengatur waktu grup ditutup\n`;
    teks += `• Setopen untuk mengatur waktu grup dibuka\n`;
    teks += `• Deltime untuk menonaktifkan open/close grup\n`;
    teks += `• Contoh: setopen 21.00\n`;

    // Mengirimkan balasan
    setReply(teks);
};

// Menetapkan properti handler
handler.tags = ["admin"];
handler.command = ["listtime"];
handler.group = true;
handler.admin = true;

module.exports = handler;
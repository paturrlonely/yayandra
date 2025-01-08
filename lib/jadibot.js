const {
    useMultiFileAuthState,
    makeCacheableSignalKeyStore,
    makeWASocket,
    DisconnectReason
} = require("baileys");
const rimraf = require("rimraf");
const fs = require("fs");
const logg = require("pino");
const { Boom } = require("@hapi/boom");
const simple = require("./simple");
const { color } = require("./color");
const chalk = require('chalk');

const client = {}; // Inisialisasi sebagai objek kosong

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
};

const getMessage = async (key, store) => {
    if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg?.message || undefined;
    }
    return {
        conversation: 'hallo'
    };
};

const msgRetryCounterMap = {};
const useStore = !process.argv.includes('--no-store');
const doReplies = !process.argv.includes('--no-reply');

const ensureSessionDir = (sessionDir) => {
    try {
        if (!fs.existsSync(sessionDir)) {
            fs.mkdirSync(sessionDir, { recursive: true });
            console.log(`Direktori ${sessionDir} berhasil dibuat.`);
        }
        
        const credsPath = `${sessionDir}/credentials.json`; // Mengganti nama file kredensial
        if (!fs.existsSync(credsPath)) {
            fs.writeFileSync(credsPath, '{}');
            console.log(`File ${credsPath} berhasil dibuat.`);
        }
    } catch (err) {
        console.error(`Gagal membuat direktori atau file: ${err.message}`);
    }
};

exports.jadibot = async (sock, jid) => {
    const sessionDir = `./jadibot-session/${jid.split("@")[0]}`; // Tentukan direktori untuk kredensial
    ensureSessionDir(sessionDir); // Pastikan folder sesi dan file kredensial ada

    let state, saveCreds;
    try {
        ({ state, saveCreds } = await useMultiFileAuthState(sessionDir, { credsFile: 'credentials.json' }));
    } catch (err) {
        console.error("Gagal memuat state otentikasi:", err);
        return sock.sendMessage(jid, { text: "Gagal memuat sesi bot." });
    }

    const auth = {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'silent', stream: 'store' })),
    };

    const connectionOptions = {
        logger: logg({ level: "silent" }),
        printQRInTerminal: false,
        auth,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    };

    if (!client[jid]) {
        client[jid] = makeWASocket(connectionOptions);

        if (!client[jid].authState.creds.registered) {
            await clearConsole();
            await sock.sendMessage(jid, { text: `Proses menghubungkan ke ${jid}` });
            setTimeout(async () => {
                try {
                    const code = await client[jid].requestPairingCode(jid);
                    await sock.sendMessage(jid, { text: `Kode Pemasangan: ${code?.match(/.{1,4}/g)?.join("-").toUpperCase() || code}` });
                } catch (err) {
                    console.error("Gagal meminta kode pemasangan:", err);
                }
            }, 3000);
        }

        client[jid].ev.on("creds.update", saveCreds);

        client[jid].ev.on("contacts.update", (update) => {
            for (let contact of update) {
                let id = client[jid].decodeJid(contact.id);
                if (store && store.contacts) {
                    store.contacts[id] = { id, name: contact.notify };
                }
            }
        });

        client[jid].ev.on("messages.upsert", async (chatUpdate) => {
            try {
                if (!chatUpdate.messages) return;
                let m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1];
                if (!m.message) return;
                if (m.key && m.key.remoteJid === "status@broadcast") return;
                if (m.key.id.startsWith("BAE5") && m.key.id.length === 16) return;
                m = simple.makeWASocket2(client[jid], m, store);
                require("../message/case")(client[jid], m, chatUpdate, store);
            } catch (err) {
                console.error("Error di messages.upsert:", err);
            }
        });

        client[jid].ev.on("connection.update", async (update) => {
            const { connection, qr, lastDisconnect } = update;
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            if (connection === "open") {
                console.log(color("Koneksi dibuka"));
            }
            if (qr) {
                try {
                    const pairingCode = await generatePairingCode(qr, jid);
                    await sock.sendMessage(jid, { text: `Kode Pemasangan: ${pairingCode}` });
                } catch (err) {
                    console.error("Gagal menghasilkan kode pemasangan:", err);
                }
            }
            if (connection === "close") {
                if (reason === DisconnectReason.restartRequired) {
                    console.log(color("Restart Diperlukan, Mengulang..."));
                    return exports.jadibot(sock, jid);
                } else if (reason === DisconnectReason.timedOut) {
                    console.log(color("Koneksi Waktu Habis, Mencoba Menghubungkan Lagi..."));
                    return exports.jadibot(sock, jid);
                } else {
                    rimraf.sync(sessionDir); // Bersihkan direktori sesi
                    return sock.sendMessage(jid, { text: "Anda tidak lagi menjadi bot." });
                }
            }
        });
    }
};

exports.stopjadibot = (sock, jid) => {
    if (!client[jid]) {
        return sock.sendMessage(jid, { text: "Anda tidak ada di daftar bot." });
    }
    try {
        client[jid].end("Stop");
    } catch (err) {
        console.error("Gagal menghentikan bot:", err);
    }
    try {
        client[jid].logout();
    } catch (err) {
        console.error("Gagal logout bot:", err);
    }
    delete client[jid];
    rimraf.sync(`./jadibot-session/${jid.split("@")[0]}`); // Bersihkan direktori sesi
};

exports.listjadibot = (sock, from) => {
    let mentions = [];
    let text = "Daftar Bot:\n";
    for (let jadibot of Object.values(client)) {
        if (jadibot.user && jadibot.user.jid) { // Pastikan objek dan properti terdefinisi
            mentions.push(jadibot.user.jid);
            text += ` × @${jadibot.user.jid.split("@")[0]}\n`;
        }
    }
    return sock.sendMessage(from, {
        text: text.trim(),
        mentions,
    });
};

const generatePairingCode = async (qr, jid) => {
    try {
        const code = await client[jid].requestPairingCode(jid);
        return code?.match(/.{1,4}/g)?.join("-").toUpperCase() || code;
    } catch (err) {
        console.error("Gagal menghasilkan kode pemasangan:", err);
        return "Error generating code";
    }
};

const clearConsole = () => {
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
            sock.sendMessage('Platform tidak didukung untuk membersihkan konsol.');
            resolve();
        }
    });
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.bgGreen(color("[ UPDATE ]", "black")), chalk.white(`${__filename}`));
    delete require.cache[file];
    require(file);
});


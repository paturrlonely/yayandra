// nono enc buy

'use strict';

require("./settings.js");
const {
  Browsers,
  DisconnectReason,
  makeInMemoryStore,
  makeWASocket,
  MessageRetryMap,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  fetchLatestBaileysVersion,
  generateMessageTag
} = require("baileys");
const chalk = require("chalk");
const fs = require("fs");
const yargs = require("yargs");
const {
  readdirSync,
  readFileSync,
  existsSync,
  statSync,
  watch
} = fs;
const logg = require("pino");
const chokidar = require("chokidar");
const qrcode = require("qrcode");
const simple = require("./lib/simple");
const {
  connectionUpdate
} = require("./message/connection");
const {
  notifGcStore,
  notifGcAlarm,
  notifPrivate,
  autoOpenCloseGc,
  autoNotifSholat,
  autoSholat,
  autoSendTugas,
  notifSholatJumat
} = require("./message/function");
const CFonts = require("cfonts");
const path = require("path");
const {
  join,
  dirname
} = require("path");
const {
  Boom
} = require("@hapi/boom");
const _ = require("lodash");
const {
  fileURLToPath,
  pathToFileURL
} = require("url");
const syntaxerror = require("syntax-error");
const {
  format
} = require("util");
const axios = require("axios");
const {
  color
} = require("./lib/color");
const spin = require("spinnies");
const {
  getRandom,
  getBuffer,
  sleep
} = require("./lib/myfunc");
if (runWith.includes("eplit")) {}
process.on("uncaughtException", console.error);
const {
  createRequire
} = require("module");
const requireFromFile = createRequire(__filename);
global.__filename = function filename(_0x1b3fe2 = __filename, _0x1fdee8 = process.platform !== "win32") {
  if (_0x1fdee8) {
    if (/file:\/\/\//.test(_0x1b3fe2)) {
      return url.fileURLToPath(_0x1b3fe2);
    } else {
      return _0x1b3fe2;
    }
  } else {
    return url.pathToFileURL(_0x1b3fe2).toString();
  }
};
global.__require = function require(_0x2b541a = __filename) {
  return createRequire(_0x2b541a);
};
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
CFonts.say("「 Menhera-MD 」", {
  font: "chrome",
  align: "left",
  colors: ["blue", "white"],
  background: "white",
  letterSpacing: 1,
  lineHeight: 1,
  space: false,
  maxLength: "20"
});
const msgRetryCounterMap = MessageRetryMap || {};
const useStore = !process.argv.includes("--no-store");
const doReplies = !process.argv.includes("--no-reply");
const connectToWhatsApp = async () => {
  const {
    Low: _0x4bb776
  } = await import("lowdb");
  const _0x19d607 = await import("chalk");
  const {
    JSONFile: _0xce2b21
  } = await import("lowdb/node");
  global.db = new _0x4bb776(new _0xce2b21("database/database.json"));
  global.DATABASE = global.db;
  global.loadDatabase = async function _0x5e4627() {
    if (global.db.READ) {
      return new Promise(_0x4b6982 => setInterval(function () {
        if (!global.db.READ) {
          clearInterval(conn);
          _0x4b6982(global.db.data == null ? global.loadDatabase() : global.db.data);
        } else {
          null;
        }
      }, 1000));
    }
    if (global.db.data !== null) {
      return;
    }
    global.db.READ = true;
    await global.db.read();
    global.db.READ = false;
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
      settings: {},
      kickon: {},
      toxic: [],
      others: {},
      respon: {},
      ...(global.db.data || {})
    };
    global.db.chain = _.chain(global.db.data);
  };
  loadDatabase();
  const {
    state: _0x384428,
    saveCreds: _0x5cc3fc
  } = await useMultiFileAuthState("session");
  if (global.db.data) {
    await global.db.write();
  }
  const _0x17e624 = path.join(__dirname, "./plugins");
  const _0x1e5c90 = _0x457ef4 => /\.js$/.test(_0x457ef4);
  global.plugins = {};
  async function _0x4ad11d(_0x4413c2) {
    const _0x1ea6b4 = readdirSync(_0x4413c2);
    for (let _0x2eb7b1 of _0x1ea6b4) {
      const _0x500622 = path.join(_0x4413c2, _0x2eb7b1);
      const _0x30b4d0 = statSync(_0x500622);
      if (_0x30b4d0.isDirectory()) {
        await _0x4ad11d(_0x500622);
      } else if (_0x1e5c90(_0x2eb7b1)) {
        try {
          const _0x4f5278 = require(_0x500622);
          global.plugins[_0x2eb7b1] = _0x4f5278.default || _0x4f5278;
        } catch (_0xdf0bf9) {
          console.error(_0xdf0bf9);
          delete global.plugins[_0x2eb7b1];
          require(_0x2eb7b1);
        }
      }
    }
  }
  _0x4ad11d(_0x17e624);
  global.reload = async (_0x5babe4, _0x5168e8) => {
    if (_0x1e5c90(_0x5168e8)) {
      const _0x12aee = path.join(_0x17e624, _0x5168e8);
      if (_0x5168e8 in global.plugins) {
        if (existsSync(_0x12aee)) {
          console.log(_0x19d607.bgGreen(_0x19d607.black("[ UPDATE ]")), _0x19d607.white("" + _0x5168e8));
          require(_0x5168e8);
        } else {
          console.warn("deleted plugin '" + _0x5168e8 + "'");
          return delete global.plugins[_0x5168e8];
          require(_0x5168e8);
        }
      } else {
        console.log(color("[ UPDATE ]"), "file telah di perbarui");
        console.log(color("" + _0x5168e8, "greenyellow"));
        require(_0x5168e8);
      }
      let _0x177ed4 = syntaxerror(readFileSync(_0x12aee), _0x5168e8, {
        sourceType: "module",
        allowAwaitOutsideFunction: true
      });
      if (_0x177ed4) {
        console.error("syntax error while loading '" + _0x5168e8 + "'\n" + _0x177ed4);
      } else {
        try {
          delete require.cache[require.resolve(_0x12aee)];
          require(_0x12aee);
          const _0x48be95 = require(_0x12aee);
          global.plugins[_0x5168e8] = _0x48be95.default || _0x48be95;
        } catch (_0x2dd6bb) {
          console.error("error require plugin '" + _0x5168e8 + "\n" + _0x2dd6bb + "'");
        } finally {
          global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x4091d6], [_0x9ecec7]) => _0x4091d6.localeCompare(_0x9ecec7)));
        }
      }
    }
  };
  const _0x45e588 = chokidar.watch(_0x17e624, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    }
  });
  _0x45e588.on("all", (_0x365255, _0x477a28) => {
    if (_0x365255 === "change" && _0x477a28.endsWith(".js")) {
      const _0x422af2 = path.basename(_0x477a28);
      global.reload(null, _0x422af2);
    }
  });
  Object.freeze(global.reload);
  watch(_0x17e624, global.reload);
  const _0x410b24 = makeInMemoryStore({
    logger: logg().child({
      level: "fatal",
      stream: "store"
    })
  });
  const {
    version: _0x5b22cc
  } = await fetchLatestBaileysVersion();
  const _0x5b0073 = {
    creds: _0x384428.creds,
    keys: makeCacheableSignalKeyStore(_0x384428.keys, logg().child({
      level: "fatal",
      stream: "store"
    }))
  };
  const _0x2143c2 = _0x526214 => {
    const _0x4a8973 = !!_0x526214.buttonsMessage || !!_0x526214.listMessage || !!_0x526214.templateMessage;
    if (_0x4a8973) {
      _0x526214 = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {}
            },
            ..._0x526214
          }
        }
      };
    }
    return _0x526214;
  };
  const _0x43d2e3 = makeWASocket({
    logger: logg({
      level: "silent"
    }),
    patchMessageBeforeSending: _0x2143c2,
    printQRInTerminal: true,
    auth: _0x5b0073,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  });
  global.conn = simple.makeWASocket2(_0x43d2e3);
  _0x410b24.bind(conn.ev);
  conn.waVersion = _0x5b22cc;
  if (pairingCode && !_0x43d2e3.authState.creds.registered) {
    await _0x1c9e45();
    const _0x7b2643 = require("chalk");
    console.log(_0x7b2643.bgCyan.black("[ INFO ]"), _0x7b2643.cyan.italic("Pastikan Anda telah mengisi nomor bot di file 'Setting.js' untuk melanjutkan!"));
    console.log(_0x7b2643.bgYellow.black("[ CONNECTING ]"), _0x7b2643.cyan.italic("Sedang menyambungkan ke nomor bot Anda: " + pairingNumber + "..."));
    setTimeout(async () => {
      let _0x59dc39 = await _0x43d2e3.requestPairingCode(pairingNumber);
      _0x59dc39 = _0x59dc39?.match(/.{1,4}/g)?.join("-") || _0x59dc39;
      console.log(_0x7b2643.cyan("PAIRING CODE ANDA: " + _0x59dc39.toUpperCase()));
    }, 3000);
  }
  async function _0x1c9e45() {
    const _0x5ca396 = process.platform === "win32";
    const _0xd8ac78 = process.platform === "linux" || process.platform === "darwin";
    return new Promise((_0x1ba7b3, _0x13aa5b) => {
      const _0x4d4a1c = _0x5ca396 ? "cls" : _0xd8ac78 ? "clear" : "";
      if (_0x4d4a1c) {
        require("child_process").exec(_0x4d4a1c, (_0x390a0b, _0xbf4bcd, _0x13e540) => {
          if (_0x390a0b) {
            console.error(_0x390a0b);
            _0x13aa5b(_0x390a0b);
          } else {
            console.log(_0xbf4bcd);
            _0x1ba7b3();
          }
        });
      } else {
        console.log("Platform not supported for clearing console.");
        _0x1ba7b3();
      }
    });
  }
  conn.ev.on("group-participants.update", async _0x38e809 => {
    require("./message/group.js")(conn, _0x38e809);
  });
  conn.ev.on("call", async _0x2f93ea => {
    const _0x53a925 = db.data.settings.anticall?.anticall || false;
    const {
      id: _0x1fc3e4,
      from: _0x825638,
      status: _0x591998
    } = _0x2f93ea[0];
    if (_0x591998 === "offer") {
      if (_0x825638 === "6281260431003@s.whatsapp.net") {
        return;
      }
      console.log(_0x2f93ea);
      if (_0x53a925) {
        try {
          await conn.rejectCall(_0x1fc3e4, _0x825638);
          await conn.sendMessage(_0x825638, {
            text: "I'm busy, don't talk to me."
          });
        } catch (_0x4fd1ea) {
          console.error("Failed to handle call:", _0x4fd1ea);
        }
      } else {
        console.log("Anticall is disabled. Call not rejected.");
      }
    }
  });
  conn.ev.on("messages.upsert", async _0x1a99c9 => {
    try {
      if (global.db?.data) {
        await global.db.write();
      }
      if (!_0x1a99c9.messages) {
        return;
      }
      let _0x212205 = _0x1a99c9.messages[0];
      if (_0x212205.message?.viewOnceMessageV2) {
        _0x212205.message = _0x212205.message.viewOnceMessageV2.message;
      }
      if (_0x212205.message?.documentWithCaptionMessage) {
        _0x212205.message = _0x212205.message.documentWithCaptionMessage.message;
      }
      if (_0x212205.message?.viewOnceMessageV2Extension) {
        _0x212205.message = _0x212205.message.viewOnceMessageV2Extension.message;
      }
      if (!_0x212205.message) {
        return;
      }
      if (_0x212205.key?.id?.startsWith("3EB0") && _0x212205.key.id.length === 22) {
        return;
      }
      _0x212205 = await simple.smsg(conn, _0x212205, _0x410b24);
      require("./message/case.js")(conn, _0x212205, _0x1a99c9, _0x410b24);
    } catch (_0x43a0e4) {
      console.error("Terjadi kesalahan saat memproses pesan:", _0x43a0e4);
    }
  });
  conn.ev.process(async _0x1d44e3 => {
    if (_0x1d44e3["connection.update"]) {
      if (db.data == null) {
        await loadDatabase();
      }
      const _0x40cb74 = _0x1d44e3["connection.update"];
      const {
        connection: _0x526801,
        lastDisconnect: _0x30da01
      } = _0x40cb74;
      if (_0x526801 === "close") {
        const _0x4cccb1 = _0x30da01?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        console.log("Koneksi terputus:", _0x30da01.error);
        if (_0x4cccb1) {
          connectToWhatsApp();
        }
      } else if (_0x526801 === "open") {
        console.log("Berhasil tersambung ke WhatsApp Web!");
      }
      await connectionUpdate(connectToWhatsApp, conn, _0x40cb74);
      await loadDatabase();
    }
    if (_0x1d44e3["creds.update"]) {
      await _0x5cc3fc();
    }
    if (_0x1d44e3["messaging-history.set"]) {
      const {
        chats: _0x396491,
        contacts: _0x3a083d,
        messages: _0x3ee630,
        isLatest: _0x1f6ad
      } = _0x1d44e3["messaging-history.set"];
      console.log("recv " + _0x396491.length + " chats, " + _0x3a083d.length + " contacts, " + _0x3ee630.length + " msgs (is latest: " + _0x1f6ad + ")");
    }
  });
  setInterval(() => {
    try {
      notifSholatJumat(conn);
    } catch (_0x3ccbd6) {
      console.error("Error saat menjalankan sholat jumat:", _0x3ccbd6);
    }
  }, 60000);
  setInterval(() => {
    try {
      autoOpenCloseGc(conn);
    } catch (_0x27153d) {
      console.error("Error saat menjalankan autoOpenCloseGc:", _0x27153d);
    }
  }, 60000);
  setInterval(() => {
    notifGcAlarm(conn);
  }, 60000);
  setInterval(() => {
    notifPrivate(conn);
  }, 60000);
  setInterval(async () => {
    await autoSholat(conn);
  }, 60000);
  setInterval(async () => {
    autoNotifSholat(conn);
  }, 60000);
  setInterval(() => {
    autoSendTugas(conn);
  }, 60000);
  notifGcStore(conn);
  return conn;
};
connectToWhatsApp();
const axios = require("axios");
const FormData = require("form-data");
const jimp = require("jimp");

let handler = async (m, { hanz, usedPrefix, command, args }) => {
    const defaultScale = 2;
    const defaultEnhance = false;

    const validScales = [2, 4, 6, 8, 16];
    const scale = args[0] ? parseInt(args[0]) : defaultScale;

    // Validasi skala
    if (!validScales.includes(scale)) {
        return m.reply(`Nilai untuk upscale harus salah satu dari: ${validScales.join(", ")}.`);
    }

    // Validasi enhance
    const enhance = args[1] ? args[1] === "true" : defaultEnhance;
    if (args[1] && args[1] !== "true" && args[1] !== "false") {
        return m.reply(`Apakah foto kartun atau real? Jika kartun, masukkan "true", jika real, masukkan "false".`);
    }

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";

    // Validasi MIME type
    if (!mime) {
        return m.reply(`Opsi Penggunaan\n\n1. Kirim foto dengan caption ${usedPrefix + command}.\n2. Nilai untuk upscale harus salah satu dari: ${validScales.join(", ")}. (${usedPrefix + command} <nomor>)\n3. Apakah foto kartun atau real? Jika kartun, masukkan "true", jika real, masukkan "false". (${usedPrefix + command} <nomor> <true/false>)`);
    }

    if (!/image\/(jpe?g|png)/.test(mime)) {
        return m.reply(`Tipe ${mime} tidak didukung! Harap kirim gambar JPEG atau PNG.`);
    }

    await m.reply("Mohon tunggu beberapa menit...");

    let img;
    try {
        img = await q.download();
    } catch (error) {
        return m.reply(`Gagal mendownload gambar: ${error.message}`);
    }

    if (!img) {
        return m.reply("Gagal mendownload gambar.");
    }

    let response;
    try {
        response = await upscale(img, scale, enhance);
    } catch (error) {
        return m.reply(`Gagal melakukan upscale: ${error.message}`);
    }

    if (!response || !response.status) {
        return m.reply("Gagal melakukan upscale.");
    }

    hanz.sendFile(m.chat, response.image, "upscaled.jpg", 'Ini dia, Kak!', m);
};

// Ekspor handler
handler.help = ["hd"];
handler.tags = ["ai"];
handler.command = /^(hd|remini)$/i;
handler.limit = true;

module.exports = handler;

// Fungsi untuk melakukan upscale gambar
async function upscale(buffer, size = 2, anime = false) {
    try {
        return await new Promise((resolve, reject) => {
            if (!buffer) return reject("Buffer input is undefined!");
            if (!Buffer.isBuffer(buffer)) return reject("Invalid buffer input");
            if (!/(2|4|6|8|16)/.test(size.toString())) return reject("Invalid upscale size!");

            jimp.read(buffer)
                .then((image) => {
                    const { width, height } = image.bitmap;
                    let newWidth = width * size;
                    let newHeight = height * size;

                    const form = new FormData();
                    form.append("name", "upscale-" + Date.now());
                    form.append("imageName", "upscale-" + Date.now());
                    form.append("desiredHeight", newHeight.toString());
                    form.append("desiredWidth", newWidth.toString());
                    form.append("outputFormat", "png");
                    form.append("compressionLevel", "none");
                    form.append("anime", anime.toString());
                    form.append("image_file", buffer, {
                        filename: "upscale-" + Date.now() + ".png",
                        contentType: "image/png",
                    });

                    axios.post("https://api.upscalepics.com/upscale-to-size", form, {
                        headers: {
                            ...form.getHeaders(),
                            origin: "https://upscalepics.com",
                            referer: "https://upscalepics.com",
                        },
                    })
                    .then((res) => {
                        const data = res.data;
                        if (data.error) return reject("Error from upscaler API.");
                        resolve({
                            status: true,
                            image: data.bgRemoved,
                        });
                    })
                    .catch(reject);
                })
                .catch(reject);
        });
    } catch (e) {
        return {
            status: false,
            message: e.message,
        };
    }
}
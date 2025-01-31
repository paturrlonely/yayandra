let handler = async (m, { hanz, args, text, usedPrefix, command }) => {
    let codeToConvert = text || (m.quoted && m.quoted.text);

    if (!codeToConvert) throw `Masukkan atau reply kode yang ingin diubah`;

    let result;
    if (command === 'toesm') {
        result = convertCJSToESM(codeToConvert);
    } else if (command === 'tocjs') {
        result = convertESMToCJS(codeToConvert);
    } else {
        throw `Perintah tidak dikenal`;
    }

    m.reply(result);
};

handler.help = ['toesm <kode>', 'tocjs <kode>'];
handler.tags = ['code'];
handler.command = /^(toesm|tocjs)$/i;
handler.noCmdStore = true
handler.onlyGroup = true
handler.description = ["ubah code cjs mu jadi esm"]

module.exports = handler;

function convertCJSToESM(code) {
    return code
        .replace(/const (\w+) = require\(['"](.+?)['"]\);?/g, 'import $1 from \'$2\';')
        .replace(/let (\w+) = require\(['"](.+?)['"]\);?/g, 'import $1 from \'$2\';')
        .replace(/var (\w+) = require\(['"](.+?)['"]\);?/g, 'import $1 from \'$2\';')
        .replace(/module\.exports\s*=\s*({?.*}?);?/g, 'export default $1;')
        .replace(/exports\.(\w+)\s*=\s*(\w+);?/g, 'export const $1 = $2;');
}


function convertESMToCJS(code) {
    return code
        .replace(/import (\w+) from ['"](.+?)['"];/g, 'const $1 = require(\'$2\');')
        .replace(/import \* as (\w+) from ['"](.+?)['"];/g, 'const $1 = require(\'$2\');')
        .replace(/import \{(.*?)\} from ['"](.+?)['"];/g, (match, p1, p2) => {
            const imports = p1.split(',').map(i => i.trim());
            return `const { ${imports.join(', ')} } = require('${p2}');`;
        })
        .replace(/export default (\w+);?/g, 'module.exports = $1;')
        .replace(/export const (\w+) = (\w+);?/g, 'exports.$1 = $2;');
}
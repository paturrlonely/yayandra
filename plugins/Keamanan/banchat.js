let handler = async (m,{ hanz, isOwner, setReply, text, command, usedPrefix }) => {
  const isBanchat = m.isGroup ? db.data.chats[m.chat].banchat : false;
  const chat = global.db.data.chats[m.chat];
  if (!m.isAdmin && !isOwner) return setReply("Hanya owner dan admin");
  if (!m.isGroup) return setReply(mess.only.group);
  if (isBanchat) return setReply(`udah di ban`);
  if (chat) db.data.chats[m.chat].banchat = true;
  setReply(`Bot berhasil Ban di group ini`);
};
handler.help = ["banchat"];
handler.tags = ["group"];
handler.command = ["banchat", "mute"];

handler.onlyGroup = true;
handler.description = ["Bot Hanya Dapat Digunakan oleh admin"]

module.exports = handler;

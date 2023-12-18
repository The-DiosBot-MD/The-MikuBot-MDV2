const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙷𝙾𝙻𝙰 𝙰𝚀𝚄𝙸 𝚃𝙴 𝙳𝙴𝙹𝙾 𝙴𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙰𝚂 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 𝚈 𝙻𝙾 𝙿𝚄𝙴𝙳𝙰𝚂 𝙰𝙿𝙾𝚈𝙰 :𝚅*

*➤ 𝚁𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚒𝚘 𝚘𝚏𝚒𝚌𝚒𝚊𝚕 𝚍𝚎𝚕 𝙱𝚘𝚝:*

https://github.com/The-DiosBot-MD/The-MikuBot-MDV2`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/The-DiosBot-MD/The-MikuBot-MDV2`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/The-DiosBot-MD/The-MikuBot-MDV2',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/channel/@AdrianOficial905'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;

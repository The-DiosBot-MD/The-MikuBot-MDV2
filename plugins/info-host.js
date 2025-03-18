

const handler = async (m, {conn, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.info_host

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `${tradutor.texto1[0]}
  
> 𝐻𝑜𝑠𝑡𝑖𝑛𝑔𝑃𝑌

𝐷𝑒𝑠𝑐𝑢𝑏𝑟𝑒 𝑛𝑢𝑒𝑠𝑡𝑟𝑜𝑑 𝑠𝑒𝑟𝑣𝑖𝑐𝑖𝑜𝑠 𝑑𝑒 ℎ𝑜𝑠𝑝𝑒𝑑𝑎𝑗𝑒 𝑝𝑎𝑟𝑎 𝑡𝑢𝑠 𝑝𝑟𝑜𝑦𝑒𝑐𝑡𝑜𝑠 𝑐𝑜𝑛𝑡𝑟𝑜𝑙𝑎𝑑𝑜𝑠 𝑝𝑜𝑟 𝑠𝑒𝑟𝑣𝑖𝑑𝑜𝑟𝑒𝑠 𝑐𝑎𝑝𝑎𝑐𝑒𝑠 

𝑇𝑜𝑑𝑜 𝑒𝑠𝑡𝑜 𝑝𝑜𝑟 𝑛𝑢𝑒𝑠𝑡𝑟𝑎 𝑎𝑝𝑝 "𝑇𝑒 𝑒𝑠𝑝𝑒𝑟𝑎𝑚𝑜𝑠 𝑎ℎ𝑖"

𝐴𝑝𝑝 : 𝐻𝑜𝑠𝑡𝑖𝑛𝑔𝑃𝑌

𝐿𝑖𝑛𝑘 𝑑𝑒 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎 : https://www.mediafire.com/file/nzhhsf7fmn2bqkw/HostingPy.apk/file

𝐴𝑦𝑢𝑑𝑎 𝑦 𝑆𝑜𝑝𝑜𝑟𝑡𝑒 : +595976126756

𝐶𝑎𝑛𝑎𝑙 𝑂𝐹𝐶 : https://whatsapp.com/channel/0029Vak4e1R4NVifmh8Tvi3q
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/The-DiosBot-MD/The-MikuBot-MDV2`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝐇𝐨𝐬𝐭𝐢𝐧𝐠𝐏𝐘 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/The-DiosBot-MD/The-MikuBot-MDV2',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': tradutor.texto2,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://whatsapp.com/channel/0029Vak4e1R4NVifmh8Tvi3q'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
}; 
handler.command = ['host', 'hostingpy'];
export default handler;

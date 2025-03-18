const handler = async (m, {conn, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.info_groupsofc

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `${tradutor.texto1[0]}

${tradutor.texto1[1]}
1.- https://chat.whatsapp.com/C92isvspFcXCtqv2PqCfHI

2.- https://chat.whatsapp.com/GRSxiYdDSGx10wMFeaUGYh

3.- https://chat.whatsapp.com/FwFDkYcyxrY3UyB4eEhYsY

4.- https://chat.whatsapp.com/IwnXl5PyzdU9eauaF6mEWY

> 𝐶𝑎𝑛𝑎𝑙 𝑂𝑓𝑖𝑐𝑖𝑎𝑙 :

1.- https://whatsapp.com/channel/0029VaGt7Uk6WaKkEDZUh43W

> 𝐶𝑜𝑚𝑢𝑛𝑖𝑑𝑎𝑑 𝑂𝑓𝑖𝑐𝑖𝑎𝑙

1.- https://chat.whatsapp.com/IhHPrATwf5RE5DxlxIjhaT`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/The-DiosBot-MD/The-MikuBot-MDV2`},
    'mimetype': `application/${document}`,
    'fileName': `${tradutor.texto2}`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/The-DiosBot-MD/The-MikuBot-MDV2',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': `${tradutor.texto3}`,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.youtube.com/@The-MikuBot-MD'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;

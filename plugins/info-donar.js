/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name}*
*┃*
*┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
*┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 :𝟹*
*┃*
*┃ ➤ 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 𝙲𝙾𝙽 𝚄𝙽 𝙽𝚄𝙼𝙴𝚁𝙾 𝚀𝚄𝙴 𝙽𝙾 𝚄𝚂𝙴𝚂 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙱𝙾𝚃
*┃ ➤ 𝚂𝙸𝙶𝚄𝙴 𝙻𝙰 𝙿𝙰𝙹𝙸𝙽𝙰 𝙳𝙴𝙻 𝙱𝙾𝚃
*┃ ➤ 𝙰𝙿𝙾𝚈𝙰 𝙰𝙻 𝙱𝙾𝚃 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰𝙽𝙳𝙾𝙻𝙾 𝙲𝙾𝙽 𝚃𝚄𝚂 𝙰𝙼𝙸𝙶𝙾𝚂
*┃ ➤ 𝙸𝙶 𝙿𝙾𝚁 𝚂𝙸 𝙼𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚂𝙴𝙶𝚄𝙸𝚁 adri.analegresanchez
*┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁 𝚂𝙸 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂*
*┃ 𝙼𝙰𝚂 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝙻𝙴*
*┃ wa.me/595986637644*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
